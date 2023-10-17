// capturo por medio del DOM
let paginaNaranja = document.getElementById("gaseosasNaranja3");
let buscador = document.getElementById ("buscador2");
let modalCarrito = document.getElementById("modalCarrito");
let precioTotal = document.getElementById("precioTotal");




// Funciones exclusivas para los gustos de gaseosas del DOM!
class GaseosasdeNaranja {
    constructor (id, nombre, precio, litros,imagen) {
          
         this.id = id;
         this.nombre = nombre;
         this.precio = precio;
         this.litros = litros;
         this.imagen = imagen;
      
    }
    }
    //Instanciación de objetos: 
    const naranja1 = new GaseosasdeNaranja (1,"Fanta", 432, "1,5L","fantanaranja.webp" );
    const naranja2 = new GaseosasdeNaranja (2,"Manaos", 400, "2,25L","Gaseosa-Manaos-Naranja-225-Lts-_1.webp");
    const naranja3 = new GaseosasdeNaranja (3,"Crush",321,"2,25L","302009-800-auto.webp");
    const naranja4 = new GaseosasdeNaranja (4,"Secco",290,"2,25L","623417-800-auto.webp");
    
    const estanteria = []
    estanteria.push(naranja1,naranja2,naranja3,naranja4)

    // carrito ----------------------------------------------------------------
const productoscarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
console.log(productoscarrito);

    // Aca imprimo (con un for of) lo que se ve en gaseosasnaranja.html con el DOM
function mostrarGustosNaranja(array){
  paginaNaranja.innerHTML = ""
    //for of: para recorrer un array posición a posición
    for(let GaseosasdeNaranja of array){
  
  let mostrargaseosasnaranjaDiv = document.createElement("div")
  mostrargaseosasnaranjaDiv.className = "col-12 col-md-6 col-lg-4 mb-5 "
      mostrargaseosasnaranjaDiv.innerHTML = ` <div id="${GaseosasdeNaranja.id}" class="cardd " style="width: 18rem;">
      <img class="card-img-top img-fluid" style="height: 250px;"src="../imagenes/${GaseosasdeNaranja.imagen}" alt="Gaseosas de cola">
      <div class="card-body">
          <h4 class="card-title"></h4>
          <p>Nombre: ${GaseosasdeNaranja.nombre} </p> 
          <p>Litros: ${GaseosasdeNaranja.litros}</p>
          <p>Precio:$${ GaseosasdeNaranja.precio} </p>
          <button type="button"  class="btn btn-primary" id="gaseosasid${GaseosasdeNaranja.id}" >COMPRAR</button>
       </div>
  </div> `
  paginaNaranja.append(mostrargaseosasnaranjaDiv)
  
// todo para el carrito ----------------------------------------------------------------
let btncompras = document.getElementById(`gaseosasid${GaseosasdeNaranja.id}`);
console.log(btncompras);

btncompras.addEventListener("click", () => {
agregarAlCarrito(GaseosasdeNaranja)
  
})
 }
  }
  mostrarGustosNaranja(estanteria)
  

  // función para calcular el total de los productos
function calcularTotal (array) {
  const totalReduce = array.reduce(
  (acumulador, GaseosasdeNaranja) =>
  {return acumulador + GaseosasdeNaranja.precio},
  0  
  )
  precioTotal.innerHTML = `El total de su compra es $${totalReduce}`
  }
  
  
  
  // funcion cuando ponen mas de 1 gaseosa iguales
  
  function agregarAlCarrito(elementonaranja) {
    let gaseosaduplicada = productoscarrito.find((naranja)=> naranja.id == elementonaranja.id)
    
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
   
   
  
  
  function cargarProductosCarrito (array){
    modalCarrito.innerHTML = "";
  array.forEach((elementoCarrito) => {
    modalCarrito.innerHTML += `
  <div class="card border-primary mb-3" id =${elementoCarrito.id} style="max-width: 540px;">
       <img class="card-img-top" height="250"   src="../imagenes/${elementoCarrito.imagen}" alt="">
       <div class="card-body">
              <h4 class="card-title">${elementoCarrito.nombre}</h4>
              
               <p class="card-text">$${elementoCarrito.precio}</p> 
               <button class= "btn btn-danger" id=""><i class="fas fa-trash-alt"></i></button>
       </div>    
  </div>
  `
    
  }
  )
  calcularTotal(array)
  }
  
  
  botonCarrito2.addEventListener("click",()=>{cargarProductosCarrito(productoscarrito)})
  
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
  
  
     
  mostrarGustosNaranja(estanteria);
  
  
  // funcion para buscar por input las gaseosas

function buscainfo2(buscado, array) {
  let coincidencias = array.filter(gaseosa => gaseosa.nombre.toLowerCase().includes(buscado.toLowerCase()))
  mostrarGustosNaranja(coincidencias);
}
buscador.addEventListener("input", () => {
  buscainfo2(buscador.value, estanteria);
});
  