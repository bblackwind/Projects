let allfilters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");
let modalVisible = false;
let body = document.querySelector("body");
let addBtn = document.querySelector(".add");
let colors = {
    pink:"#d595aa",
    blue:"#5ecdde",
    green:"#91e6c7",
    black:"black"
}

addBtn.addEventListener("click",function(){
    if(modalVisible){
        return;
    }

    let modal = document.createElement("div");
    modal.classList.add("modal-container");

    modal.innerHTML = ` 
        <div class="writing-area" contenteditable=""></div>
            <div class="filter-area">
                <div class="modal-filter pink"></div>
                <div class="modal-filter blue"></div>
                <div class="modal-filter green"></div>
                <div class="modal-filter black"></div>
            </div>`;
    body.appendChild(modal);
    modalVisible = true;

});





for(let i=0 ; i<allfilters.length ; i++){
    allfilters[i].addEventListener("click",function(e){
        let color = e.currentTarget.classList[0].split("-")[0];
        grid.style.background=colors[color]
    })
}