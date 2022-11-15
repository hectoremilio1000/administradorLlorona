import React from 'react';
import { useProductContext } from '../../contexts/ProductContext'
import { Card, Spin, Table } from "antd";
import { useNavigate } from "react-router-dom";

function Inventario() {

  const { productos } = useProductContext();
    const navigate = useNavigate();

   const columns = [
     {
       title: "Id",
       dataIndex: "id",
       key: "id",
     },
     {
       title: "Productos",
       dataIndex: "name",
       key: "name",
     },
   ];
  

  console.log(productos);
  return (
    <div>
      {!productos ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={productos}
          rowKey="id"
          onRow={producto => ({
            onClick: () =>
              navigate(`${producto.id}`),
          })}
        />
      )}
    </div>
  );
}

export default Inventario