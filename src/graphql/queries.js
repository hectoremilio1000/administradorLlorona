/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCLIENTES = /* GraphQL */ `
  query GetCLIENTES($id: ID!) {
    getCLIENTES(id: $id) {
      id
      nombre
      cumple
      delegacion
      fechaLlegada
      HoraLlegada
      mesaAsignada
      numeroPersonas
      evento
      esReserva
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCLIENTES = /* GraphQL */ `
  query ListCLIENTES(
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCLIENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        cumple
        delegacion
        fechaLlegada
        HoraLlegada
        mesaAsignada
        numeroPersonas
        evento
        esReserva
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCLIENTES = /* GraphQL */ `
  query SyncCLIENTES(
    $filter: ModelCLIENTESFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCLIENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        cumple
        delegacion
        fechaLlegada
        HoraLlegada
        mesaAsignada
        numeroPersonas
        evento
        esReserva
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStockInventariosBotellas = /* GraphQL */ `
  query GetStockInventariosBotellas($id: ID!) {
    getStockInventariosBotellas(id: $id) {
      id
      quantity
      fecha
      inventariobotellasID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStockInventariosBotellas = /* GraphQL */ `
  query ListStockInventariosBotellas(
    $filter: ModelStockInventariosBotellasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockInventariosBotellas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quantity
        fecha
        inventariobotellasID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStockInventariosBotellas = /* GraphQL */ `
  query SyncStockInventariosBotellas(
    $filter: ModelStockInventariosBotellasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStockInventariosBotellas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        fecha
        inventariobotellasID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getInventarioBotellas = /* GraphQL */ `
  query GetInventarioBotellas($id: ID!) {
    getInventarioBotellas(id: $id) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      ventas
      compras
      total
      tipoTotal
      productosbotellasID
      StockInventariosBotellas {
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
export const listInventarioBotellas = /* GraphQL */ `
  query ListInventarioBotellas(
    $filter: ModelInventarioBotellasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventarioBotellas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        inventarioInicialFisico
        inventarioFinalFisico
        fechaInicioConteoFisico
        fechaFinConteoFisico
        ventas
        compras
        total
        tipoTotal
        productosbotellasID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInventarioBotellas = /* GraphQL */ `
  query SyncInventarioBotellas(
    $filter: ModelInventarioBotellasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInventarioBotellas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        inventarioInicialFisico
        inventarioFinalFisico
        fechaInicioConteoFisico
        fechaFinConteoFisico
        ventas
        compras
        total
        tipoTotal
        productosbotellasID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductosBotellas = /* GraphQL */ `
  query GetProductosBotellas($id: ID!) {
    getProductosBotellas(id: $id) {
      id
      name
      InventarioBotellas {
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
export const listProductosBotellas = /* GraphQL */ `
  query ListProductosBotellas(
    $filter: ModelProductosBotellasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductosBotellas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductosBotellas = /* GraphQL */ `
  query SyncProductosBotellas(
    $filter: ModelProductosBotellasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductosBotellas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEmpresa = /* GraphQL */ `
  query GetEmpresa($id: ID!) {
    getEmpresa(id: $id) {
      id
      nombre
      direccionCompleta
      visitado
      yaContacto
      seCerroEvento
      fechaVisita
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEmpresas = /* GraphQL */ `
  query ListEmpresas(
    $filter: ModelEmpresaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmpresas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        direccionCompleta
        visitado
        yaContacto
        seCerroEvento
        fechaVisita
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEmpresas = /* GraphQL */ `
  query SyncEmpresas(
    $filter: ModelEmpresaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmpresas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        direccionCompleta
        visitado
        yaContacto
        seCerroEvento
        fechaVisita
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHotel = /* GraphQL */ `
  query GetHotel($id: ID!) {
    getHotel(id: $id) {
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
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncHotels = /* GraphQL */ `
  query SyncHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHotels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStockEventInventario = /* GraphQL */ `
  query GetStockEventInventario($id: ID!) {
    getStockEventInventario(id: $id) {
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
export const listStockEventInventarios = /* GraphQL */ `
  query ListStockEventInventarios(
    $filter: ModelStockEventInventarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockEventInventarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStockEventInventarios = /* GraphQL */ `
  query SyncStockEventInventarios(
    $filter: ModelStockEventInventarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStockEventInventarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getInventario = /* GraphQL */ `
  query GetInventario($id: ID!) {
    getInventario(id: $id) {
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
export const listInventarios = /* GraphQL */ `
  query ListInventarios(
    $filter: ModelInventarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInventarios = /* GraphQL */ `
  query SyncInventarios(
    $filter: ModelInventarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInventarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
