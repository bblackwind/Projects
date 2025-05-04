let allfilters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");

let colors = {
    pink:"#d595aa",
    blue:"#5ecdde",
    green:"#91e6c7",
    black:"black"
}




for(let i=0 ; i<allfilters.length ; i++){
    allfilters[i].addEventListener("click",function(e){
        let color = e.currentTarget.classList[0].split("-")[0];
        grid.style.background=colors[color]
    })
}