import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Typography,
  Select,
  Input,
  Row,
  Col,
  Form,
  Spin,
} from "antd";
import { DataStore, Amplify } from "aws-amplify";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext";
import { Inventario, Products, StockEventInventario } from "../../../models";
import { useNavigate } from "react-router-dom";
import NuevoInventario from '../NuevoInventario';
import CorteInventario from '../../CorteInventario/CorteInventario';

const { Title, Text } = Typography;
const { Option } = Select;
const { Item } = Form;

function EditarInventario() {
  const [producto, setProducto] = useState("");

  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [inventarioProducto, setInventarioProducto] = useState("");

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const navigate = useNavigate();

  let name = producto?.name;

  const { id } = useParams();
  const { productos } = useProductContext();

  const fetchProducto = async () => {
    try {
      const product = await DataStore.query(Products, id);
      setProducto(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducto();
  }, [id]);

 
  const fetchInventary = async () => {
    const inventarioCerveza = await DataStore.query(Inventario, u => u.productsID.eq(id))
    setInventarioProducto(inventarioCerveza);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchInventary();
  }, [id]);

  console.log(inventarioProducto);

  const EliminarProducto = async () => {
    await DataStore.delete(Products, id);
    navigate(-1);
  };

  const regresar = () => {
    navigate(-1);
  };

  //editar nombre
  const MostrarEditarNombre = () => {
    setMostrarEditarNombre(!mostrarEditarNombre);
  };

  const guardarNombre = async () => {
    const updateProducto = await DataStore.save(
      Products.copyOf(producto, updated => {
        updated.name = nuevoNombre;
      })
    );
    setProducto(updateProducto);
    // window.location.reload(false);
  };

  // console.log(inventarioProducto)

  const mostrarCrearInventario = () => {
    setMostrarCrear(!mostrarCrear);
  };

  return (
    <Card>
      <Button
        onClick={regresar}
        type="default"
        style={{ marginBottom: 4, marginLeft: 4 }}
      >
        Da click para Regresar
      </Button>
      <Card title="Editar Producto" key={id}>
        <div style={{ marginBottom: 4 }} key={id}>
          <Typography>Producto Id: {id}</Typography>
          {/* <Button onClick={EliminarProducto} type="danger">
            {" "}
            Eliminar Producto
          </Button> */}
        </div>
        <Divider />
        <Title level={4}>Nombre del Producto: {name}</Title>
        <Button type="primary" onClick={MostrarEditarNombre}>
          Editar Nombre del Producto
        </Button>
        {mostrarEditarNombre && (
          <Card size="small">
            <Input
              placeholder={name}
              onChange={e => setNuevoNombre(e.target.value)}
              value={nuevoNombre}
            />
            <Button onClick={guardarNombre}>Guardar</Button>
          </Card>
        )}
        <Card>
          <Button onClick={mostrarCrearInventario}>Crear Inventario</Button>
          {mostrarCrear && (
            <Card key={id}>
              <NuevoInventario productoID={id} />
            </Card>
          )}
        </Card>
        {inventarioProducto ? (
          inventarioProducto.map(inventario => {
            const { id } = inventario;
         
            return (
              <Card key={id}>
                <CorteInventario id={id} />
              </Card>
            );
          })
        ) : (
          <></>
        )}
      </Card>
    </Card>
  );
}

export default EditarInventario;
