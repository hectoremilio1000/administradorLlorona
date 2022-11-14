import React from 'react'
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";


function SideMenu() {
  const navigate = useNavigate();

  const onClick = async menuItem => {
    navigate(menuItem.key);
  };

  const mainMenuItems = [
    {
      key: "/",
      label: "Inicio",
    },
    {
      key: "producto",
      label: "Crear Producto",
    },
    {
      key: "inventario",
      label: "Inventario",
    },
    {
      key: "crearhotel",
      label: "Crear Hotel",
    },
    {
      key: "listahoteles",
      label: "Lista Hoteles",
    },
  ];

  return <Menu items={mainMenuItems} onClick={onClick} />;
}

export default SideMenu