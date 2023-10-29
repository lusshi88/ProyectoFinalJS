// Este JS , lo hice exclusivamente para que aparezcan todas las gaseosas en el carrito del index :) 


// capturo por medio del DOM
let paginaNaranja = document.getElementById("gaseosasNaranja3");
let buscador = document.getElementById ("buscador2");
let modalCarrito = document.getElementById("modalCarrito");
let precioTotal = document.getElementById("precioTotal");
let botonCarrito2 = document.getElementById("botonCarrito2");

    // carrito ----------------------------------------------------------------
const productoscarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
console.log(productoscarrito);


  // función para calcular el total de los productos
function calcularTotal (array) {
  const totalReduce = array.reduce(
  (acumulador, gaseosaNar) =>
  {return acumulador + gaseosaNar.precio},
  0  
  )
  precioTotal.innerHTML = `El total de su compra es $${totalReduce}`
  }
  
  
  
  // funcion cuando ponen mas de 1 gaseosa iguales
  
  function agregarAlCarrito(elementonaranja) {
    let gaseosaduplicada = productoscarrito.find((naranja)=> naranja.id === elementonaranja.id)
    
    gaseosaduplicada == undefined ?
  
    (// aca estoy pusheando al carrito
    productoscarrito.push(elementonaranja),
    // pusheo al storage
    localStorage.setItem("carrito",JSON.stringify(productoscarrito)),
    Toastify({
      text: `Se agrego ${elementonaranja.nombre} al carrito `,
      duration: 2500,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right,red,blue,red )",
        color: "white",
      },
      onClick: function () {}, // Callback after click
    }).showToast()):
     noticarrito2(productoscarrito)
  } 
   
  function noticarrito2 (elemento) {
    Toastify({
      text: `Ya existe este pruducto en el carrito `,
      duration: 2500,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right,red,blue,red )",
        color: "white",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
   
  
  
  function cargarProductosCarrito (array){
    modalCarrito.innerHTML = "";
  array.forEach((elementoCarrito) => {
    modalCarrito.innerHTML += `
  <div class="card border-primary mb-3" id =${elementoCarrito.id} style="max-width: 540px;">
       <img class="card-img-top" height="250"   src="../imagenes/${elementoCarrito.imagen}" alt="">
       <div class="card-body">
              <h4 class="card-title">${elementoCarrito.nombre}</h4>
              
               <p class="card-text">$${elementoCarrito.precio}</p> 
               <button class= "btn btn-danger" id="btneliminar${elementoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
       </div>    
  </div>
  `
    
  }
  )

  array.forEach((elementoCarrito) => {
    document.getElementById(`btneliminar${elementoCarrito.id}`).addEventListener("click", () => {
    // lo borro del dom
    let borrarcard = document.getElementById(`${elementoCarrito.id}`)
    borrarcard.remove()
  // lo borro del array
  let posicionArray = array.indexOf(elementoCarrito)
  array.splice(posicionArray,1)
  // lo borro del storage
  localStorage.setItem("carrito",JSON.stringify(array))
  calcularTotal(array)
  })
  
  }
  )
  

  calcularTotal(array)
  }
  
  
  botonCarrito2.addEventListener("click",()=>{cargarProductosCarrito(productoscarrito)})
  
  
 