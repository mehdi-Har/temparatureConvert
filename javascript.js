let textBox = document.getElementById("temp");
let result = document.getElementById("result");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let temp;
function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = 9/5*temp +32;
        result.textContent = `${temp}`;
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = 5/9*(temp - 32);
        result.textContent = `${temp}`;
    }
    else{
        result.textContent = "select an option";
    }
}
