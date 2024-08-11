var value = document.getElementById("result");
    
function getNumber(element) {
    let elementValue = element.innerText;
    value.value += elementValue;
}

function clearValue() {
    value.value = "";
}

function getResult() {
    try {
        value.value = eval(value.value);
    } catch (e) {
        value.value = "Error";
    }
}

function del() {
    value.value = value.value.substr(0, value.value.length - 1);
}



     /*extra work */
// var value = document.getElementById("result")
// function getNumber(element) {
//     let elementValue = element.innerText
//     value.value += elementValue
// }
// function clearValue(){
//     value.value = " "
// }
// function getResult() {
//     value.value = eval(value.value)
// }

// function del() {
//     let data = document.getElementById("result");
//     data.value = data.value.substr(0, data.value.length - 1);
// }
