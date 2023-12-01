const { response } = require("express");
const { data } = require("vis-network");
module.exports = function(app, databaseService) {



  app.post("/Usuario", (request, response) => {
    const nuevoUsuario = request.body;
    console.log(nuevoUsuario);
    databaseService
      .crearUsuario(nuevoUsuario)
      .then(() => {
        response.json({ msj: "Usuario Creado" });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });

  app.put("/Usuario/:ID_Usuario", (request, response) => {
    const ID_Usuario = request.params.ID_Usuario;
    const datosActualizados = request.body;

    databaseService
      .actualizarUsuario(ID_Usuario, datosActualizados)
      .then(() => {
        response.json({ msj: "Empleado actualizado" });
      })
      .catch((e) => response.status(500).json(e));
  });












//_----------------Empleados-----------------------------
    app.get("/Empleado", (request, response) => {
        databaseService
          .leerEmpleados()
          .then((Empleado) => {
            response.json(Empleado);
          })
          .catch((e) => response.status(500).json(e));
      });
//________________________________________________________

      app.post("/Empleado", (request, response) => {
        const nuevoEmpleado = request.body;
        console.log(nuevoEmpleado);
        databaseService
          .crearEmpleados(nuevoEmpleado)
          .then(() => {
            response.json({ msj: "Usuario creado" });
          })
          .catch((e) => {
            response.status(500).json(e);
          });
      });
//________________________________________________________
      app.get("/Empleado/:ID_empleado", (request, response) => {
        const ID_empleado = request.params.ID_empleado;
    
        databaseService
          .buscarEmpleadoPorId(ID_empleado)
          .then((Empleado) => {
            if (Empleado) {
              response.json(Empleado);
            } else {
              response
                .status(404)
                .json({ msj: "Empleado no encontrado para el ID proporcionado" });
            }
          })
          .catch((e) => response.status(500).json(e));
      });
//_____________________________________________________
//anthropic
      app.delete("/Empleado/eliminar/:ID_empleado", (request, response) => {
        const ID_empleado = request.params.ID_empleado;
        databaseService
          .eliminarEmpleado(ID_empleado)
          .then(() => {
            response.json({ msj: "Empleado eliminado" });
          })
          .catch((e) => response.status(500).json(e));
      });

//__________________________________________________
      app.put("/Empleado/:ID_empleado", (request, response) => {
        const ID_empleado = request.params.ID_empleado;
        const datosActualizados = request.body;
    
        databaseService
          .actualizarEmpleado(ID_empleado, datosActualizados)
          .then(() => {
            response.json({ msj: "Empleado actualizado" });
          })
          .catch((e) => response.status(500).json(e));
      });



//--------------------------------------Inventario-----------------------------------------------

app.get("/Inventario", (request, response) => {
    databaseService
      .obtenerInventario()
      .then((Inventario) => {//aqui
        response.json(Inventario);
      })
      .catch((e) => response.status(500).json(e));
  });
//______________________________________________
  app.post("/Inventario", (request, response) => {
    const nuevoInventario = request.body;
    console.log(nuevoInventario);
    databaseService
      .crearInverntario(nuevoInventario)
      .then(() => {
        response.json({ msj: "Inventario creado" });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });
//__________________________________________________________________
  app.get("/Inventario/:ID_Producto", (request, response) => {
    const ID_Producto = request.params.ID_Producto;

    databaseService
      .buscarInventarioPorId(ID_Producto)
      .then((Inventario) => {
        if (Inventario) {
          response.json(Inventario);
        } else {
          response
            .status(404)
            .json({ msj: "Inventario no encontrado para el ID proporcionado" });
        }
      })
      .catch((e) => response.status(500).json(e));
  });
//____________________________________________________________________
  app.delete("/Inventario/eliminar/:ID_Producto", (request, response) => {
    const ID_Producto = request.params.ID_Producto;
    databaseService
      .eliminarInventario(ID_Producto)
      .then(() => {
        response.json({ msj: "Empleado eliminado" });
      })
      .catch((e) => response.status(500).json(e));
  });
//_________________________________________________________
app.put("/Inventario/:ID_Producto", (request, response) => {
  const ID_Producto = request.params.ID_Producto;
  const datosActualizados = request.body; // Asegúrate de que esta línea esté presente y que request.body contenga los datos que deseas actualizar

  databaseService
    .actualizarInventarios(ID_Producto, datosActualizados)
    .then(() => {
      response.json({ msj: "Inventario actualizado" });
    })
    .catch((e) => response.status(500).json(e));
});





  //----------------------------------Pedidos--------------------------------------------

  app.get("/Pedidos", (request, response) => {
    databaseService
      .obtenerPedidos()
      .then((Pedidos) => {
        response.json(Pedidos);
      })
      .catch((e) => response.status(500).json(e));
  });
//__________________________________________________

app.post("/Pedidos", (request, response) => {
    const nuevoPedido = request.body;
    console.log(nuevoPedido);
    databaseService
      .crearPedidos(nuevoPedido)
      .then(() => {
        response.json({ msj: "Pedido creado" });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });
//_______________________________________________
app.get("/Pedidos/:ID_pedidos", (request, response) => {
    const ID_pedidos = request.params.ID_pedidos;

    databaseService
      .buscarPedidosPorId(ID_pedidos)
      .then((Pedido) => {
        if (Pedido) {
          response.json(Pedido);
        } else {
          response
            .status(404)
            .json({ msj: "Pedido no encontrado para el ID proporcionado" });
        }
      })
      .catch((e) => response.status(500).json(e));
  });
//________________________________________________________
app.delete("/Pedidos/eliminar/:ID_pedidos", (request, response) => {

    const ID_pedidos = request.params.ID_pedidos;
    databaseService
      .eliminarPedidos(ID_pedidos)
      .then(() => {
        response.json({ msj: "Pedido eliminado" });
      })
      .catch((e) => response.status(500).json(e));
  });
//_________________________________________________________
app.put("/Pedidos/:ID_pedidos", (request, response) => {
    const ID_pedidos = request.params.ID_pedidos;
    const datosActualizados = request.body;

    databaseService
      .actualizarPedidos(ID_pedidos, datosActualizados)
      .then(() => {
        response.json({ msj: "Empleado actualizado" });
      })
      .catch((e) => response.status(500).json(e));
  });



//-------------------------------------------Productos--------------------------------
app.get("/Productos", (request, response) => {
  databaseService
    .obtenerProductosDesdeProveedor()
    .then((Producto) => {
      response.json(Producto);
    })
    .catch((e) => response.status(500).json(e));
});
//__________________________________________________________________________________________
app.post("/Productos", (request, response) => {
  const nuevoProducto = request.body;
  console.log(nuevoProducto);
  databaseService
    .crearProductos(nuevoProducto)
    .then(() => {
      response.json({ msj: "Producto creado" });
    })
    .catch((e) => {
      response.status(500).json(e);
    });
});
//_______________________________________________________________________________________
app.get("/Productos/:ID_Producto", (request, response) => {
  const ID_Producto = request.params.ID_Producto;

  databaseService
    .buscarProductosPorId(ID_Producto)
    .then((Producto) => {
      if (Producto) {
        response.json(Producto);
      } else {
        response
          .status(404)
          .json({ msj: "producto no encontrado" });
      }
    })
    .catch((e) => response.status(500).json(e));
});
//_______________________________________________________________________________________
app.delete("/Producto/eliminar/:ID_Producto", (request, response) => {

  const ID_Producto = request.params.ID_Producto;
  databaseService
    .eliminarProductos(ID_Producto)
    .then(() => {
      response.json({ msj: "Producto Elinado" });
    })
    .catch((e) => response.status(500).json(e));
});

//_____________________________________________________________________________________
app.put("/Productos/:ID_Producto", (request, response) => {
  const ID_Producto = request.params.ID_Producto;
  const datosActualizados = request.body;

  databaseService
    .actualizarProductos(ID_Producto, datosActualizados)
    .then(() => {
      response.json({ msj: "Producto actualizado" });
    })
    .catch((e) => response.status(500).json(e));
});


//----------------------------------Provedor-------------------------------------------------------
app.get("/Provedor", (request, response) => {
  databaseService
    .leerProvedores()
    .then((Provedor) => {
      response.json(Provedor);
    })
    .catch((e) => response.status(500).json(e));
});
//___________________________________________________________________________________________________
app.post("/Provedor", (request, response) => {
  const nuevoProvedor = request.body;
  console.log(nuevoProvedor);
  databaseService
    .crearProvedor(nuevoProvedor)
    .then(() => {
      response.json({ msj: "Provedor creado" });
    })
    .catch((e) => {
      response.status(500).json(e);
    });
});
//___________________________________________________________________________________________________________
app.get("/Provedor/:ID", (request, response) => {
  const ID = request.params.ID;

  databaseService
    .buscarProvedorPorId(ID)
    .then((Provedor) => {
      if (Provedor) {
        response.json(Provedor);
      } else {
        response
          .status(404)
          .json({ msj: "Provedor no encontrado" });
      }
    })
    .catch((e) => response.status(500).json(e));
});
//__________________________________________________________________________________________________________
app.delete("/Provedor/eliminar/:ID", (request, response) => {

  const ID = request.params.ID;
  databaseService
    .eliminarProvedor(ID)
    .then(() => {
      response.json({ msj: "Provedor Elinado" });
    })
    .catch((e) => response.status(500).json(e));
});
//______________________________________________________________________________________________
app.put("/Provedor/:ID", (request, response) => {
  const ID = request.params.ID;
  const datosActualizados = request.body;

  databaseService
    .actualizarProvedor(ID, datosActualizados)
    .then(() => {
      response.json({ msj: "Provedor actualizado" });
    })
    .catch((e) => response.status(500).json(e));
});


//__-------------------Ventas------------------------------------------------------------------------
app.get("/Ventas", (request, response) => {
  databaseService
    .obeterVenta()
    .then((Ventas) => {
      response.json(Ventas);
    })
    .catch((e) => response.status(500).json(e));
});
//_____________________________________________________________________________________________________
app.post("/Ventas", (request, response) => {
  const nuevaVenta = request.body;
  console.log(nuevaVenta);
  databaseService
    .crearVenta(nuevaVenta)
    .then(() => {
      response.json({ msj: "Nueva Venta" });
    })
    .catch((e) => {
      response.status(500).json(e);
    });
});
//_______________________________________________________________________________________________________
app.get("/Ventas/:Ventas", (request, response) => {
  const ID_venta = request.params.ID_venta;

  databaseService
    .buscarVentaPorId(ID_venta)
    .then((Ventas) => {
      if (Ventas) {
        response.json(Ventas);
      } else {
        response
          .status(404)
          .json({ msj: "Venta no encontrado" });
      }
    })
    .catch((e) => response.status(500).json(e));
});
//___________________________________________________________________________________________________________
app.delete("/Ventas/eliminar/:ID_venta", (request, response) => {

  const ID_venta = request.params.ID_venta;
  databaseService
    .eliminarVenta(ID_venta)
    .then(() => {
      response.json({ msj: "Venta Elinada" });
    })
    .catch((e) => response.status(500).json(e));
});
//____________________________________________________________________-
app.put("/Venta/:ID_venta", (request, response) => {
  const ID_venta = request.params.ID_venta;
  const datosActualizados = request.body;

  databaseService
    .actualizarVenta(ID_venta, datosActualizados)
    .then(() => {
      response.json({ msj: "vebta actualizada" });
    })
    .catch((e) => response.status(500).json(e));
});

};