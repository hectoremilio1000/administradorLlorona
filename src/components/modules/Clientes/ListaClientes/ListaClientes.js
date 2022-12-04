import React, { useEffect, useState } from "react";
import { Card, Spin, Table } from "antd";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { CLIENTES } from "../../../../models";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);

    const fetchClientes = async () => {
      const clientesCargados = await DataStore.query(CLIENTES);
      setClientes(clientesCargados);
    };
  
  
  useEffect(() => {
    if (!clientes) {
      return;
    }
    fetchClientes();
  }, []);


  console.log("datastore", clientes);
  
    const columns = [
      {
        title: "Nombre",
        dataIndex: "nombre",
        key: "nombre",
        fixed: "left",
        width: 150,
      },
      {
        title: "Fecha Llegada",
        dataIndex: "fechaLlegada",
        key: "fechaLlegada",
      },
      {
        title: "HoraLlegada",
        dataIndex: "HoraLlegada",
        key: "HoraLlegada",
      },
      {
        title: "mesa",
        dataIndex: "mesaAsignada",
        key: "mesaAsignada",
      },
      {
        title: "Personas",
        dataIndex: "numeroPersonas",
        key: "numeroPersonas",
      },
    ];
  
  
  return (
    <div>
      {!clientes ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={clientes}
          rowKey="id"
          // onRow={empresa => ({
          //   onClick: () => navigate(`${empresa.id}`, { replace: true }),
          // })}
        />
      )}
    </div>
  );
}

export default ListaClientes;
