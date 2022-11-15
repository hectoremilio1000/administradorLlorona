import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Tipototal {
  SOBRANTE = "SOBRANTE",
  FALTANTE = "FALTANTE",
  CUADRA = "CUADRA"
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
  readonly tipoTotal?: Tipototal | keyof typeof Tipototal | null;
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
  readonly tipoTotal?: Tipototal | keyof typeof Tipototal | null;
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