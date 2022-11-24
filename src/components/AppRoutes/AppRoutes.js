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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      {/* Producto*/}
      <Route path="producto" element={<Producto />} />
      <Route path="inventario" element={<Inventario />} />
      <Route path="inventario/:id" element={<EditarInventario />} />

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
    </Routes>
  );
}

export default AppRoutes