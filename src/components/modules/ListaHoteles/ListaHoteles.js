import React, { useEffect, useState } from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { Card, Spin, Table } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { listHotels} from '../../../graphql/queries';

function ListaHoteles() {
  const [hoteles, setHoteles] = useState([])
  const { hotel } = useHotelContext();

  const fetchHoteles = async () => {
    const hotelesCargados = await API.graphql(graphqlOperation(listHotels));
    setHoteles(hotelesCargados.data.listHotels.items);
  }


  useEffect(() => {
    if (!hotel) {
     return
    }
    fetchHoteles();
  }, [])
  
  console.log('graphql', hoteles);


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
