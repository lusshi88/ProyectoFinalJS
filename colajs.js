// local storage
localStorage.setItem("gustos",5422)

// aca borre un storage local que habia creado antes para probar :D
localStorage.removeItem(`colajs`)
//  !---------------------------------------------------------------->

// capturo por medio del DOM
let paginaCola = document.getElementById("gaseosasCola3");

// Funciones exclusivas para los gustos de gaseosas del DOM!
class GaseosasdeCola {
    constructor (id, nombre, precio, litros,imagen) {
          
         this.id = id;
         this.nombre = nombre;
         this.precio = precio;
         this.litros = litros;
         this.imagen = imagen;
      
    }
    }
    //Instanciación de objetos: 
    const cola1 = new GaseosasdeCola(1,"Coca cola - Sabor original", 898, "2,5L","00180538.jpg" );
    const cola2 = new GaseosasdeCola(2,"Pepsi", 694, "3L","00207054.jpg");
    const cola3 = new GaseosasdeCola (3,"Manaos",400,"2,25L","manaoscola.webp");
    const cola4 = new GaseosasdeCola (4,"Secco",290,"2,25L","seccocola.jpg");
    
    const estanteria = []
    estanteria.push(cola1,cola2,cola3,cola4)

    // Aca imprimo (con un for of) lo que se ve en gaseosascola.html con el DOM
function mostrarGustosCola(array){
  
 //for of: para recorrer un array posición a posición
    for(let GaseosasdeCola of array){
  let mostrargaseosascolaDiv = document.createElement("div")
  mostrargaseosascolaDiv.className = "col-12 col-md-6 col-lg-4 mb-5 "
      mostrargaseosascolaDiv.innerHTML = ` <div id="${GaseosasdeCola.id}" class="cardd " style="width: 18rem;">
      <img class="card-img-top img-fluid" style="height: 250px;"src="../imagenes/${GaseosasdeCola.imagen}" alt="Gaseosas de cola">
      <div class="card-body">
          <h4 class="card-title"></h4>
          <p>Nombre: ${GaseosasdeCola.nombre} </p> 
          <p>Litros: ${GaseosasdeCola.litros}</p>
          <p>Precio:$${ GaseosasdeCola.precio} </p>
          <button type="button"  class="btn btn-primary" id="daleloco" >COMPRAR</button>
       </div>
  </div> `
 
  paginaCola.append(mostrargaseosascolaDiv)
  
    }
  }
  mostrarGustosCola(estanteria)
  

  // Estoy probando los eventos :c 
  function holacompra (){
    alert ("Usted ha comprado" )
  }
  let botonCompra = document.getElementById("daleloco")
  console.log(botonCompra);
 botonCompra.addEventListener("click",holacompra)




