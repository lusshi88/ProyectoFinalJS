let botonoscuro = document.getElementById("botondark");

if (localStorage.getItem("modo oscuro")== "true"){
document.body.classList.toggle("darkmode")
botonoscuro.innerText = "modo claro"
}

botonoscuro.addEventListener("click",() =>{
document.body.classList.toggle("darkmode")
if (botonoscuro.innerText == "modo oscuro"){
    botonoscuro.innerText = "modo claro"
    localStorage.setItem("modo oscuro",true)
}
else if (botonoscuro.innerText == "modo claro"){
    botonoscuro.innerText = "modo oscuro"
    localStorage.setItem("modo oscuro",false)
}
})