// capturo por medio del DOM
let paginaPomelo = document.getElementById("gaseosasPomelo3");
let buscador = document.getElementById ("buscador3");
let modalCarrito = document.getElementById("modalCarrito");
let precioTotal = document.getElementById("precioTotal");
let botonCarrito2 = document.getElementById("botonCarrito2");

     // carrito ----------------------------------------------------------------
const productoscarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
console.log(productoscarrito);

    // Aca imprimo (con un for of ) lo que se ve en gaseosaspomelo.html con el DOM
const mostrarGustosPomelo = async (array) =>{
  const resp = await fetch(`../pomelo.json`);
  const datagaseosa = await resp.json();
  let estanteria2 = datagaseosa;
  paginaPomelo.innerHTML = ""
    //for of: para recorrer un array posición a posición
    for(let gaseosaPom of estanteria2){
  
  let mostrargaseosaspomeloDiv = document.createElement("div")
  mostrargaseosaspomeloDiv.className = "col-12 col-md-6 col-lg-4 mb-5 "
      mostrargaseosaspomeloDiv.innerHTML = ` <div id="${gaseosaPom.id}" class="cardd " style="width: 18rem;">
      <img class="card-img-top img-fluid" style="height: 250px;"src="../imagenes/${gaseosaPom.imagen}" alt="Gaseosas de cola">
      <div class="card-body">
          <h4 class="card-title"></h4>
          <p>Nombre: ${gaseosaPom.nombre} </p> 
          <p>Litros: ${gaseosaPom.litros}</p>
          <p>Precio:$${ gaseosaPom.precio} </p>
          <button type="button"  class="btn btn-primary" id="gaseosasid${gaseosaPom.id}" >COMPRAR</button>
  </div> `
  paginaPomelo.append(mostrargaseosaspomeloDiv)
  
 // todo para el carrito ----------------------------------------------------------------
let btncompras = document.getElementById(`gaseosasid${gaseosaPom.id}`);


btncompras.addEventListener("click", () => {
agregarAlCarrito(gaseosaPom)
  
})

    }
  }
  mostrarGustosPomelo()

    // función para calcular el total de los productos
function calcularTotal (array) {
  const totalReduce = array.reduce(
  (acumulador, gaseosaPom) =>
  {return acumulador + gaseosaPom.precio},
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
   
  
  // Esta función imprime las cards en el modal del carrito :)
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
  
  
  
     
  // mostrarGustosPomelo(estanteria);
  
  // funcion para buscar por input las gaseosas

function buscainfo(buscado, array) {
  let coincidencias = array.filter(gaseosa => gaseosa.nombre.toLowerCase().includes(buscado.toLowerCase()))
  mostrarGustosPomelo(coincidencias);
}
buscador.addEventListener("input", () => {
  buscainfo(buscador.value, estanteria2);
});
