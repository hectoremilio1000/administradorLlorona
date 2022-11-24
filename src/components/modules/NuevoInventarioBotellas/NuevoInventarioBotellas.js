import React, { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Typography,
} from "antd";
import { DataStore } from "aws-amplify";
import { InventarioBotellas } from "../../../models";

const { Item } = Form;

function NuevoInventarioBotellas({ botellaID }) {
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [invFisInic, setInvFisInic] = useState("");
  const [invFisFin, setInvFisFin] = useState("");
  const [ventas, setVentas] = useState("");

  const onChangeInicial = (date, dateString) => {
    setFechaInicial(dateString);
  };

  const onChangeFinal = (date, dateString) => {
    setFechaFinal(dateString);
  };

  const onChangeVentas = value => {
    setVentas(parseFloat(value));
  };

  const GenerarInventario = async () => {
    const numero = ventas;
 
  
    const invFisInicNumero = parseFloat(invFisInic);
    const invFisFinNumero = parseFloat(invFisFin);

    try {
      await DataStore.save(
        new InventarioBotellas({
          inventarioInicialFisico: invFisInicNumero,
          inventarioFinalFisico: invFisFinNumero,
          fechaInicioConteoFisico: fechaInicial,
          fechaFinConteoFisico: fechaFinal,
          productosbotellasID: botellaID,
          ventas: numero/16,
        })
      );

      message.success(
        "inventario creado correctamente, ahora genera las compras"
      );
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Item label="Ingresa la fecha inicial">
        <DatePicker onChange={onChangeInicial} placeholder="" />
      </Item>
      <Item label="Ingresa la fecha final">
        <DatePicker onChange={onChangeFinal} placeholder="" />
      </Item>
      <Item label="Ingresa el inventario físico inicial:">
        <Input
          placeholder="Cantidad"
          onChange={e => setInvFisInic(e.target.value)}
          value={invFisInic}
          style={{ width: 150 }}
        />
      </Item>
      <Item label="Ingresa el inventario físico final:">
        <Input
          placeholder="Cantidad"
          onChange={e => setInvFisFin(e.target.value)}
          value={invFisFin}
          style={{ width: 150 }}
        />
      </Item>
      <Item label="Ingresa las ventas del período obtenidas del sistema en cantidad de tragos vendidos:">
        <InputNumber
          min={1}
          placeholder="Cantidad"
          onChange={onChangeVentas}
          style={{ width: 150 }}
        />
      </Item>

      <Item>
        <Typography.Text type="danger">
          Las compras se ingresan al editar el inventario
        </Typography.Text>
      </Item>

      <Item>
        <Button type="primary" onClick={GenerarInventario}>
          Generar inventario
        </Button>
      </Item>
    </Card>
  );
}

export default NuevoInventarioBotellas;
