/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStockEventArtesanal = /* GraphQL */ `
  subscription OnCreateStockEventArtesanal(
    $filter: ModelSubscriptionStockEventArtesanalFilterInput
  ) {
    onCreateStockEventArtesanal(filter: $filter) {
      id
      quantity
      fecha
      invcervartesanalID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateStockEventArtesanal = /* GraphQL */ `
  subscription OnUpdateStockEventArtesanal(
    $filter: ModelSubscriptionStockEventArtesanalFilterInput
  ) {
    onUpdateStockEventArtesanal(filter: $filter) {
      id
      quantity
      fecha
      invcervartesanalID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteStockEventArtesanal = /* GraphQL */ `
  subscription OnDeleteStockEventArtesanal(
    $filter: ModelSubscriptionStockEventArtesanalFilterInput
  ) {
    onDeleteStockEventArtesanal(filter: $filter) {
      id
      quantity
      fecha
      invcervartesanalID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCERVEZAARTESANAL = /* GraphQL */ `
  subscription OnCreateCERVEZAARTESANAL(
    $filter: ModelSubscriptionCERVEZAARTESANALFilterInput
  ) {
    onCreateCERVEZAARTESANAL(filter: $filter) {
      id
      nam
      INVCERVARTESANALS {
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
export const onUpdateCERVEZAARTESANAL = /* GraphQL */ `
  subscription OnUpdateCERVEZAARTESANAL(
    $filter: ModelSubscriptionCERVEZAARTESANALFilterInput
  ) {
    onUpdateCERVEZAARTESANAL(filter: $filter) {
      id
      nam
      INVCERVARTESANALS {
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
export const onDeleteCERVEZAARTESANAL = /* GraphQL */ `
  subscription OnDeleteCERVEZAARTESANAL(
    $filter: ModelSubscriptionCERVEZAARTESANALFilterInput
  ) {
    onDeleteCERVEZAARTESANAL(filter: $filter) {
      id
      nam
      INVCERVARTESANALS {
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
export const onCreateINVCERVARTESANAL = /* GraphQL */ `
  subscription OnCreateINVCERVARTESANAL(
    $filter: ModelSubscriptionINVCERVARTESANALFilterInput
  ) {
    onCreateINVCERVARTESANAL(filter: $filter) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      total
      ventas
      compras
      tipoTotal
      cervezaartesanalID
      StockEventArtesanals {
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
export const onUpdateINVCERVARTESANAL = /* GraphQL */ `
  subscription OnUpdateINVCERVARTESANAL(
    $filter: ModelSubscriptionINVCERVARTESANALFilterInput
  ) {
    onUpdateINVCERVARTESANAL(filter: $filter) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      total
      ventas
      compras
      tipoTotal
      cervezaartesanalID
      StockEventArtesanals {
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
export const onDeleteINVCERVARTESANAL = /* GraphQL */ `
  subscription OnDeleteINVCERVARTESANAL(
    $filter: ModelSubscriptionINVCERVARTESANALFilterInput
  ) {
    onDeleteINVCERVARTESANAL(filter: $filter) {
      id
      inventarioInicialFisico
      inventarioFinalFisico
      fechaInicioConteoFisico
      fechaFinConteoFisico
      total
      ventas
      compras
      tipoTotal
      cervezaartesanalID
      StockEventArtesanals {
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
export const onCreateCLIENTES = /* GraphQL */ `
  subscription OnCreateCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onCreateCLIENTES(filter: $filter) {
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
      whatsapp
      email
      mesero
      servici
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCLIENTES = /* GraphQL */ `
  subscription OnUpdateCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onUpdateCLIENTES(filter: $filter) {
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
      whatsapp
      email
      mesero
      servici
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCLIENTES = /* GraphQL */ `
  subscription OnDeleteCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onDeleteCLIENTES(filter: $filter) {
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
      whatsapp
      email
      mesero
      servici
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateStockInventariosBotellas = /* GraphQL */ `
  subscription OnCreateStockInventariosBotellas(
    $filter: ModelSubscriptionStockInventariosBotellasFilterInput
  ) {
    onCreateStockInventariosBotellas(filter: $filter) {
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
export const onUpdateStockInventariosBotellas = /* GraphQL */ `
  subscription OnUpdateStockInventariosBotellas(
    $filter: ModelSubscriptionStockInventariosBotellasFilterInput
  ) {
    onUpdateStockInventariosBotellas(filter: $filter) {
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
export const onDeleteStockInventariosBotellas = /* GraphQL */ `
  subscription OnDeleteStockInventariosBotellas(
    $filter: ModelSubscriptionStockInventariosBotellasFilterInput
  ) {
    onDeleteStockInventariosBotellas(filter: $filter) {
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
export const onCreateInventarioBotellas = /* GraphQL */ `
  subscription OnCreateInventarioBotellas(
    $filter: ModelSubscriptionInventarioBotellasFilterInput
  ) {
    onCreateInventarioBotellas(filter: $filter) {
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
export const onUpdateInventarioBotellas = /* GraphQL */ `
  subscription OnUpdateInventarioBotellas(
    $filter: ModelSubscriptionInventarioBotellasFilterInput
  ) {
    onUpdateInventarioBotellas(filter: $filter) {
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
export const onDeleteInventarioBotellas = /* GraphQL */ `
  subscription OnDeleteInventarioBotellas(
    $filter: ModelSubscriptionInventarioBotellasFilterInput
  ) {
    onDeleteInventarioBotellas(filter: $filter) {
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
export const onCreateProductosBotellas = /* GraphQL */ `
  subscription OnCreateProductosBotellas(
    $filter: ModelSubscriptionProductosBotellasFilterInput
  ) {
    onCreateProductosBotellas(filter: $filter) {
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
export const onUpdateProductosBotellas = /* GraphQL */ `
  subscription OnUpdateProductosBotellas(
    $filter: ModelSubscriptionProductosBotellasFilterInput
  ) {
    onUpdateProductosBotellas(filter: $filter) {
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
export const onDeleteProductosBotellas = /* GraphQL */ `
  subscription OnDeleteProductosBotellas(
    $filter: ModelSubscriptionProductosBotellasFilterInput
  ) {
    onDeleteProductosBotellas(filter: $filter) {
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
export const onCreateEmpresa = /* GraphQL */ `
  subscription OnCreateEmpresa($filter: ModelSubscriptionEmpresaFilterInput) {
    onCreateEmpresa(filter: $filter) {
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
export const onUpdateEmpresa = /* GraphQL */ `
  subscription OnUpdateEmpresa($filter: ModelSubscriptionEmpresaFilterInput) {
    onUpdateEmpresa(filter: $filter) {
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
export const onDeleteEmpresa = /* GraphQL */ `
  subscription OnDeleteEmpresa($filter: ModelSubscriptionEmpresaFilterInput) {
    onDeleteEmpresa(filter: $filter) {
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
      comentarioEncargado
      comentarioGerente
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
      comentarioEncargado
      comentarioGerente
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
      comentarioEncargado
      comentarioGerente
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
