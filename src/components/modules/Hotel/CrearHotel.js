import React, { useState } from "react";
import { Button, Select, Form, Input, DatePicker, message, Card } from "antd";
import { DataStore } from "aws-amplify";
import { Hotel } from '../../../models'
import * as mutations from '../../../graphql/mutations'

  const { Item } = Form;
  const { Option } = Select;

function CrearHotel() {
  const [nombre, setNombre] = useState("");
  const [direccionCompleta, setDireccionCompleta] = useState("");
  const [visitado, setVisitado] = useState("");
  const [visitaRecepcionista, setVisitaRecepcionista] = useState("");
  const [mandoClientes, setMandoClientes] = useState("");
  const [fechaVisita, setFechaVisita] = useState("");

   const onChange = (date, dateString) => {
     setFechaVisita(dateString);
   };

   const selectVisitado = value => {
     setVisitado(value);
   };
const selectVisitoRecepcionista = value => {
  setVisitaRecepcionista(value);
};

const selectMandadoClientes = value => {
  setMandoClientes(value);
};
  
  const onFinish = async () => {

    try {
      await DataStore.save(
        new Hotel({
          nombre: nombre,
          direccionCompleta: direccionCompleta,
          visitado: visitado,
          fechaVisita: fechaVisita,
          visitaRecepcionista: visitaRecepcionista,
          mandoClientes: mandoClientes,
        })
      );
      console.log(
        nombre,
        direccionCompleta,
        visitado,
        fechaVisita,
        visitaRecepcionista,
        mandoClientes
      );
      window.location.reload();
      message.success("Hotel guardado");
    } catch (error) {
      console.log(error)
    }
   
      
      
  
  };

  return (
    <Card title="Ingesa los datos para crear un hotel">
      <Item label="Nombre Hotel">
        <Input
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre Hotel"
          style={styles.input}
        />
      </Item>
      <Item label="Direccion Completa">
        <Input
          value={direccionCompleta}
          onChange={e => setDireccionCompleta(e.target.value)}
          placeholder="Dirección Hotel"
          style={styles.input}
        />
      </Item>
      <Item label="Ya se visitó el hotel?">
        <Select onChange={selectVisitado}>
          <Option value="si">Sí</Option>
          <Option value="no">No</Option>
        </Select>
      </Item>
      <Item label="Cuando se visitó?">
        <DatePicker placeholder="Fecha" onChange={onChange} />
      </Item>
      <Item label="El recepcionista ya visitó la llorona?">
        <Select onChange={selectVisitoRecepcionista}>
          <Option value="si">Sí</Option>
          <Option value="no">No</Option>
        </Select>
      </Item>
      <Item label="El hotel ha mandado clientes?">
        <Select onChange={selectMandadoClientes}>
          <Option value="si">Sí</Option>
          <Option value="no">No</Option>
        </Select>
      </Item>
      <div>
        <Button type="primary" onClick={onFinish}>
          Guardar Hotel
        </Button>
      </div>
    </Card>
  );
}

const styles = {
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "white",

    borderRadius: 5,
  },
};

export default CrearHotel;
