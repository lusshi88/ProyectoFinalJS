// capturo por medio del DOM
let paginaPomelo = document.getElementById("gaseosasPomelo3");
let buscador = document.getElementById ("buscador3");


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
    const pomelo1 = new GaseosasdePomelo (1,"Crush", 413, "2,25L","7790895007392_E01.webp" );
    const pomelo2 = new GaseosasdePomelo (2,"Schweppes", 600, "1,5L","whatsapp-image-2021-08-25-at-11-12-461-a04696eaceadd78ccc16299008628662-640-0.jpeg");
    const pomelo3 = new GaseosasdePomelo (3,"Manaos",321,"2,25L","Gaseosa-Manaos-Pomelo-225-Lts-_1.webp");
    const pomelo4 = new GaseosasdePomelo (4,"Secco- Intenso",290,"2,25L","secco-pomelo1-555540c6c51a6b2d1216139349617802-1024-1024.gif");
    
    const estanteria = []
    estanteria.push(pomelo1,pomelo2,pomelo3,pomelo4)


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
          <button type="button"  class="btn btn-primary" id="gaseosasid-${GaseosasdePomelo.id}" >COMPRAR</button>
  </div> `
  paginaPomelo.append(mostrargaseosaspomeloDiv)
  
  // aplico eventos a los botones "comprar"
  let botonCompraPomelo = document.getElementById(`gaseosasid-${GaseosasdePomelo.id}`)
  botonCompraPomelo.addEventListener("click",noticarrito3)
  // funcion para el evento
  function noticarrito3(){
    Toastify({
      text: `Se agrego ${GaseosasdePomelo.nombre} al carrito ` ,
      duration: 2500,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right,red,blue,red )",
        color: "white"
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }

    }
  }
  mostrarGustosPomelo(estanteria)
  
  // funcion para buscar por input las gaseosas

function buscainfo(buscado, array) {
  let coincidencias = array.filter(gaseosa => gaseosa.nombre.toLowerCase().includes(buscado.toLowerCase()))
  mostrarGustosPomelo(coincidencias);
}
buscador.addEventListener("input", () => {
  buscainfo(buscador.value, estanteria);
});
