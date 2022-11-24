import React, { useEffect, useState } from "react";

import { Card, Spin, Table } from "antd";
import { useNavigate } from "react-router-dom";

import {useBotellasContext} from '../../contexts/BotellasContext'
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { listProductosBotellas } from "../../../graphql/queries";
import {ProductosBotellas} from '../../../models'


const InventariosBotellasLista = ()=> {
  const [botellas, setBotellas] = useState([]);
  const [botellasFetched, setBotellasFetched] = useState([]);

  // const { botellas } = useBotellasContext();
  const navigate = useNavigate();

  useEffect(() => {
   API.graphql(graphqlOperation(listProductosBotellas)).then(setBotellasFetched)
  }, [])

  useEffect(() => {
    DataStore.query(ProductosBotellas).then(setBotellas)
  }, [])
  console.log('botellas', botellas)
  
  

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Botellas",
      dataIndex: "name",
      key: "name",
    },
  ];

const botellasFinal = botellasFetched?.data?.listProductosBotellas?.items
  
  return (
    <div>
      {!botellasFinal ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={botellasFinal}
          rowKey="id"
          onRow={botella => ({
            onClick: () => navigate(`${botella.id}`),
          })}
        />
      )}
    </div>
  );
}

export default InventariosBotellasLista;
