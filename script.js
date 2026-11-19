const display = document.querySelector("#display");
const result = document.querySelector("#result");
const btns = document.querySelectorAll("#btns button");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const plas = document.querySelector(".plas")
btns.forEach(function(func_btns){
    func_btns.addEventListener("click",function() {
        if(func_btns.textContent === "AC"){
            display.textContent = "";
        }
        else if (func_btns.textContent === "DEL"){
            display.textContent = display.textContent.slice(0,-1);
        }
        else if (func_btns.textContent === "="){
            try{display.textContent = eval(display.textContent);}
                catch{display.textContent = "Error";}
        }
        else{display.textContent += func_btns.textContent;}
        
});
});

