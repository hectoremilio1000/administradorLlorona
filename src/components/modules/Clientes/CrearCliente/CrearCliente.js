import React, { useState } from "react";
import { Button, Select, Form, Input, DatePicker, message, Card, Typography, InputNumber, TimePicker } from "antd";
import { DataStore } from "aws-amplify";

import { CLIENTE, CLIENTES } from "../../../../models";


const { Item } = Form;
const { Option } = Select;

function CrearCliente() {

  const [cumple, setCumple] = useState("")
const [time, setTime] = useState("");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const onCumple = (a, b) => {
    console.log(a, b)
    setCumple(b);
  }

  const onTime = (a, b) => {
    console.log(a, b)
    setTime(b)
  }

  const onFinish = async values => {
      try {
         await DataStore.save(
           new CLIENTES({
             nombre: values.nombre,
             cumple: cumple,
             delegacion: values.delegacion,
             fechaLlegada: today,
             HoraLlegada: time,
             mesaAsignada: values.mesaAsignada,
             numeroPersonas: values.numeroPersonas,
             esReserva: values.esReserva,
             evento: values.evento,
             whatsapp: values.whatsapp,
             email: values.email,
             mesero:values.mesero,
           })
         );
        message.success('cliente correctamente creado');
      } catch (error) {
        console.log(error)
      }
     
    };
  
   const onFinishFailed = errorInfo => {
     console.log("Failed:", errorInfo);
   };
  
  return (
    <Card>
      <Typography.Title level={4}>Crear Cliente</Typography.Title>
      <Form
        name="basic"
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el nombre del cliente",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="De qué delegación o Estado nos visitas?"
          name="delegacion"
        >
          <Input />
        </Form.Item>
        <Form.Item label="Mesa Asignada" name="mesaAsignada">
          <Input />
        </Form.Item>

        <Form.Item label="Número de personas" name="numeroPersonas">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Hora del día de llegada" name="HoraLlegada">
          <TimePicker onChange={onTime} />
        </Form.Item>
        <Form.Item label="Cuando cumples años?" name="cumple">
          <DatePicker onChange={onCumple} />
        </Form.Item>
        <Form.Item label="Es Reserva?" name="esReserva">
          <Select>
            <Select.Option value="SI">Sí</Select.Option>
            <Select.Option value="NO">No</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Es Evento?" name="evento">
          <Select>
            <Select.Option value="SI">Sí</Select.Option>
            <Select.Option value="NO">No</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="WhatsApp" name="whatsapp">
          <InputNumber style={{ width: 150 }} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Mesero?" name="mesero">
          <Select>
            <Select.Option value="KARINA">Karina</Select.Option>
            <Select.Option value="JOSE">José</Select.Option>
            <Select.Option value="KARla">Karla</Select.Option>
            <Select.Option value="ROSAGRIS">Rosagris</Select.Option>
            <Select.Option value="OLIVER">Oliver</Select.Option>
            <Select.Option value="JENNY">Jenny</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Agregar Cliente
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CrearCliente;
