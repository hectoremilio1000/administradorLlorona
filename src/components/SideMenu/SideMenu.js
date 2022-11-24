import React from 'react'
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";


function SideMenu() {
  const navigate = useNavigate();

  const onClick = async menuItem => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();
      window.location.reload();
    }
    else {
      navigate(menuItem.key);
}
    
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
      label: "Inventario Productos",
    },
    {
      key: "botella",
      label: "Crear Botella",
    },
    {
      key: "listabotellas",
      label: "Inventario Botellas",
    },
    {
      key: "crearhotel",
      label: "Crear Hotel",
    },
    {
      key: "listahoteles",
      label: "Lista Hoteles",
    },
    {
      key: "crearempresa",
      label: "Crear Empresa",
    },
    {
      key: "listaempresas",
      label: "Lista Empresas",
    },
    {
      key: "signOut",
      label: "Sign out",
      danger: "true",
    },
  ];

  return <Menu items={mainMenuItems} onClick={onClick} />;
}

export default SideMenu