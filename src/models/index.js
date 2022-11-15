// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tipototal = {
  "SOBRANTE": "SOBRANTE",
  "FALTANTE": "FALTANTE",
  "CUADRA": "CUADRA"
};

const { Empresa, Hotel, StockEventInventario, Inventario, Products } = initSchema(schema);

export {
  Empresa,
  Hotel,
  StockEventInventario,
  Inventario,
  Products,
  Tipototal
};