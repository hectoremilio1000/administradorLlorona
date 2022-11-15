import React, { useState } from "react";
import { Button, Select, Form, Input, DatePicker, message, Card } from "antd";
import { DataStore } from "aws-amplify";
import { Empresa } from "../../../models";

const { Item } = Form;
const { Option } = Select;

function CrearEmpresa() {
  const [nombre, setNombre] = useState("");
  const [direccionCompleta, setDireccionCompleta] = useState("");
  const [visitado, setVisitado] = useState("");
  const [yaContacto, setYaContacto] = useState("");
  const [eventoEmpresa, setEventoEmpresa] = useState("");
  const [fechaVisita, setFechaVisita] = useState("");

  const onChange = (date, dateString) => {
    setFechaVisita(dateString);
  };

  const selectVisitado = value => {
    setVisitado(value);
  };
  const selectYaContacto = value => {
    setYaContacto(value);
  };

  const selectEventoEmpresa = value => {
    setEventoEmpresa(value);
  };

  const onFinish = async () => {
    try {
      await DataStore.save(
        new Empresa({
          nombre: nombre,
          direccionCompleta: direccionCompleta,
          visitado: visitado,
          fechaVisita: fechaVisita,
          yaContacto: yaContacto,
          seCerroEvento: eventoEmpresa,
        })
      );
      console.log(
        nombre,
        direccionCompleta,
        visitado,
        fechaVisita,
        yaContacto,
        eventoEmpresa
      );
      window.location.reload();
      message.success("Empresa guardada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card title="Ingesa los datos para crear una Empresa">
      <Item label="Nombre Empresa">
        <Input
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre Empresa"
          style={styles.input}
        />
      </Item>
      <Item label="Direccion Completa">
        <Input
          value={direccionCompleta}
          onChange={e => setDireccionCompleta(e.target.value)}
          placeholder="Dirección Empresa"
          style={styles.input}
        />
      </Item>
      <Item label="Ya se visitó la Empresa?">
        <Select onChange={selectVisitado}>
          <Option value="si">Sí</Option>
          <Option value="no">No</Option>
        </Select>
      </Item>
      <Item label="Cuando se visitó?">
        <DatePicker placeholder="Fecha" onChange={onChange} />
      </Item>
      <Item label="La empresa ya nos contactó">
        <Select onChange={selectYaContacto}>
          <Option value="si">Sí</Option>
          <Option value="no">No</Option>
        </Select>
      </Item>
      <Item label="Ya se cerró un evento con la empresa">
        <Select onChange={selectEventoEmpresa}>
          <Option value="si">Sí</Option>
          <Option value="no">No</Option>
        </Select>
      </Item>
      <div>
        <Button type="primary" onClick={onFinish}>
          Guardar Empresa
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

export default CrearEmpresa;
