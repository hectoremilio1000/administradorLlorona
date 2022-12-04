import React, { useState } from "react";
import { Button, Select, Form, Input, DatePicker, message, Card, Typography } from "antd";
import { DataStore } from "aws-amplify";

import { CLIENTE } from "../../../../models";


const { Item } = Form;
const { Option } = Select;

function CrearCliente() {

    const onFinish = values => {
      console.log("Success:", values);
    };
  
   const onFinishFailed = errorInfo => {
     console.log("Failed:", errorInfo);
   };
  
  return (
    <Card>
      <Typography.Title level={4}>Crear Ciente</Typography.Title>
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

        <Form.Item label="Dirección" name="direccion">
          <Input />
        </Form.Item>
        <Form.Item label="mesa" name="mesaAsignada">
          <Input />
        </Form.Item>

        <Form.Item label="personas" name="numeroPersonas">
          <Input />
        </Form.Item>
        <Form.Item label="fecha" name="fechaLlegada">
          <DatePicker />
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
