

// array de productos
const productosFruta = [
    { id: 0, nombre: "banana", precio: 900 },
    { id: 1, nombre: "naranja", precio: 700 },
    { id: 2, nombre: "frutilla", precio: 800 },
    { id: 3, nombre: "manzana", precio: 500 },
  ];
  for (const producto of productosFruta) {
    console.log(producto);
  }
  let carrito = [];
  
  let usuario = prompt("Hola! quiere una fruta, si o no");

  if (usuario == "si") {
    alert(" a continuacion las frutas disponibles");
    let todasLasFrutas = productosFruta.map(
      (producto) => producto.nombre + " " + producto.precio
    );
    alert(todasLasFrutas.join("-"));
  } else if (usuario == "no") {
    alert("gracias, vuelva pronto!");
  }
  
    while (usuario != "no") {
      let productos = prompt("agregue la fruta que desea");
      let precio = 0;
      if (productos == "manzana" ||productos == "banana" ||productos == "naranja" || productos=="frutilla"
      ) {
        switch (productos) {
          case "banana":
            precio = 900;
            break;
          case "naranja":
            precio = 700;
            break;
          case "manzana":
            precio = 500;
            break;
            case "frutilla":
            precio = 800;
            break;
         default:
                break;
        }
    
      } else{
        alert ("no tenemos stock")
      }
  //pusheamos los productos y mostramos la compra
  let unidades= parseInt(prompt ("Cuantas desea llevar ?"))
  carrito.push({productos, unidades, precio})
  console.log(carrito)


  usuario= prompt("desea seguir comprando?")
  } if(usuario == "no"){
    alert("gracias, vuelva pronto!")
    carrito.forEach((compraFinal) => console.log(` los productos: ${compraFinal.productos} el total es : ${compraFinal.unidades* compraFinal.precio}`))
  }
  // reduce para sumar el total de la compra
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio,0)
console.log(`el total es ${total}`)

//metodo de busqueda
const busqueda = productosFruta.filter((producto) => producto.precio < 1000)
console.log(busqueda)

