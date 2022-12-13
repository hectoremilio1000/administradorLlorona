import React, {useState, useEffect} from "react";
import { Card, Spin, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { CERVEZAARTESANAL } from "../../../../models";

function ListaCervezaArtesanal() {

  const [cervezasArtesanales, setCervezasArtesanales] = useState([]);

  const fetchCervezasArtesanales = async () => {
    await DataStore.query(CERVEZAARTESANAL).then(setCervezasArtesanales)
  }

  useEffect(() => {
    fetchCervezasArtesanales();
  }, [])
  
  
  const navigate = useNavigate();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Cervezas Artesanales",
      dataIndex: "nam",
      key: "nam",
    },
  ];


 console.log(cervezasArtesanales);
 return (
   <div>
     {!cervezasArtesanales ? (
       <Spin size="large" />
     ) : (
       <Table
         columns={columns}
         dataSource={cervezasArtesanales}
         rowKey="id"
         onRow={producto => ({
           onClick: () => navigate(`${producto.id}`),
         })}
       />
     )}
   </div>
 );
}

export default ListaCervezaArtesanal;
