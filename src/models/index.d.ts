import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type StockEventArtesanalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CERVEZAARTESANALMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type INVCERVARTESANALMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CLIENTESMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StockInventariosBotellasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InventarioBotellasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductosBotellasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmpresaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HotelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StockEventInventarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InventarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerStockEventArtesanal = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly invcervartesanalID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockEventArtesanal = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly invcervartesanalID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockEventArtesanal = LazyLoading extends LazyLoadingDisabled ? EagerStockEventArtesanal : LazyStockEventArtesanal

export declare const StockEventArtesanal: (new (init: ModelInit<StockEventArtesanal, StockEventArtesanalMetaData>) => StockEventArtesanal) & {
  copyOf(source: StockEventArtesanal, mutator: (draft: MutableModel<StockEventArtesanal, StockEventArtesanalMetaData>) => MutableModel<StockEventArtesanal, StockEventArtesanalMetaData> | void): StockEventArtesanal;
}

type EagerCERVEZAARTESANAL = {
  readonly id: string;
  readonly nam?: string | null;
  readonly INVCERVARTESANALS?: (INVCERVARTESANAL | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCERVEZAARTESANAL = {
  readonly id: string;
  readonly nam?: string | null;
  readonly INVCERVARTESANALS: AsyncCollection<INVCERVARTESANAL>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CERVEZAARTESANAL = LazyLoading extends LazyLoadingDisabled ? EagerCERVEZAARTESANAL : LazyCERVEZAARTESANAL

export declare const CERVEZAARTESANAL: (new (init: ModelInit<CERVEZAARTESANAL, CERVEZAARTESANALMetaData>) => CERVEZAARTESANAL) & {
  copyOf(source: CERVEZAARTESANAL, mutator: (draft: MutableModel<CERVEZAARTESANAL, CERVEZAARTESANALMetaData>) => MutableModel<CERVEZAARTESANAL, CERVEZAARTESANALMetaData> | void): CERVEZAARTESANAL;
}

type EagerINVCERVARTESANAL = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly total?: number | null;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly tipoTotal?: string | null;
  readonly cervezaartesanalID: string;
  readonly StockEventArtesanals?: (StockEventArtesanal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVCERVARTESANAL = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly total?: number | null;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly tipoTotal?: string | null;
  readonly cervezaartesanalID: string;
  readonly StockEventArtesanals: AsyncCollection<StockEventArtesanal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVCERVARTESANAL = LazyLoading extends LazyLoadingDisabled ? EagerINVCERVARTESANAL : LazyINVCERVARTESANAL

export declare const INVCERVARTESANAL: (new (init: ModelInit<INVCERVARTESANAL, INVCERVARTESANALMetaData>) => INVCERVARTESANAL) & {
  copyOf(source: INVCERVARTESANAL, mutator: (draft: MutableModel<INVCERVARTESANAL, INVCERVARTESANALMetaData>) => MutableModel<INVCERVARTESANAL, INVCERVARTESANALMetaData> | void): INVCERVARTESANAL;
}

type EagerCLIENTES = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly cumple?: string | null;
  readonly delegacion?: string | null;
  readonly fechaLlegada?: string | null;
  readonly HoraLlegada?: string | null;
  readonly mesaAsignada?: string | null;
  readonly numeroPersonas?: string | null;
  readonly evento?: string | null;
  readonly esReserva?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCLIENTES = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly cumple?: string | null;
  readonly delegacion?: string | null;
  readonly fechaLlegada?: string | null;
  readonly HoraLlegada?: string | null;
  readonly mesaAsignada?: string | null;
  readonly numeroPersonas?: string | null;
  readonly evento?: string | null;
  readonly esReserva?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CLIENTES = LazyLoading extends LazyLoadingDisabled ? EagerCLIENTES : LazyCLIENTES

export declare const CLIENTES: (new (init: ModelInit<CLIENTES, CLIENTESMetaData>) => CLIENTES) & {
  copyOf(source: CLIENTES, mutator: (draft: MutableModel<CLIENTES, CLIENTESMetaData>) => MutableModel<CLIENTES, CLIENTESMetaData> | void): CLIENTES;
}

type EagerStockInventariosBotellas = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly inventariobotellasID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockInventariosBotellas = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly inventariobotellasID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockInventariosBotellas = LazyLoading extends LazyLoadingDisabled ? EagerStockInventariosBotellas : LazyStockInventariosBotellas

export declare const StockInventariosBotellas: (new (init: ModelInit<StockInventariosBotellas, StockInventariosBotellasMetaData>) => StockInventariosBotellas) & {
  copyOf(source: StockInventariosBotellas, mutator: (draft: MutableModel<StockInventariosBotellas, StockInventariosBotellasMetaData>) => MutableModel<StockInventariosBotellas, StockInventariosBotellasMetaData> | void): StockInventariosBotellas;
}

type EagerInventarioBotellas = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly total?: number | null;
  readonly tipoTotal?: string | null;
  readonly productosbotellasID: string;
  readonly StockInventariosBotellas?: (StockInventariosBotellas | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventarioBotellas = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly total?: number | null;
  readonly tipoTotal?: string | null;
  readonly productosbotellasID: string;
  readonly StockInventariosBotellas: AsyncCollection<StockInventariosBotellas>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InventarioBotellas = LazyLoading extends LazyLoadingDisabled ? EagerInventarioBotellas : LazyInventarioBotellas

export declare const InventarioBotellas: (new (init: ModelInit<InventarioBotellas, InventarioBotellasMetaData>) => InventarioBotellas) & {
  copyOf(source: InventarioBotellas, mutator: (draft: MutableModel<InventarioBotellas, InventarioBotellasMetaData>) => MutableModel<InventarioBotellas, InventarioBotellasMetaData> | void): InventarioBotellas;
}

type EagerProductosBotellas = {
  readonly id: string;
  readonly name?: string | null;
  readonly InventarioBotellas?: (InventarioBotellas | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductosBotellas = {
  readonly id: string;
  readonly name?: string | null;
  readonly InventarioBotellas: AsyncCollection<InventarioBotellas>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductosBotellas = LazyLoading extends LazyLoadingDisabled ? EagerProductosBotellas : LazyProductosBotellas

export declare const ProductosBotellas: (new (init: ModelInit<ProductosBotellas, ProductosBotellasMetaData>) => ProductosBotellas) & {
  copyOf(source: ProductosBotellas, mutator: (draft: MutableModel<ProductosBotellas, ProductosBotellasMetaData>) => MutableModel<ProductosBotellas, ProductosBotellasMetaData> | void): ProductosBotellas;
}

type EagerEmpresa = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly yaContacto?: string | null;
  readonly seCerroEvento?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmpresa = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly yaContacto?: string | null;
  readonly seCerroEvento?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Empresa = LazyLoading extends LazyLoadingDisabled ? EagerEmpresa : LazyEmpresa

export declare const Empresa: (new (init: ModelInit<Empresa, EmpresaMetaData>) => Empresa) & {
  copyOf(source: Empresa, mutator: (draft: MutableModel<Empresa, EmpresaMetaData>) => MutableModel<Empresa, EmpresaMetaData> | void): Empresa;
}

type EagerHotel = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly visitaRecepcionista?: string | null;
  readonly mandoClientes?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHotel = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly visitaRecepcionista?: string | null;
  readonly mandoClientes?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hotel = LazyLoading extends LazyLoadingDisabled ? EagerHotel : LazyHotel

export declare const Hotel: (new (init: ModelInit<Hotel, HotelMetaData>) => Hotel) & {
  copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}

type EagerStockEventInventario = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockEventInventario = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockEventInventario = LazyLoading extends LazyLoadingDisabled ? EagerStockEventInventario : LazyStockEventInventario

export declare const StockEventInventario: (new (init: ModelInit<StockEventInventario, StockEventInventarioMetaData>) => StockEventInventario) & {
  copyOf(source: StockEventInventario, mutator: (draft: MutableModel<StockEventInventario, StockEventInventarioMetaData>) => MutableModel<StockEventInventario, StockEventInventarioMetaData> | void): StockEventInventario;
}

type EagerInventario = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly total?: number | null;
  readonly tipoTotal?: string | null;
  readonly productsID: string;
  readonly StockEventInventarios?: (StockEventInventario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventario = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly total?: number | null;
  readonly tipoTotal?: string | null;
  readonly productsID: string;
  readonly StockEventInventarios: AsyncCollection<StockEventInventario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Inventario = LazyLoading extends LazyLoadingDisabled ? EagerInventario : LazyInventario

export declare const Inventario: (new (init: ModelInit<Inventario, InventarioMetaData>) => Inventario) & {
  copyOf(source: Inventario, mutator: (draft: MutableModel<Inventario, InventarioMetaData>) => MutableModel<Inventario, InventarioMetaData> | void): Inventario;
}

type EagerProducts = {
  readonly id: string;
  readonly name?: string | null;
  readonly Inventarios?: (Inventario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducts = {
  readonly id: string;
  readonly name?: string | null;
  readonly Inventarios: AsyncCollection<Inventario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products, ProductsMetaData>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}