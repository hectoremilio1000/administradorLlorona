import React from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from '../modules/Inicio';
import Producto from '../modules/Producto';
import Inventario from '../modules/Inventario';
import Hotel from '../modules/Hotel';
import ListaHoteles from '../modules/ListaHoteles';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="producto" element={<Producto />} />
      <Route path="inventario" element={<Inventario />} />

      <Route path="hotel" element={<Hotel />} />
      <Route path="listahoteles" element={<ListaHoteles />} />
    </Routes>
  );
}

export default AppRoutes