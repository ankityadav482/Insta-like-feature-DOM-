var cont = document.querySelector("#container")
var dil = document.querySelector("i")

cont.addEventListener("dblclick",function(){
    dil.style.transform='translate(-50%,-50%) scale(1.5)'
    dil.style.opacity=1

    setTimeout(function(){
        dil.style.opacity=0
   },1000)

    setTimeout(function(){
         dil.style.transform='translate(-50%,-50%) scale(0)'
    },3000)
})