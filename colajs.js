// capturo por medio del DOM
let paginaCola = document.getElementById("gaseosasCola3");
let buscador = document.getElementById("buscador");
let modalCarrito = document.getElementById("modalCarrito");



// Funciones exclusivas para los gustos de gaseosas del DOM!
class GaseosasdeCola {
  constructor(id, nombre, precio, litros, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.litros = litros;
    this.imagen = imagen;
  }
}
//Instanciación de objetos:
const cola1 = new GaseosasdeCola(1,"Coca cola - Sabor original",898,"2,5L","00180538.jpg");
const cola2 = new GaseosasdeCola(2, "Pepsi", 694, "3L", "00207054.jpg");
const cola3 = new GaseosasdeCola(3, "Manaos", 400, "2,25L", "manaoscola.webp");
const cola4 = new GaseosasdeCola(4, "Secco", 290, "2,25L", "seccocola.jpg");

const estanteria = [];
estanteria.push(cola1, cola2, cola3, cola4);

// carrito ----------------------------------------------------------------
const productoscarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
console.log(productoscarrito);

// Aca imprimo (con un for of) lo que se ve en gaseosascola.html con el DOM
function mostrarGustosCola(array) {
  paginaCola.innerHTML = ""
  //for of: para recorrer un array posición a posición
  for (let GaseosasdeCola of array) {
    let mostrargaseosascolaDiv = document.createElement("div");
    mostrargaseosascolaDiv.className = "col-12 col-md-6 col-lg-4 mb-5 ";
    mostrargaseosascolaDiv.innerHTML = ` <div id="${GaseosasdeCola.id}" class="cardd " style="width: 18rem;">
      <img class="card-img-top img-fluid" style="height: 250px;"src="../imagenes/${GaseosasdeCola.imagen}" alt="Gaseosas de cola">
      <div class="card-body">
          <h4 class="card-title"></h4>
          <p>Nombre: ${GaseosasdeCola.nombre} </p> 
          <p>Litros: ${GaseosasdeCola.litros}</p>
          <p>Precio:$${GaseosasdeCola.precio} </p>
          <button type="button"  class="btn btn-primary" id="btncompra${GaseosasdeCola.id}" >COMPRAR</button>
       </div>
  </div> `;

   paginaCola.append(mostrargaseosascolaDiv);

// todo para el carrito ----------------------------------------------------------------
let btncompras = document.getElementById(`btncompra${GaseosasdeCola.id}`);
console.log(btncompras);

btncompras.addEventListener("click", () => {
agregarAlCarrito(GaseosasdeCola),noticarrito(GaseosasdeCola)
  
})
}
}
function agregarAlCarrito(elementocola) {
  let gaseosaduplicada = productoscarrito.find((cola)=> cola.id == elementocola.id)
  
  gaseosaduplicada == undefined ?

  (// aca estoy pusheando al carrito
  productoscarrito.push(elementocola),
  // pusheo al storage
  localStorage.setItem("carrito",JSON.stringify(productoscarrito)),
  console.log(productoscarrito)) :
  alert ("el libro ya existe en el chango")
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
);
}


botonCarrito.addEventListener("click",()=>{cargarProductosCarrito(productoscarrito)})

// Toastify para los botones de "comprar"
function noticarrito(elemento) {
  Toastify({
    text: `Se agrego ${elemento.nombre} al carrito `,
    duration: 2500,
    destination: "https://github.com/apvarun/toastify-js",
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


    // let botonCompraCola = document.getElementById(
    //   `btncompra${GaseosasdeCola.id}`
    // );
 
mostrarGustosCola(estanteria);

// funcion para buscar por input las gaseosas

function buscainfo(buscado, array) {
  let coincidencias = array.filter(gaseosa => gaseosa.nombre.toLowerCase().includes(buscado.toLowerCase()))
  mostrarGustosCola(coincidencias);
}
buscador.addEventListener("input", () => {
  buscainfo(buscador.value, estanteria);
});

