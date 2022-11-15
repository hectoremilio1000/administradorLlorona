import React from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from '../modules/Inicio';
import Producto from '../modules/Producto';
import Inventario from '../modules/Inventario';
import ListaHoteles from '../modules/ListaHoteles';
import CrearHotel from '../modules/Hotel/CrearHotel';
import EditarHotel from '../modules/EditarHotel';
import EditarInventario from '../modules/EditarInventario/EditarInventario';

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
    </Routes>
  );
}

export default AppRoutes