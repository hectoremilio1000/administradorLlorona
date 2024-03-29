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
} from "antd";
import { DataStore } from "aws-amplify";
import { useNavigate } from "react-router-dom";

import { InventarioBotellas, StockInventariosBotellas } from "../../../models";
import MostrarBotellasCompras from '../MostrarBotellasCompras/MostrarBotellasCompras';

function CorteBotellas({ id }) {
  const [inventario, setInventario] = useState(null);
  const [compras, setCompras] = useState("");
  const [ventas, setVentas] = useState("");
  const [tipoTotal, setTipoTotal] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [invMes, setInvMes] = useState("");

  const [showEditar, setShowEditar] = useState(false);

  const [mostrarCompras, setMostrarCompras] = useState(false);

  // eventsCompras
  const [eventCompras, setEventCompras] = useState([]);

  const navigate = useNavigate();

  const inventarioBotella = async () => {
    const inventarioIdBotellaFinal = await DataStore.query(InventarioBotellas, id);
    setInventario(inventarioIdBotellaFinal);
  };

  useEffect(() => {
    inventarioBotella();
  }, [id]);

  // fetch stockCompras
  const FetchCompras = async () => {
    const ComprasTotales = await DataStore.query(StockInventariosBotellas, stock =>
      stock.inventariobotellasID("eq", id)
    );
    setEventCompras(ComprasTotales);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    FetchCompras();
    const subscription = DataStore.observe(InventarioBotellas).subscribe(FetchCompras);
    subscription.unsubscribe();
  }, [id]);

  console.log(inventario);
  console.log("estas son las compras", eventCompras);

  // const array = [
  //   Number(inventario?.inventarioInicialFisico),
  //   Number(inventario?.inventarioFinalFisico),
  //    inventario?.compras, inventario?.ventas
  // ];
  // const initialValue = 0;
  // // console.log(array);
  // const quantity = array.reduce((a, b) => a + b, initialValue);

  const quantity =
   - inventario?.inventarioInicialFisico 
   - inventario?.compras +
    inventario?.ventas +
    inventario?.inventarioFinalFisico

  useEffect(() => {
    if (!quantity) {
      return;
    }
    setCantidad(quantity);
  }, [quantity]);

  console.log(quantity)

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
        InventarioBotellas.copyOf(inventario, updated => {
          updated.total = cantidad;
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

  return (
    <div key={id}>
      {/* <BorrarInventario id={id} /> */}
      {inventario?.fechaInicioConteoFisico &&
        inventario?.fechaFinConteoFisico &&
          (
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
              Fecha inicial: {inventario?.fechaFinConteoFisico}
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
                inventario?.compras &&
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
                <Col span={4}>{inventario?.tipoTotal}</Col>
              </Row>
            </>
            <Divider />
            {!inventario?.compras && (
              <Button
                type="primary"
                onClick={ShowCompras}
                style={{ marginBottom: 5 }}
              >
                Mostrar Compras
              </Button>
            )}
            {mostrarCompras && !inventario?.compras && (
              <Card>
                <MostrarBotellasCompras id={id} />
              </Card>
            )}
            {/* {showEditar && !inventario?.compras && (
              <Card title="Editar Inventario">
                <Compras id={id} />
              </Card>
            )} */}
          </Card>
        )}
    </div>
  );
}

export default CorteBotellas;
