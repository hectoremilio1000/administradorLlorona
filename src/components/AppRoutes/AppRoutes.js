import React from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from '../modules/Inicio';
import Producto from '../modules/Producto';
import Inventario from '../modules/Inventario';
import ListaHoteles from '../modules/ListaHoteles';
import CrearHotel from '../modules/Hotel/CrearHotel';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="producto" element={<Producto />} />
      <Route path="inventario" element={<Inventario />} />

      <Route path="crearhotel" element={<CrearHotel />} />
      <Route path="listahoteles" element={<ListaHoteles />} />
    </Routes>
  );
}

export default AppRoutes