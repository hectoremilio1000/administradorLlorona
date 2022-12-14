// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StockEventArtesanal, CERVEZAARTESANAL, INVCERVARTESANAL, CLIENTES, StockInventariosBotellas, InventarioBotellas, ProductosBotellas, Empresa, Hotel, StockEventInventario, Inventario, Products } = initSchema(schema);

export {
  StockEventArtesanal,
  CERVEZAARTESANAL,
  INVCERVARTESANAL,
  CLIENTES,
  StockInventariosBotellas,
  InventarioBotellas,
  ProductosBotellas,
  Empresa,
  Hotel,
  StockEventInventario,
  Inventario,
  Products
};