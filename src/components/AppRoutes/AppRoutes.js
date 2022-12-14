import React from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from '../modules/Inicio';
import Producto from '../modules/Producto';
import Inventario from '../modules/Inventario';
import ListaHoteles from '../modules/ListaHoteles';
import CrearHotel from '../modules/Hotel/CrearHotel';
import EditarHotel from '../modules/EditarHotel';
import EditarInventario from '../modules/EditarInventario/EditarInventario';
import Empresa from '../modules/Empresa';
import ListaEmpresas from '../modules/ListaEmpresas';
import EditarEmpresa from '../modules/EditarEmpresa';
import CrearBotella from '../modules/Botellas/CrearBotella';

import EditarBotellas from '../modules/EditarBotellas';
import InventariosBotellasLista from '../modules/InventariosBotellasLista';
import CrearCliente from '../modules/Clientes/CrearCliente/CrearCliente';
import ListaClientes from '../modules/Clientes/ListaClientes';
import CrearCervezaArtesanal from '../modules/CervezaArtesanal/CrearCervezaArtesanal';
import ListaCervezaArtesanal from '../modules/CervezaArtesanal/ListaCervezaArtesanal';
import EditarCervezaArtesanal from '../modules/CervezaArtesanal/EditarCervezaArtesanal';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      {/* route admin */}
      <Route path="/admin" element={<Inicio />} />

      {/* Cerveza Industrial*/}
      <Route path="producto" element={<Producto />} />
      <Route path="inventario" element={<Inventario />} />
      <Route path="inventario/:id" element={<EditarInventario />} />

      {/* Cerveza Artesanal*/}
      <Route path="cervezaartesanal" element={<CrearCervezaArtesanal />} />
      <Route
        path="inventariocervezaartesanal"
        element={<ListaCervezaArtesanal />}
      />
      <Route
        path="inventariocervezaartesanal/:id"
        element={<EditarCervezaArtesanal />}
      />

      {/* Hoteles*/}
      <Route path="crearhotel" element={<CrearHotel />} />
      <Route path="listahoteles" element={<ListaHoteles />} />
      <Route path="listahoteles/:id" element={<EditarHotel />} />

      {/* Empresas*/}
      <Route path="crearempresa" element={<Empresa />} />
      <Route path="listaempresas" element={<ListaEmpresas />} />
      <Route path="listaempresas/:id" element={<EditarEmpresa />} />

      {/* Botellas*/}
      <Route path="botella" element={<CrearBotella />} />
      <Route path="listabotellas" element={<InventariosBotellasLista />} />
      <Route path="listabotellas/:id" element={<EditarBotellas />} />

      {/* Clientes*/}
      <Route path="crearcliente" element={<CrearCliente />} />
      <Route path="listaclientes" element={<ListaClientes />} />
      {/* <Route path="listabotellas/:id" element={<EditarBotellas />} /> */}
    </Routes>
  );
}

export default AppRoutes