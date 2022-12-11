/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStockEventArtesanal = /* GraphQL */ `
  mutation CreateStockEventArtesanal(
    $input: CreateStockEventArtesanalInput!
    $condition: ModelStockEventArtesanalConditionInput
  ) {
    createStockEventArtesanal(input: $input, condition: $condition) {
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
export const updateStockEventArtesanal = /* GraphQL */ `
  mutation UpdateStockEventArtesanal(
    $input: UpdateStockEventArtesanalInput!
    $condition: ModelStockEventArtesanalConditionInput
  ) {
    updateStockEventArtesanal(input: $input, condition: $condition) {
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
export const deleteStockEventArtesanal = /* GraphQL */ `
  mutation DeleteStockEventArtesanal(
    $input: DeleteStockEventArtesanalInput!
    $condition: ModelStockEventArtesanalConditionInput
  ) {
    deleteStockEventArtesanal(input: $input, condition: $condition) {
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
export const createCERVEZAARTESANAL = /* GraphQL */ `
  mutation CreateCERVEZAARTESANAL(
    $input: CreateCERVEZAARTESANALInput!
    $condition: ModelCERVEZAARTESANALConditionInput
  ) {
    createCERVEZAARTESANAL(input: $input, condition: $condition) {
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
export const updateCERVEZAARTESANAL = /* GraphQL */ `
  mutation UpdateCERVEZAARTESANAL(
    $input: UpdateCERVEZAARTESANALInput!
    $condition: ModelCERVEZAARTESANALConditionInput
  ) {
    updateCERVEZAARTESANAL(input: $input, condition: $condition) {
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
export const deleteCERVEZAARTESANAL = /* GraphQL */ `
  mutation DeleteCERVEZAARTESANAL(
    $input: DeleteCERVEZAARTESANALInput!
    $condition: ModelCERVEZAARTESANALConditionInput
  ) {
    deleteCERVEZAARTESANAL(input: $input, condition: $condition) {
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
export const createINVCERVARTESANAL = /* GraphQL */ `
  mutation CreateINVCERVARTESANAL(
    $input: CreateINVCERVARTESANALInput!
    $condition: ModelINVCERVARTESANALConditionInput
  ) {
    createINVCERVARTESANAL(input: $input, condition: $condition) {
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
export const updateINVCERVARTESANAL = /* GraphQL */ `
  mutation UpdateINVCERVARTESANAL(
    $input: UpdateINVCERVARTESANALInput!
    $condition: ModelINVCERVARTESANALConditionInput
  ) {
    updateINVCERVARTESANAL(input: $input, condition: $condition) {
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
export const deleteINVCERVARTESANAL = /* GraphQL */ `
  mutation DeleteINVCERVARTESANAL(
    $input: DeleteINVCERVARTESANALInput!
    $condition: ModelINVCERVARTESANALConditionInput
  ) {
    deleteINVCERVARTESANAL(input: $input, condition: $condition) {
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
export const createCLIENTES = /* GraphQL */ `
  mutation CreateCLIENTES(
    $input: CreateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    createCLIENTES(input: $input, condition: $condition) {
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
export const updateCLIENTES = /* GraphQL */ `
  mutation UpdateCLIENTES(
    $input: UpdateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    updateCLIENTES(input: $input, condition: $condition) {
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
export const deleteCLIENTES = /* GraphQL */ `
  mutation DeleteCLIENTES(
    $input: DeleteCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    deleteCLIENTES(input: $input, condition: $condition) {
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
export const createStockInventariosBotellas = /* GraphQL */ `
  mutation CreateStockInventariosBotellas(
    $input: CreateStockInventariosBotellasInput!
    $condition: ModelStockInventariosBotellasConditionInput
  ) {
    createStockInventariosBotellas(input: $input, condition: $condition) {
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
export const updateStockInventariosBotellas = /* GraphQL */ `
  mutation UpdateStockInventariosBotellas(
    $input: UpdateStockInventariosBotellasInput!
    $condition: ModelStockInventariosBotellasConditionInput
  ) {
    updateStockInventariosBotellas(input: $input, condition: $condition) {
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
export const deleteStockInventariosBotellas = /* GraphQL */ `
  mutation DeleteStockInventariosBotellas(
    $input: DeleteStockInventariosBotellasInput!
    $condition: ModelStockInventariosBotellasConditionInput
  ) {
    deleteStockInventariosBotellas(input: $input, condition: $condition) {
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
export const createInventarioBotellas = /* GraphQL */ `
  mutation CreateInventarioBotellas(
    $input: CreateInventarioBotellasInput!
    $condition: ModelInventarioBotellasConditionInput
  ) {
    createInventarioBotellas(input: $input, condition: $condition) {
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
export const updateInventarioBotellas = /* GraphQL */ `
  mutation UpdateInventarioBotellas(
    $input: UpdateInventarioBotellasInput!
    $condition: ModelInventarioBotellasConditionInput
  ) {
    updateInventarioBotellas(input: $input, condition: $condition) {
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
export const deleteInventarioBotellas = /* GraphQL */ `
  mutation DeleteInventarioBotellas(
    $input: DeleteInventarioBotellasInput!
    $condition: ModelInventarioBotellasConditionInput
  ) {
    deleteInventarioBotellas(input: $input, condition: $condition) {
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
export const createProductosBotellas = /* GraphQL */ `
  mutation CreateProductosBotellas(
    $input: CreateProductosBotellasInput!
    $condition: ModelProductosBotellasConditionInput
  ) {
    createProductosBotellas(input: $input, condition: $condition) {
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
export const updateProductosBotellas = /* GraphQL */ `
  mutation UpdateProductosBotellas(
    $input: UpdateProductosBotellasInput!
    $condition: ModelProductosBotellasConditionInput
  ) {
    updateProductosBotellas(input: $input, condition: $condition) {
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
export const deleteProductosBotellas = /* GraphQL */ `
  mutation DeleteProductosBotellas(
    $input: DeleteProductosBotellasInput!
    $condition: ModelProductosBotellasConditionInput
  ) {
    deleteProductosBotellas(input: $input, condition: $condition) {
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
export const createEmpresa = /* GraphQL */ `
  mutation CreateEmpresa(
    $input: CreateEmpresaInput!
    $condition: ModelEmpresaConditionInput
  ) {
    createEmpresa(input: $input, condition: $condition) {
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
export const updateEmpresa = /* GraphQL */ `
  mutation UpdateEmpresa(
    $input: UpdateEmpresaInput!
    $condition: ModelEmpresaConditionInput
  ) {
    updateEmpresa(input: $input, condition: $condition) {
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
export const deleteEmpresa = /* GraphQL */ `
  mutation DeleteEmpresa(
    $input: DeleteEmpresaInput!
    $condition: ModelEmpresaConditionInput
  ) {
    deleteEmpresa(input: $input, condition: $condition) {
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
export const createHotel = /* GraphQL */ `
  mutation CreateHotel(
    $input: CreateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    createHotel(input: $input, condition: $condition) {
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
export const updateHotel = /* GraphQL */ `
  mutation UpdateHotel(
    $input: UpdateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    updateHotel(input: $input, condition: $condition) {
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
export const deleteHotel = /* GraphQL */ `
  mutation DeleteHotel(
    $input: DeleteHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    deleteHotel(input: $input, condition: $condition) {
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
export const createStockEventInventario = /* GraphQL */ `
  mutation CreateStockEventInventario(
    $input: CreateStockEventInventarioInput!
    $condition: ModelStockEventInventarioConditionInput
  ) {
    createStockEventInventario(input: $input, condition: $condition) {
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
export const updateStockEventInventario = /* GraphQL */ `
  mutation UpdateStockEventInventario(
    $input: UpdateStockEventInventarioInput!
    $condition: ModelStockEventInventarioConditionInput
  ) {
    updateStockEventInventario(input: $input, condition: $condition) {
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
export const deleteStockEventInventario = /* GraphQL */ `
  mutation DeleteStockEventInventario(
    $input: DeleteStockEventInventarioInput!
    $condition: ModelStockEventInventarioConditionInput
  ) {
    deleteStockEventInventario(input: $input, condition: $condition) {
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
export const createInventario = /* GraphQL */ `
  mutation CreateInventario(
    $input: CreateInventarioInput!
    $condition: ModelInventarioConditionInput
  ) {
    createInventario(input: $input, condition: $condition) {
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
export const updateInventario = /* GraphQL */ `
  mutation UpdateInventario(
    $input: UpdateInventarioInput!
    $condition: ModelInventarioConditionInput
  ) {
    updateInventario(input: $input, condition: $condition) {
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
export const deleteInventario = /* GraphQL */ `
  mutation DeleteInventario(
    $input: DeleteInventarioInput!
    $condition: ModelInventarioConditionInput
  ) {
    deleteInventario(input: $input, condition: $condition) {
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
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
