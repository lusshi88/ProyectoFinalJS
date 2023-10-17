// capturo por medio del DOM
let paginaPomelo = document.getElementById("gaseosasPomelo3");
let buscador = document.getElementById ("buscador3");
let modalCarrito = document.getElementById("modalCarrito");
let precioTotal = document.getElementById("precioTotal");
let botonCarrito2 = document.getElementById("botonCarrito2");



// Funciones exclusivas para los gustos de gaseosas del DOM!
class GaseosasdePomelo {
    constructor (id, nombre, precio, litros,imagen) {
          
         this.id = id;
         this.nombre = nombre;
         this.precio = precio;
         this.litros = litros;
         this.imagen = imagen;
      
    }
    }
    //Instanciación de objetos: 
    const pomelo1 = new GaseosasdePomelo (9,"Crush", 413, "2,25L","7790895007392_E01.webp" );
    const pomelo2 = new GaseosasdePomelo (10,"Schweppes", 600, "1,5L","whatsapp-image-2021-08-25-at-11-12-461-a04696eaceadd78ccc16299008628662-640-0.jpeg");
    const pomelo3 = new GaseosasdePomelo (11,"Manaos",321,"2,25L","Gaseosa-Manaos-Pomelo-225-Lts-_1.webp");
    const pomelo4 = new GaseosasdePomelo (12,"Secco- Intenso",290,"2,25L","secco-pomelo1-555540c6c51a6b2d1216139349617802-1024-1024.gif");
    
    const estanteria = []
    estanteria.push(pomelo1,pomelo2,pomelo3,pomelo4)

     // carrito ----------------------------------------------------------------
const productoscarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
console.log(productoscarrito);

    // Aca imprimo (con un for of ) lo que se ve en gaseosaspomelo.html con el DOM
function mostrarGustosPomelo(array){
  paginaPomelo.innerHTML = ""
    //for of: para recorrer un array posición a posición
    for(let GaseosasdePomelo of array){
  
  let mostrargaseosaspomeloDiv = document.createElement("div")
  mostrargaseosaspomeloDiv.className = "col-12 col-md-6 col-lg-4 mb-5 "
      mostrargaseosaspomeloDiv.innerHTML = ` <div id="${GaseosasdePomelo.id}" class="cardd " style="width: 18rem;">
      <img class="card-img-top img-fluid" style="height: 250px;"src="../imagenes/${GaseosasdePomelo.imagen}" alt="Gaseosas de cola">
      <div class="card-body">
          <h4 class="card-title"></h4>
          <p>Nombre: ${GaseosasdePomelo.nombre} </p> 
          <p>Litros: ${GaseosasdePomelo.litros}</p>
          <p>Precio:$${ GaseosasdePomelo.precio} </p>
          <button type="button"  class="btn btn-primary" id="gaseosasid${GaseosasdePomelo.id}" >COMPRAR</button>
  </div> `
  paginaPomelo.append(mostrargaseosaspomeloDiv)
  
 // todo para el carrito ----------------------------------------------------------------
let btncompras = document.getElementById(`gaseosasid${GaseosasdePomelo.id}`);
console.log(btncompras);

btncompras.addEventListener("click", () => {
agregarAlCarrito(GaseosasdePomelo)
  
})

    }
  }
  mostrarGustosPomelo(estanteria)

    // función para calcular el total de los productos
function calcularTotal (array) {
  const totalReduce = array.reduce(
  (acumulador, GaseosasdePomelo) =>
  {return acumulador + GaseosasdePomelo.precio},
  0  
  )
  precioTotal.innerHTML = `El total de su compra es $${totalReduce}`
  }
  
  // funcion cuando ponen mas de 1 gaseosa iguales
  
  function agregarAlCarrito(elementopomelo) {
    let gaseosaduplicada = productoscarrito.find((pomelo)=> pomelo.id === elementopomelo.id)
    
    gaseosaduplicada == undefined ?
  
    (// aca estoy pusheando al carrito
    productoscarrito.push(elementopomelo),
    // pusheo al storage
    localStorage.setItem("carrito",JSON.stringify(productoscarrito)),
    Toastify({
      text: `Se agrego ${elementopomelo.nombre} al carrito `,
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
               <button class= "btn btn-danger" id=""><i class="fas fa-trash-alt"></i></button>
       </div>    
  </div>
  `
    
  }
  )
  calcularTotal(array)
  }
  
  
  botonCarrito2.addEventListener("click",()=>{cargarProductosCarrito(productoscarrito)})
  
  
  
     
  mostrarGustosPomelo(estanteria);
  
  // funcion para buscar por input las gaseosas

function buscainfo(buscado, array) {
  let coincidencias = array.filter(gaseosa => gaseosa.nombre.toLowerCase().includes(buscado.toLowerCase()))
  mostrarGustosPomelo(coincidencias);
}
buscador.addEventListener("input", () => {
  buscainfo(buscador.value, estanteria);
});
