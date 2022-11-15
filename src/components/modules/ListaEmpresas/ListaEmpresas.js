import React, { useEffect, useState } from "react";
import { Card, Spin, Table } from "antd";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Empresa } from "../../../models";

function ListaEmpresas() {
  const [empresas, setEmpresas] = useState([]);

  const navigate = useNavigate();

  const fetchEmpresas = async () => {
    const hotelesCargados = await DataStore.query(Empresa);
    setEmpresas(hotelesCargados);
  };

  useEffect(() => {
    if (!empresas) {
      return;
    }
    fetchEmpresas();
  }, []);

  console.log("datastore", empresas);

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
      title: "Ya nos contactó?",
      dataIndex: "yaContacto",
      key: "yaContacto",
    },
    {
      title: "Se cerró evento",
      dataIndex: "seCerroEvento",
      key: "seCerroEvento",
    },
    {
      title: "Cuandó se visitó la empresa",
      dataIndex: "fechaVisita",
      key: "fechaVisita",
    },
    {
      title: "Empresa ID",
      dataIndex: "id",
      key: "id",
    },
  ];

  console.log(empresas);
  return (
    <div>
      {!empresas ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={empresas}
          rowKey="id"
          onRow={empresa => ({
            onClick: () => navigate(`${empresa.id}`, { replace: true }),
          })}
        />
      )}
    </div>
  );
}

export default ListaEmpresas;
