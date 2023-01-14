let start = document.getElementById("start");
let end = document.getElementById("end");
let input = document.getElementById("input");
let check = document.getElementById("check");
let reset = document.getElementById("reset");
let image = document.getElementById("image");
let message = document.getElementById("message");
let chance = document.getElementById("chance");

let exactNumber = Math.round(Math.random() * 100) + 1

console.log(exactNumber)

const checkNumber = () => {
    if(input.value < exactNumber) {
        chance.innerHTML--;
        start.innerHTML = input.value;
        input.value = ""
        if(chance.innerHTML == 0){
            message.innerHTML = "You Lost";
            message.style.color = "red";
            image.setAttribute("src", "./img/üzüntü.png");
            check.setAttribute("disabled", "")
        }
    }else if (input.value > exactNumber) {
        chance.innerHTML--;
        end.innerHTML = input.value;
        input.value = "";
        if(chance.innerHTML == 0) {
            message.innerHTML = "You Lost";
            message.style.color = "red";
            image.setAttribute("src", "./img/üzüntü.png");
            check.setAttribute("disabled", "");
        }
    }else if(input.value == exactNumber) {
        message.innerHTML = "You win";
        message.style.color = "green"
        image.setAttribute("src", "./img/sevinç.png");
        check.setAttribute("disabled", "")
        
    }
}


const resetFunction = () => {
    // exactNumber =  Math.round(Math.random() * 100) + 1
    // start.innerHTML = "1";
    // end.innerHTML = "100";
    // image.setAttribute("src", "./img/favpng_homer-simpson-bart-simpson-drawing-pub-quiz-thought.png");
    // chance.innerHTML = "10";
    // message.innerHTML = "Write The Number";
    // message.style.color = "black"
    // input.value = ""
    window.location.reload(false)
}

check.addEventListener("click", checkNumber);
reset.addEventListener("click", resetFunction)


