import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Divider,
  Typography,
  Input,
  Select,
  DatePicker,
} from "antd";
import { DataStore } from "aws-amplify";
import { useParams } from "react-router-dom";
import { Empresa } from "../../../models";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;

function EditarEmpresa() {
  const [empresaFetched, setEmpresaFetched] = useState("");

  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [mostrarEditarDireccion, setMostrarEditarDireccion] = useState("");
  const [nuevaDireccion, setNuevaDireccion] = useState("");

  const [mostrarFechaVisita, setMostrarFechaVisita] = useState(false);
  const [nuevaFechaVisita, setNuevaFechaVisita] = useState("");

  const [mostrarVisitado, setMostrarVisitado] = useState(false);
  const [nuevoVisitado, setNuevoVisitado] = useState("");

  const [mostrarYaContacto, setMostrarYaContacto] = useState(false);
  const [nuevoYaContacto, setNuevoYaContacto] = useState("");

  const [mostrarSeCerroEvento, setMostrarSeCerroEvento] = useState(false);
  const [nuevoSeCerroEvento, setNuevoSeCerroEvento] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();


  useEffect(() => {
  
    DataStore.query(Empresa, id).then(setEmpresaFetched);
  }, [id]);

  let direccionCompleta = empresaFetched?.direccionCompleta;
  let fechaVisita = empresaFetched?.fechaVisita;
  let seCerroEvento = empresaFetched?.seCerroEvento;
  let nombre = empresaFetched?.nombre;
  let yaContacto = empresaFetched?.yaContacto;
  let visitado = empresaFetched?.visitado;

  const MostrarEditarEmpresa = () => {
    setMostrarEditarNombre(!mostrarEditarNombre);
  };

  const MostrarEditarDireccion = () => {
    setMostrarEditarDireccion(!mostrarEditarDireccion);
  };

  const MostrarVisitado = () => {
    setMostrarVisitado(!mostrarVisitado);
  };

  const MostrarFechaVisita = () => {
    setMostrarFechaVisita(!mostrarFechaVisita);
  };

  const MostrarYaContacto = () => {
    setMostrarYaContacto(!mostrarYaContacto);
  };

  const MostrarSeCerroEvento = () => {
    setMostrarSeCerroEvento(!mostrarSeCerroEvento);
  };

  const EliminarHotel = async () => {
    await DataStore.delete(Empresa, id);
    navigate(-1);
  };

  const guardarNombre = async () => {
    try {
      const updateEmpresa = await DataStore.save(
        Empresa.copyOf(empresaFetched, updated => {
          updated.nombre = nuevoNombre;
        })
      );
      setEmpresaFetched(updateEmpresa);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const guardarDireccion = async () => {
    const updateEmpresa = await DataStore.save(
      Empresa.copyOf(empresaFetched, updated => {
        updated.direccionCompleta = nuevaDireccion;
      })
    );
    setEmpresaFetched(updateEmpresa);
    // window.location.reload(false);
  };

  //visitado
  const selectVisitado = value => {
    setNuevoVisitado(value);
  };

  const guardarVisitado = async () => {
     const updateEmpresa = await DataStore.save(
       Empresa.copyOf(empresaFetched, updated => {
         updated.visitado = nuevoVisitado;
       })
     );
   setEmpresaFetched(updateEmpresa);
    // window.location.reload(false);
  };

  //guardar Fecha Visita
  const onChange = (date, dateString) => {
    setNuevaFechaVisita(dateString);
  };
  const guardarFechaVisita = async () => {
    const updateEmpresa = await DataStore.save(
      Empresa.copyOf(empresaFetched, updated => {
        updated.fechaVisita = nuevaFechaVisita;
      })
    );
  setEmpresaFetched(updateEmpresa);
    // window.location.reload(false);
  };

  //guardarVisita Recepcionista

  const selectYaContacto = value => {
    setNuevoYaContacto(value);
  };

  const guardarYaContacto = async () => {
    const updateEmpresa = await DataStore.save(
      Empresa.copyOf(empresaFetched, updated => {
        updated.yaContacto = nuevoYaContacto;
      })
    );
   setEmpresaFetched(updateEmpresa);
    // window.location.reload(false);
  };

  //guardar mandado Clientes

  const selectSeCerroEvento = value => {
    setNuevoSeCerroEvento(value);
  };

  const guardarSeCerroEvento = async () => {
 const updateEmpresa = await DataStore.save(
   Empresa.copyOf(empresaFetched, updated => {
     updated.seCerroEvento = nuevoSeCerroEvento;
   })
 );
 setEmpresaFetched(updateEmpresa);
    // window.location.reload(false);
  };

  const regresar = () => {
    navigate(-1);
  };

  return (
    <Card>
      <Button onClick={regresar} type="default" style={{ marginBottom: 4 }}>
        Da click para Regresar
      </Button>
      <div style={{ marginBottom: 4 }}>
        <Typography>Empresa Id: {id}</Typography>
        {/* <Button onClick={EliminarHotel} type="danger">
          {" "}
          Eliminar Hotel
        </Button> */}
      </div>
      <Divider />
      <Card size="small" title="Editar Empresa">
        <Title level={4}>Nombre de la Empresa: {nombre}</Title>
        <Button type="primary" onClick={MostrarEditarEmpresa}>
          Editar
        </Button>
        {mostrarEditarNombre && (
          <Card size="small">
            <Input
              placeholder={nombre}
              onChange={e => setNuevoNombre(e.target.value)}
              value={nuevoNombre}
            />
            <Button onClick={guardarNombre}>Guardar</Button>
          </Card>
        )}
      </Card>

      <Card size="small" style={{ marginTop: 10 }}>
        <Title level={5}>Dirección: {direccionCompleta}</Title>
        <Button type="primary" onClick={MostrarEditarDireccion}>
          Editar
        </Button>

        {mostrarEditarDireccion && (
          <Card size="small">
            <Input
              placeholder={direccionCompleta}
              onChange={e => setNuevaDireccion(e.target.value)}
              value={nuevaDireccion}
            />
            <Button onClick={guardarDireccion}>Guardar</Button>
          </Card>
        )}
      </Card>

      <Card size="small" style={{ marginTop: 10 }}>
        <Title level={5}>Ya se visitó? : {visitado}</Title>
        <Button type="primary" onClick={MostrarVisitado}>
          Editar
        </Button>

        {mostrarVisitado && (
          <Card size="small">
            <Select onChange={selectVisitado} placeholder={visitado}>
              <Option value="si">Sí</Option>
              <Option value="no">No</Option>
            </Select>

            <Button onClick={guardarVisitado}>Guardar</Button>
          </Card>
        )}
      </Card>

      <Card size="small" style={{ marginTop: 10 }}>
        <Title level={5}>Cuando se visitó la empresa? : {fechaVisita}</Title>
        <Button type="primary" onClick={MostrarFechaVisita}>
          Editar
        </Button>

        {mostrarFechaVisita && (
          <Card size="small">
            <DatePicker placeholder={fechaVisita} onChange={onChange} />

            <Button onClick={guardarFechaVisita}>Guardar</Button>
          </Card>
        )}
      </Card>

      <Card size="small" style={{ marginTop: 10 }}>
        <Title level={5}>Ya nos contactaron? : {yaContacto}</Title>
        <Button type="primary" onClick={MostrarYaContacto}>
          Editar
        </Button>

        {mostrarYaContacto && (
          <Card size="small">
            <Select onChange={selectYaContacto} placeholder={yaContacto}>
              <Option value="si">Sí</Option>
              <Option value="no">No</Option>
            </Select>

            <Button onClick={guardarYaContacto}>Guardar</Button>
          </Card>
        )}
      </Card>

      <Card size="small" style={{ marginTop: 10 }}>
        <Title level={5}>El hotel ha mandado clientes? : {seCerroEvento}</Title>
        <Button type="primary" onClick={MostrarSeCerroEvento}>
          Editar
        </Button>

        {mostrarSeCerroEvento && (
          <Card size="small">
            <Select
              onChange={selectSeCerroEvento}
              placeholder={seCerroEvento}
            >
              <Option value="si">Sí</Option>
              <Option value="no">No</Option>
            </Select>

            <Button onClick={guardarSeCerroEvento}>Guardar</Button>
          </Card>
        )}
      </Card>
    </Card>
  );
}

export default EditarEmpresa;
