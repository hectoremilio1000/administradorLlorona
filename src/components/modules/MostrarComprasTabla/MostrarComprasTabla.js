import { Button, Divider, List, message, Space, Table, Typography } from "antd";
import { DataStore } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { Inventario, StockEventInventario } from "../../../models";
import Compras from "../Compras/Compras";

function MostrarComprasTabla({ id }) {
 const [eventoCompra, setEventoCompra] = useState("");
 const [comprasInventario, setComprasInventario] = useState("");
 const [inventario, setInventario] = useState("");
  const [mostrarAgregar, setMostrarAgregar] = useState(false);
  
   const fetchedInventario = async () => {
     const InventarioNuevo = await DataStore.query(Inventario, id);
     setInventario(InventarioNuevo);
   };

   useEffect(() => {
     fetchedInventario();
   }, [id]);
  
   const fetchStockEvent = async () => {
     // const stockEventsFetched = (await DataStore.query(
     //   StockEventInventario)).filter(compras => compras.inventarioID === id);
     // setEventoCompra(stockEventsFetched);

     const stockEventsFetched = await DataStore.query(
       StockEventInventario,
       compras => compras.inventarioID.eq(id)
     );
     setEventoCompra(stockEventsFetched);
   };

   useEffect(() => {
     if (!id) {
       return;
     }
     fetchStockEvent();
   }, [id]);
  
useEffect(() => {
  let Max = eventoCompra.length;
  let sum = 0;
  for (let i = 0; i < Max; i++) {
    sum += eventoCompra[i]?.quantity;
    console.log(typeof sum);
  }
  setComprasInventario(parseFloat(sum));
}, [eventoCompra])

  
  
  const columns = [
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Cantidad",
      dataIndex: "quantity",
      key: "quantity",
    },
    

  ];

  return (
    <div key={id}>
      <Table columns={columns} dataSource={eventoCompra} rowKey={id} />
      <Typography.Title level={4}>Total de Compras:{comprasInventario}</Typography.Title>
    </div>
  );
}

export default MostrarComprasTabla;
