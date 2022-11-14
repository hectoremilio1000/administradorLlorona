import React from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { Card, Spin, Table } from "antd";

function ListaHoteles() {
  const { hotel } = useHotelContext();

   const columns = [
     {
       title: "Hotel",
       dataIndex: "nombre",
       key: "nombre",
       fixed: "left",
       width: 150,
     },
     {
       title: "Dirección",
       dataIndex: "direccionCompleta",
       key: "nombre",
     },
     {
       title: "Visitado",
       dataIndex: "visitado",
       key: "visitado",
     },
     {
       title: "Visita x Recepcionista",
       dataIndex: "visitaRecepcionista",
       key: "visitaRecepcionista",
     },
     {
       title: "Mandó clientes",
       dataIndex: "mandoClientes",
       key: "mandoClientes",
     },
     {
       title: "Cuandó se visitó el hotel",
       dataIndex: "fechaVisita",
       key: "fechaVisita",
     },
     {
       title: "Hotel ID",
       dataIndex: "id",
       key: "id",
     },
   ];

  console.log(hotel);
  return (
    <div>
      {!hotel ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={hotel}
          rowKey="id"
          // onRow={producto => ({
          //   onClick: () =>
          //     navigate(`producto/${producto.id}`, { replace: true }),
          // })}
        />
      )}
    </div>
  );
}

export default ListaHoteles;
