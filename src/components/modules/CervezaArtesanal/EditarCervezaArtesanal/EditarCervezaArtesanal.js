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

import { useNavigate } from "react-router-dom";
import NuevoInventario from "../NuevoInventario";
import CorteInventario from "../CorteInventario";
import { CERVEZAARTESANAL, INVCERVARTESANAL } from "../../../../models";

const { Title, Text } = Typography;
const { Option } = Select;
const { Item } = Form;

function EditarCervezaArtesanal() {
  const [cervezaArtesanal, setCervezaArtesanal] = useState("");

  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [inventarioCervezaArtesanal, setInventarioCervezaArtesanal] = useState("");

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const navigate = useNavigate();

  let name = cervezaArtesanal?.nam;


  const { id } = useParams();
  

  const fetchCervezaArtesanal = async () => {
    try {
      const product = await DataStore.query(CERVEZAARTESANAL, id);
      setCervezaArtesanal(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCervezaArtesanal();
  }, [id]);

 
  const fetchInvArtesanal = async () => {
    const inventaryCervezaArtesanalFinal = await DataStore.query(INVCERVARTESANAL, u=>u.cervezaartesanalID.eq(id))
    setInventarioCervezaArtesanal(inventaryCervezaArtesanalFinal);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchInvArtesanal();
  }, [id]);

  const EliminarProducto = async () => {
    await DataStore.delete(CERVEZAARTESANAL, id);
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
      CERVEZAARTESANAL.copyOf(CERVEZAARTESANAL, updated => {
        updated.nam = nuevoNombre;
      })
    );
    setCervezaArtesanal(updateProducto);
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
        <Title level={4}>Nombre de la cerveza artesanal: {name}</Title>
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
        {inventarioCervezaArtesanal ? (
          inventarioCervezaArtesanal.map(inventario => {
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

export default EditarCervezaArtesanal;
