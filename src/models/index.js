// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tipototalbotellas = {
  "SOBRANTE": "SOBRANTE",
  "FALTANTE": "FALTANTE",
  "CUADRA": "CUADRA"
};

const Tipototal = {
  "SOBRANTE": "SOBRANTE",
  "FALTANTE": "FALTANTE",
  "CUADRA": "CUADRA"
};

const { StockInventariosBotellas, InventarioBotellas, ProductosBotellas, Empresa, Hotel, StockEventInventario, Inventario, Products } = initSchema(schema);

export {
  StockInventariosBotellas,
  InventarioBotellas,
  ProductosBotellas,
  Empresa,
  Hotel,
  StockEventInventario,
  Inventario,
  Products,
  Tipototalbotellas,
  Tipototal
};