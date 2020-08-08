let input = document.querySelector("#input");
let select = document.querySelector("#select");
let convertBtn = document.querySelector(".convert");
let result = document.querySelector(".result");
let inputValue = 0;
let selectValue = 0;
let answer;

convertBtn.addEventListener("click", () => {
    inputValue = Number(input.value);
    selectValue = Number(select.value);
    
    if (selectValue === 1) {
        answer = inputValue * 1000;
    }
    else if (selectValue === 2) {
        answer = (inputValue / 1000).toFixed(2);
    }
    else if (selectValue === 3) {
        answer = (inputValue * 453.59237).toFixed(2);
    }else {
        answer = (inputValue / 2.20462262).toFixed(3);
        
    }

    result.innerHTML = answer;
});