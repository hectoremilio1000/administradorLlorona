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
import { useHotelContext } from "../../contexts/HotelContext";
import { useParams } from "react-router-dom";
import { Hotel } from "../../../models";
import { useNavigate } from "react-router-dom";


const { Title, Text } = Typography;
const { Option } = Select;

function EditarHotel() {
  const [hotelFetched, setHotelFetched] = useState("");

  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [mostrarEditarDireccion, setMostrarEditarDireccion] = useState("");
  const [nuevaDireccion, setNuevaDireccion] = useState("");

  const [mostrarFechaVisita, setMostrarFechaVisita] = useState(false);
  const [nuevaFechaVisita, setNuevaFechaVisita] = useState("");

  const [mostrarVisitado, setMostrarVisitado] = useState(false);
  const [nuevoVisitado, setNuevoVisitado] = useState("");

  const [mostrarVisitaRecepcionista, setMostrarVisitaRecepcionista] =
    useState(false);
  const [nuevoVisitaRecepcionista, setNuevoVisitaRecepcionista] = useState("");

  const [mostrarMandoClientes, setMostrarMandoClientes] = useState(false);
  const [nuevoMandoClientes, setNuevoMandoClientes] = useState("");

  const navigate = useNavigate();
  
  const { id } = useParams();


  const { hotel } = useHotelContext();

  useEffect(() => {
     if (!hotel) {
       return;
     }
    DataStore.query(Hotel, id).then(setHotelFetched);
  }, [id])


    let direccionCompleta = hotelFetched?.direccionCompleta;
    let fechaVisita = hotelFetched?.fechaVisita;
    let mandoClientes = hotelFetched?.mandoClientes;
    let nombre = hotelFetched?.nombre;
    let visitaRecepcionista = hotelFetched?.visitaRecepcionista;
  let visitado = hotelFetched?.visitado;
  
  const MostrarEditarHotel = () => {
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

  const MostrarVisitaRecepcionista = () => {
    setMostrarVisitaRecepcionista(!mostrarVisitaRecepcionista);
  };

  const MostrarMandoClientes = () => {
    setMostrarMandoClientes(!mostrarMandoClientes);
  };

    const EliminarHotel = async () => {
      await DataStore.delete(Hotel, id);
      navigate(-1);
    };

  const guardarNombre = async () => {
    try {
      const updateHotel = await DataStore.save(
        Hotel.copyOf(hotelFetched, updated => {
          updated.nombre = nuevoNombre;
        })
      );
      setHotelFetched(updateHotel);
      window.location.reload(false);
    } catch (error) {
      console.log(error)
    }
   
   
  };

  const guardarDireccion = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotelFetched, updated => {
        updated.direccionCompleta = nuevaDireccion;
      })
    );
    setHotelFetched(updateHotel);
    // window.location.reload(false);
  };

  //visitado
  const selectVisitado = value => {
    setNuevoVisitado(value);
  };

  const guardarVisitado = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotelFetched, updated => {
        updated.visitado = nuevoVisitado;
      })
    );
    setHotelFetched(updateHotel);
    // window.location.reload(false);
  };

  //guardar Fecha Visita
  const onChange = (date, dateString) => {
    setNuevaFechaVisita(dateString);
  };
  const guardarFechaVisita = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotelFetched, updated => {
        updated.fechaVisita = nuevaFechaVisita;
      })
    );
    setHotelFetched(updateHotel);
    // window.location.reload(false);
  };

  //guardarVisita Recepcionista

  const selectVisitadaRecepcionista = value => {
    setNuevoVisitaRecepcionista(value);
  };

  const guardarVisitaRecepcionista = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotelFetched, updated => {
        updated.visitaRecepcionista = nuevoVisitaRecepcionista;
      })
    );
    setHotelFetched(updateHotel);
    // window.location.reload(false);
  };

  //guardar mandado Clientes

  const selectMandadoClientes = value => {
    setNuevoMandoClientes(value);
  };

  const guardarMandadoClientes = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotelFetched, updated => {
        updated.mandoClientes = nuevoMandoClientes;
      })
    );
    setHotelFetched(updateHotel);
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
        <Typography>Hotel Id: {id}</Typography>
        <Button onClick={EliminarHotel} type="danger">
          {" "}
          Eliminar Hotel
        </Button>
      </div>
      <Divider />
      <Card size="small" title="Editar Hotel">
        <Title level={4}>Nombre del Hotel: {nombre}</Title>
        <Button type="primary" onClick={MostrarEditarHotel}>
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
        <Title level={5}>Cuando se visitó el hotel? : {fechaVisita}</Title>
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
        <Title level={5}>
          Algún recepcionista ya visitó la Llorona? : {visitaRecepcionista}
        </Title>
        <Button type="primary" onClick={MostrarVisitaRecepcionista}>
          Editar
        </Button>

        {mostrarVisitaRecepcionista && (
          <Card size="small">
            <Select
              onChange={selectVisitadaRecepcionista}
              placeholder={visitaRecepcionista}
            >
              <Option value="si">Sí</Option>
              <Option value="no">No</Option>
            </Select>

            <Button onClick={guardarVisitaRecepcionista}>Guardar</Button>
          </Card>
        )}
      </Card>

      <Card size="small" style={{ marginTop: 10 }}>
        <Title level={5}>El hotel ha mandado clientes? : {mandoClientes}</Title>
        <Button type="primary" onClick={MostrarMandoClientes}>
          Editar
        </Button>

        {mostrarMandoClientes && (
          <Card size="small">
            <Select
              onChange={selectMandadoClientes}
              placeholder={mandoClientes}
            >
              <Option value="si">Sí</Option>
              <Option value="no">No</Option>
            </Select>

            <Button onClick={guardarMandadoClientes}>Guardar</Button>
          </Card>
        )}
      </Card>
    </Card>
  );
}

export default EditarHotel;
