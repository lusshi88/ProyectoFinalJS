// capturo por medio del DOM
let colas = document.getElementById("gaseosasCola2");
let naranjas = document.getElementById("gaseosasCola2");
let pomelo = document.getElementById("gaseosasCola2");

// Aaca imprimi (manualmente) las cosas que se ven en el index.html con el DOM

let carCola = document.createElement("div"); 
carCola.className = "col-12 col-md-6 col-lg-4 my-2"
 carCola.innerHTML = ` <div id="1" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/gustocola.webp" alt="Gaseosas de cola">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <a  href="./pages/gaseosascola.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Cola</a>
                     </div>
     </div> `

colas.append(carCola)


let carNaranja = document.createElement("div"); 
carNaranja.className = "col-12 col-md-6 col-lg-4 my-2"
 carNaranja.innerHTML = ` <div id="1" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/crush-nja1-a94ddde97a18c41d8516004366860968-1024-1024.jpeg" alt="Gaseosas de cola">
                    <div class="card-body">
                        <h4 class="card-title"></h4>   
                        <a  href="./pages/gaseosasnaranja.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Naranja</a>
                     </div>
     </div> `

naranjas.append(carNaranja)


let carPomelo = document.createElement("div"); 
carPomelo.className = "col-12 col-md-6 col-lg-4 my-2"
 carPomelo.innerHTML = ` <div id="1" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: 200px;"src="imagenes/D_NQ_NP_639394-MLA69983179596_062023-O.webp" alt="Gaseosas de cola">
                    <div class="card-body">
                        <h4 class="card-title"></h4> 
                        <a  href="./pages/gaseosaspomelo.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver marcas de gusto Pomelo</a>
                     </div>
     </div> `

pomelo.append(carPomelo)



