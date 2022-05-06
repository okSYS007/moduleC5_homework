// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку. 
//В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число 
//— выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;

// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch 
//по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

function myFunc() {
    //const value = document.querySelector('input').value; ?
    const myVal = document.querySelectorAll('input');
    if (Number(myVal[0].value) === NaN || Number(myVal[1].value) === NaN 
    || myVal[0].value < 100 || myVal[0].value > 300
    || myVal[1].value < 100 || myVal[1].value > 300) {
        document.getElementById("content").innerHTML = "«одно из чисел вне диапазона от 100 до 300»"
    }
    else {
        document.getElementById("content").innerHTML = ""
        sendRequest(myVal[0].value, myVal[1].value)
    }
}

function sendRequest(mWidth, mHeight) {

    reqURL = `https://picsum.photos/${mWidth}/${mHeight}`

    fetch(reqURL)
    .then((response) => { return response.url; })
    .then((data) => { 
        let myDiv = document.getElementById("content"); 
        myDiv.insertAdjacentHTML('afterbegin', `<img src="${data}"<br>`);
    })
    .catch(() => { console.log('error') });
}