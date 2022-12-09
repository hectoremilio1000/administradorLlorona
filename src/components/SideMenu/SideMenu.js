import React, { useState, useEffect } from "react";
import { Button, Card, Menu, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

import {
  UserOutlined,
  MedicineBoxOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
  ReadOutlined,
  BranchesOutlined,
  ContainerOutlined,
  HighlightOutlined,
  AppstoreOutlined,
  FolderAddOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  TeamOutlined,
  FilePdfOutlined,
  FileSearchOutlined,
  FileDoneOutlined,
  HddOutlined,
  GroupOutlined,
  LaptopOutlined,
  MonitorOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
  CaretRightOutlined,
  ExportOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


function SideMenu() {
  const [authUser, setAuthUser] = useState("");
  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  
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

  const inventariosMenuItems = [
    getItem("Inicio", "/", <ExportOutlined />),
    getItem("Inv Cerveza Ind", "sub1", <AppstoreOutlined />, [
      getItem("Lista Cervezas", "inventario", <GroupOutlined />),
      getItem("Crear Cerveza", "producto", <PlusCircleOutlined />),
    ]),
    getItem("Inv Botellas", "sub2", <MonitorOutlined />, [
      getItem("Inventario Botellas", "listabotellas", <GroupOutlined />),
      getItem("Crear Botella", "botella", <PlusCircleOutlined />),
    ]), ( {
key: "signOut", label: "Salir", danger: "true", icon:<FileDoneOutlined/>
      }),

  ];

  const estrategiaMenuVentas = [
    getItem("Inicio", "/", <ExportOutlined />),
    getItem("Hotel", "sub3", <AppstoreOutlined />, [
      getItem("Lista Hoteles", "listahoteles", <GroupOutlined />),
      getItem("Crear Hotel", "crearhotel", <PlusCircleOutlined />),
    ]),
    getItem("Empresas", "sub4", <MonitorOutlined />, [
      getItem("Lista Empresas", "listaempresas", <GroupOutlined />),
      getItem("Crear Empresa", "crearempresa", <PlusCircleOutlined />),
    ]),
    {
      key: "signOut",
      label: "Salir",
      danger: "true",
      icon: <FileDoneOutlined />,
    },
  ];

    const reservacionesMenu = [
      getItem("Inicio", "/", <ExportOutlined />),
      getItem("Clientes", "sub5", <AppstoreOutlined />, [
        getItem("Lista Clientes", "listaclientes", <GroupOutlined />),
        getItem("Crear Cliente", "crearhotel", <PlusCircleOutlined />),
      ]),
   
      {
        key: "signOut",
        label: "Salir",
        danger: "true",
        icon: <FileDoneOutlined />,
      },
    ];
  
  
  const directorMenuItems = [
    getItem("Inicio", "/", <ExportOutlined />),
    getItem("Inv Cerveza Ind", "sub6", <AppstoreOutlined />, [
      getItem("Lista Cervezas", "inventario", <GroupOutlined />),
      getItem("Crear Cerveza", "producto", <PlusCircleOutlined />),
    ]),
    getItem("Inv Botellas", "sub7", <MonitorOutlined />, [
      getItem("Inventario Botellas", "listabotellas", <GroupOutlined />),
      getItem("Crear Botella", "botella", <PlusCircleOutlined />),
    ]),
    getItem("Hotel", "sub8", <ReconciliationOutlined />, [
      getItem("Lista Hoteles", "listahoteles", <GroupOutlined />),
      getItem("Crear Hotel", "crearhotel", <PlusCircleOutlined />),
    ]),
    getItem("Empresas", "sub9", <MenuFoldOutlined />, [
      getItem("Lista Empresas", "listaempresas", <GroupOutlined />),
      getItem("Crear Empresa", "crearempresa", <PlusCircleOutlined />),
    ]),
    getItem("Clientes", "sub10", <VerticalRightOutlined />, [
      getItem("Lista Clientes", "listaclientes", <GroupOutlined />),
      getItem("Crear Cliente", "crearhotel", <PlusCircleOutlined />),
    ]),

    {
      key: "signOut",
      label: "Salir",
      danger: "true",
      icon: <FileDoneOutlined />,
    },
  ];
  


  // const mainMenuItems = [
  //   {
  //     key: "/",
  //     label: "Inicio",
  //   },
  //   {
  //     key: "producto",
  //     label: "Crear Producto",
  //   },
  //   {
  //     key: "inventario",
  //     label: "Inventario Productos",
  //   },
  //   {
  //     key: "botella",
  //     label: "Crear Botella",
  //   },
  //   {
  //     key: "listabotellas",
  //     label: "Inventario Botellas",
  //   },
  //   {
  //     key: "crearhotel",
  //     label: "Crear Hotel",
  //   },
  //   {
  //     key: "listahoteles",
  //     label: "Lista Hoteles",
  //   },
  //   {
  //     key: "crearempresa",
  //     label: "Crear Empresa",
  //   },
  //   {
  //     key: "listaempresas",
  //     label: "Lista Empresas",
  //   },
  //   {
  //     key: "listaclientes",
  //     label: "Lista Clientes",
  //   },
  //   {
  //     key: "cliente",
  //     label: "Crear Cliente",
  //   },
  //   {
  //     key: "signOut",
  //     label: "Sign out",
  //     danger: "true",
  //   },
  // ];

  if (authUser === undefined) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spin />
      </div>
    );
  }

  let hector = authUser?.signInUserSession?.idToken?.payload["cognito:groups"];

  const SignOut = () => {
    Auth.signOut();
  }

  if (hector === undefined) {
    return (
      <Card className="mt-2 mb-2">
      

        <Button onClick={SignOut} danger>
          Cerrar Sesión
        </Button>
      </Card>
    );
  }

    if (hector[0] === "Inventarios") {
      return (
        <>
          <Menu items={inventariosMenuItems} onClick={onClick} mode="inline" />
        </>
      );
    }
  
  if (hector[0] === "Reservaciones") {
    return (
      <>
        <Menu items={reservacionesMenu} onClick={onClick} mode="inline" />
      </>
    );
  }

   if (hector[0] === "EstrategiaVentas") {
     return (
       <>
         <Menu items={estrategiaMenuVentas} onClick={onClick} mode="inline" />
       </>
     );
   }
  
  if (hector[0] === "Admin") {
    return (
      <>
        <Menu items={directorMenuItems} onClick={onClick} mode="inline" />
      </>
    );
  }



}

export default SideMenu