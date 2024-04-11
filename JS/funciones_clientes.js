function intercambiarImagenes(cardId) {
    // Intercambiar imágenes
    var imagenContainerimg = document.querySelector('#containerimg img');
    var imagenCard = document.querySelector('#card' + cardId + ' img');
    var tempSrc = imagenContainerimg.src;
    imagenContainerimg.src = imagenCard.src;
    imagenCard.src = tempSrc;

    // Intercambiar nombre del producto
    var nombreContainerTitle = document.querySelector('.containter-title').innerText;
    var nombreCard = document.querySelector('#card' + cardId + ' .textproduct h3').innerText;
    document.querySelector('.containter-title').innerText = nombreCard;
    document.querySelector('#card' + cardId + ' .textproduct h3').innerText = nombreContainerTitle;

    // Intercambiar categoría
    var categoriaContainerTitle2 = document.querySelector('.container-title2').innerText;
    var categoriaCard = document.querySelector('#card' + cardId + ' .infocard .category').innerText;
    document.querySelector('.container-title2').innerText = categoriaCard;
    document.querySelector('#card' + cardId + ' .infocard .category').innerText = categoriaContainerTitle2;

    // Intercambiar precio
    var precioContainerPrice = document.querySelector('.container-price span').innerText;
    var precioCard = document.querySelector('#card' + cardId + ' .infocard .precio').innerText;
    document.querySelector('.container-price span').innerText = precioCard;
    document.querySelector('#card' + cardId + ' .infocard .precio').innerText = precioContainerPrice;
}


// Obtén el div por su ID
var div =document.getElementById('card4');
// Agrega un evento de clic al div
div.addEventListener('click', function() {

seleccionado=4
intercambiarImagenes(seleccionado)


});



// Obtén el div por su ID
var div =document.getElementById('card3');
// Agrega un evento de clic al div
div.addEventListener('click', function() {

seleccionado=3
intercambiarImagenes(seleccionado)


});

// Obtén el div por su ID
var div =document.getElementById('card2');
// Agrega un evento de clic al div
div.addEventListener('click', function() {

seleccionado=2
intercambiarImagenes(seleccionado)


});


// Obtén el div por su ID
var div =document.getElementById('card1');
// Agrega un evento de clic al div
div.addEventListener('click', function() {

seleccionado=1
intercambiarImagenes(seleccionado)


});

const Windowbackground = document.getElementById("windwgetofertas");
const Windowbcontainer = document.getElementById("windowcontainer");
const openbutton = document.getElementById("getofertas");
const closebutton = document.getElementById("cerrar");

openbutton.addEventListener("click",()=>Windowbackground.style.display="flex")

const closeWindow=()=>{
  Windowbcontainer.classList.add('close')

  setTimeout(() => {
    Windowbcontainer.classList.remove('close')
    Windowbackground.style.display='none'
  }, 1000);
}

closebutton.addEventListener("click",()=>closeWindow())

window.addEventListener("click",e=> e.target == Windowbackground && closeWindow())



const Windowbackground2 = document.getElementById("windwgetcalif");
const Windowbcontainer2 = document.getElementById("windowcontainer");
const openbutton2 = document.getElementById("calificarproducto");
const closebutton2 = document.getElementById("cerrar");

openbutton2.addEventListener("click",()=>Windowbackground2.style.display="flex")

const closeWindow2=()=>{
  Windowbcontainer2.classList.add('close')

  setTimeout(() => {
    Windowbcontainer2.classList.remove('close')
    Windowbackground2.style.display='none'
  }, 1000);
}

closebutton2.addEventListener("click",()=>closeWindow2())

window.addEventListener("click",e=> e.target == Windowbackground2 && closeWindow2())




const Windowbackground3 = document.getElementById("windwgetinconsistencia");
const Windowbcontainer3 = document.getElementById("windowcontainer");
const openbutton3= document.getElementById("reportarinconsistencia");
const closebutton3 = document.getElementById("cerrar");

openbutton3.addEventListener("click",()=>Windowbackground3.style.display="flex")

const closeWindow3=()=>{
  Windowbcontainer3.classList.add('close')

  setTimeout(() => {
    Windowbcontainer3.classList.remove('close')
    Windowbackground3.style.display='none'
  }, 1000);
}

closebutton3.addEventListener("click",()=>closeWindow3())

window.addEventListener("click",e=> e.target == Windowbackground3 && closeWindow3())




const container  = document.querySelector('.container');
const emoji  = document.querySelector('.emoji');

const textarea  = document.querySelector('textarea');
const btn  = document.querySelector('btn');


emoji.addEventListener("click",(e)=>{
  if(e.target.className.includes('emoji')) return;

  textarea.classList.toggle('textarea--active'); 
  btn.classList.add('btn--active'); 


})


container.addEventListener("mouseleave",()=>{
  textarea.classList.remove('textarea--active');
  btn.classList.remove('btn--active'); 
})