import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  message,
  Row,
  Typography,
  Input,
} from "antd";
import { DataStore } from "aws-amplify";
import { Inventario, StockEventInventario } from "../../models";
import { useNavigate } from "react-router-dom";
import MostrarCompras from '../modules/MostrarCompras/MostrarCompras';
import MostrarComprasTabla from '../modules/MostrarComprasTabla/MostrarComprasTabla';


function CorteInventario({ id }) {
  const [inventario, setInventario] = useState(null);
  const [compras, setCompras] = useState("");
  const [ventas, setVentas] = useState("");
  const [tipoTotal, setTipoTotal] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [invMes, setInvMes] = useState("");
  const [comprasCeroFinal, setComprasCeroFinal] = useState("");

  const [showEditar, setShowEditar] = useState(false);

  const [mostrarCompras, setMostrarCompras] = useState(false);

  // eventsCompras
  const [eventCompras, setEventCompras] = useState([]);

  //Inputs comentarios
  const [inputEncargado, setInputEncargado] = useState("");



  const [inputGerente, setInputGerente] = useState("");
  

  const navigate = useNavigate();

  const inventarioProducto = async () => {
    const inventarioIdProducto = await DataStore.query(Inventario, id);
    setInventario(inventarioIdProducto);
  };

  useEffect(() => {
    inventarioProducto();
  }, [id]);

  // fetch stockCompras
  const FetchCompras = async () => {
    const ComprasTotales = await DataStore.query(StockEventInventario, stock =>
      stock.inventarioID.eq(id)
    );
    setEventCompras(ComprasTotales);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    FetchCompras();
    const subscription = DataStore.observe(Inventario).subscribe(FetchCompras);
    subscription.unsubscribe();
  }, [id]);

  const quantity =
    -inventario?.inventarioInicialFisico -
    inventario?.compras +
    inventario?.ventas +
    inventario?.inventarioFinalFisico;

  useEffect(() => {
    if (!quantity) {
      return;
    }
    setCantidad(quantity);
  }, [quantity]);

  useEffect(() => {
    if (!quantity) {
      return;
    }
    if (quantity > 0) {
      setTipoTotal("SOBRANTE");
    } else if (quantity < 0) {
      setTipoTotal("FALTANTE");
    } else if (quantity === 0) {
      setTipoTotal("CUADRA");
    }
  }, [quantity]);

  let definirMes = inventario?.fechaInicioConteoFisico.substr(0, 7);

  useEffect(() => {
    if (!definirMes) {
      return;
    }
    setInvMes(definirMes);
  }, [inventario?.fechaInicioConteoFisico]);

  const EditarInventario = () => {
    setShowEditar(!showEditar);
  };

  const ShowCompras = () => {
    setMostrarCompras(!mostrarCompras);
  };

  const GenerarCalculo = async () => {
    try {
      await DataStore.save(
        Inventario.copyOf(inventario, updated => {
          updated.total = quantity;
          updated.tipoTotal = tipoTotal;
        })
      );

      window.location.reload(false);
      message.success("inventario final generado correctamente");
    } catch (error) {
      console.log(error);
      message.error("contacta al administrador");
    }
  };

  const ComprasCero = async () => {
    try {
      await DataStore.save(
        Inventario.copyOf(inventario, updated => {
          updated.compras = 0;
        })
      );

      window.location.reload(false);
      message.success("inventario final generado correctamente");
    } catch (error) {
      console.log(error);
      message.error("contacta al administrador");
    }
  };

  const onComentEncargado = async () => {
      
    try {
          await DataStore.save(
            Inventario.copyOf(inventario, updated => {
              updated.comentarioEncargado = inputEncargado;
            })
          );
      window.location.reload();
      } catch (error) {
      console.log(error)
       message.error("contacta al administrador");
      }
     
   };
  
  const onComentGerente = async () => {
    try {
      await DataStore.save(
        Inventario.copyOf(inventario, updated => {
          updated.comentarioGerente = inputGerente;
        })
      );
     window.location.reload();
    } catch (error) {
        console.log(error);
        message.error("contacta al administrador");
    }    
  };


  
  return (
    <div key={id}>
      {/* <BorrarInventario id={id} /> */}
      {inventario?.fechaInicioConteoFisico &&
        inventario?.fechaFinConteoFisico && (
          <Card key={id}>
            <Typography.Text type="default">
              Inventario id: {id}
            </Typography.Text>
            <Typography.Title level={4}>
              Inventario del mes: {invMes}{" "}
              {/* <Button type="primary" onClick={EditarInventario}>
                Editar inventario o Agregar Compras
              </Button> */}
            </Typography.Title>{" "}
            <Typography.Text>
              Fecha inicial: {inventario?.fechaInicioConteoFisico}
            </Typography.Text>
            <br />
            <Typography.Text>
              Fecha Final: {inventario?.fechaFinConteoFisico}
            </Typography.Text>
            <Divider />
            <>
              {!inventario?.compras ? (
                <div>
                  <Typography.Text type="danger">
                    Recuerda agregar las compras en el botón de Editar
                    Inventario
                  </Typography.Text>
                </div>
              ) : (
                <></>
              )}
              <Row>
                <Col span={3}>Inv Físico Inicial</Col>
                <Col span={3}>Compras</Col>
                <Col span={3}>Ventas</Col>
                <Col span={3}>Inv Físico Fin</Col>
                <Col span={4}>Cantidad Sob/Falt</Col>
                <Col span={4}>Sob/Falt</Col>
                {inventario?.inventarioInicialFisico &&
                (inventario?.compras || inventario?.compras === 0) &&
                inventario?.ventas &&
                inventario?.inventarioFinalFisico ? (
                  <Col span={4}>
                    <Button
                      style={{
                        width: 125,
                        height: "auto",
                        whiteSpace: "normal",
                      }}
                      type="danger"
                      onClick={GenerarCalculo}
                    >
                      Generar Sobrante o faltante
                    </Button>
                  </Col>
                ) : (
                  <></>
                )}
              </Row>
              <Row>
                <Col span={3}>{inventario?.inventarioInicialFisico}</Col>
                <Col span={3}>{inventario?.compras}</Col>
                <Col span={3}>{inventario?.ventas}</Col>
                <Col span={3}>{inventario?.inventarioFinalFisico}</Col>
                <Col span={4}>{inventario?.total}</Col>
                <Col span={4}>
                  {inventario?.total > 0 ? (
                    <p>Sobran {inventario?.total}</p>
                  ) : inventario?.total < 0 ? (
                    <p>Faltan {-1 * inventario?.total}</p>
                  ) : (
                    <p>cuadra</p>
                  )}
                </Col>
              </Row>
            </>
            <Divider />
            {(!inventario?.compras || inventario?.compras === 0) && (
              <Card>
                <Typography.Text>
                  Si las compras durante el período son igual a cero da click
                  aquí
                </Typography.Text>
                <Button
                  onClick={ComprasCero}
                  style={{ background: "green", color: "white" }}
                >
                  Guardar Compras en cero
                </Button>
                {/* <Button onClick={() => {
                // let DefineCero = parseFloat()
                if (inventario?.compras === 0) {
                  console.log(true)
                }
                else {
                  console.log(false)
                }
              }
                
                }>SEE Compras</Button> */}
              </Card>
            )}
            {!inventario?.compras ? (
              <Button
                type="primary"
                onClick={ShowCompras}
                style={{ marginBottom: 5 }}
              >
                Mostrar Compras
              </Button>
            ) : (
              <></>
            )}
            {mostrarCompras && !inventario?.compras && (
              <Card>
                <MostrarCompras id={id} />
              </Card>
            )}
            <Card>
              {inventario?.compras && (
                <>
                  <Typography.Title level={3}>Compras</Typography.Title>
                  <MostrarComprasTabla id={id} />
                </>
              )}
              <Divider />
              {!inventario?.comentarioEncargado && (
                <>
                  <Form.Item label="Comentario Encargado Inventario">
                    <Input onChange={e => setInputEncargado(e.target.value)} />
                  </Form.Item>
                  <Button
                    onClick={onComentEncargado}
                    style={{ marginBottom: 10 }}
                  >
                    Guardar Comentario
                  </Button>
                </>
              )}

              <div>Comentario Encargado: {inventario?.comentarioEncargado}</div>

              <Divider />
              {!inventario?.comentarioGerente && (
                <>
                  <Form.Item label="Comentario Gerente Inventario">
                    <Input onChange={e => setInputGerente(e.target.value)} />
                  </Form.Item>
                  <Button
                    onClick={onComentGerente}
                    style={{ marginBottom: 10 }}
                  >
                    Guardar Comentario
                  </Button>
                </>
              )}
              <div>Comentario Gerente: {inventario?.comentarioGerente}</div>
            </Card>
          </Card>
        )}
    </div>
  );
}

export default CorteInventario;
