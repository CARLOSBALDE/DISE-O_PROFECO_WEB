




const Windowbackground = document.getElementById("windwgetcalif");
const Windowbcontainer = document.getElementById("windowcontainer");
const openbutton = document.getElementById("btn2");
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

