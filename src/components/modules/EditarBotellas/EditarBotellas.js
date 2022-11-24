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
import { DataStore, Amplify, API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import * as queries from "../../../graphql/queries";

import { Inventario, InventarioBotellas, ProductosBotellas } from "../../../models";
import { useNavigate } from "react-router-dom";
import NuevoInventario from "../NuevoInventario";
import CorteInventario from "../../CorteInventario/CorteInventario";
import CorteBotellas from '../CorteBotellas/CorteBotellas';
import NuevoInventarioBotellas from '../NuevoInventarioBotellas/NuevoInventarioBotellas';

const { Title, Text } = Typography;
const { Option } = Select;
const { Item } = Form;

function EditarInventario() {
  const [botella, setBotella] = useState("");

  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [inventarioBotella, setInventarioBotella] = useState("");

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const navigate = useNavigate();

  let name = botella?.name;

  const { id } = useParams();


  const fetchBotellas= async () => {
    try {
      const botellaFetched = await DataStore.query(ProductosBotellas, id);
      setBotella(botellaFetched);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBotellas();
  }, [id]);

  const fetchInventarioBotellas = async () => {
    const inventarioBotellaId = await DataStore.query(InventarioBotellas, inventario => inventario.productosbotellasID("eq", id));

  setInventarioBotella(inventarioBotellaId);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchInventarioBotellas();
  }, [id]);

  const EliminarProducto = async () => {
    await DataStore.delete(ProductosBotellas, id);
    navigate(-1);
  };

  console.log(inventarioBotella);

  const regresar = () => {
    navigate(-1);
  };

  //editar nombre
  const MostrarEditarNombre = () => {
    setMostrarEditarNombre(!mostrarEditarNombre);
  };

  const guardarNombre = async () => {
    const updateBotella = await DataStore.save(
      ProductosBotellas.copyOf(botella, updated => {
        updated.name = nuevoNombre;
      })
    );
    setBotella(updateBotella);
    // window.location.reload(false);
  };

 

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
      <Card title="Editar Botella" key={id}>
        <div style={{ marginBottom: 4 }} key={id}>
          <Typography>Botella Id: {id}</Typography>
          {/* <Button onClick={EliminarProducto} type="danger">
            {" "}
            Eliminar Producto
          </Button> */}
        </div>
        <Divider />
        <Title level={4}>Nombre de la Botella: {name}</Title>
        <Button type="primary" onClick={MostrarEditarNombre}>
          Editar Nombre de la Botella
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
            <Card key={id}><NuevoInventarioBotellas botellaID={id} /></Card>
          )}
        </Card>
        {inventarioBotella ? (
          inventarioBotella.map(inventario => {
            const { id } = inventario;

            return (
              <Card key={id}>
                <CorteBotellas id={id} />
              </Card>
            );
          })
        ) : (
          <div></div>
        )}
      </Card>
    </Card>
  );
}

export default EditarInventario;
