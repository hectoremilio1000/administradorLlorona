/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel($filter: ModelSubscriptionHotelFilterInput) {
    onCreateHotel(filter: $filter) {
      id
      nombre
      direccionCompleta
      visitado
      visitaRecepcionista
      mandoClientes
      fechaVisita
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateHotel = /* GraphQL */ `
  subscription OnUpdateHotel($filter: ModelSubscriptionHotelFilterInput) {
    onUpdateHotel(filter: $filter) {
      id
      nombre
      direccionCompleta
      visitado
      visitaRecepcionista
      mandoClientes
      fechaVisita
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteHotel = /* GraphQL */ `
  subscription OnDeleteHotel($filter: ModelSubscriptionHotelFilterInput) {
    onDeleteHotel(filter: $filter) {
      id
      nombre
      direccionCompleta
      visitado
      visitaRecepcionista
      mandoClientes
      fechaVisita
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateStockEventInventario = /* GraphQL */ `
  subscription OnCreateStockEventInventario(
    $filter: ModelSubscriptionStockEventInventarioFilterInput
  ) {
    onCreateStockEventInventario(filter: $filter) {
      id
      quantity
      fecha
      inventarioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateStockEventInventario = /* GraphQL */ `
  subscription OnUpdateStockEventInventario(
    $filter: ModelSubscriptionStockEventInventarioFilterInput
  ) {
    onUpdateStockEventInventario(filter: $filter) {
      id
      quantity
      fecha
      inventarioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteStockEventInventario = /* GraphQL */ `
  subscription OnDeleteStockEventInventario(
    $filter: ModelSubscriptionStockEventInventarioFilterInput
  ) {
    onDeleteStockEventInventario(filter: $filter) {
      id
      quantity
      fecha
      inventarioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateInventario = /* GraphQL */ `
  subscription OnCreateInventario(
    $filter: ModelSubscriptionInventarioFilterInput
  ) {
    onCreateInventario(filter: $filter) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      ventas
      compras
      total
      tipoTotal
      productsID
      StockEventInventarios {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateInventario = /* GraphQL */ `
  subscription OnUpdateInventario(
    $filter: ModelSubscriptionInventarioFilterInput
  ) {
    onUpdateInventario(filter: $filter) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      ventas
      compras
      total
      tipoTotal
      productsID
      StockEventInventarios {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteInventario = /* GraphQL */ `
  subscription OnDeleteInventario(
    $filter: ModelSubscriptionInventarioFilterInput
  ) {
    onDeleteInventario(filter: $filter) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      ventas
      compras
      total
      tipoTotal
      productsID
      StockEventInventarios {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
      id
      name
      Inventarios {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
      id
      name
      Inventarios {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
      id
      name
      Inventarios {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
