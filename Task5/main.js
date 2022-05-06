// Написать код приложения, интерфейс которого состоит из двух input и кнопки. 
//В input можно ввести любое число.
// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом 
// — выводить ниже текст «Номер страницы вне диапазона от 1 до 10».
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом 
// — выводить ниже текст «Лимит вне диапазона от 1 до 10».
// Если и первый, и второй input не в диапазонах или не являются числами 
// — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10».
// Если числа попадают в диапазон от 1 до 10 — сделать запрос 
// по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
// Пример: если пользователь ввёл 5 и 7, то запрос будет 
// вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки 
// из последнего успешно выполненного запроса (использовать localStorage).

//если знач 1 < 1 или знач 1 > 10  И знач 2 < 1 или знач 2 > 10

function myFunc() {
  
    const myVal = document.querySelectorAll('input');
    let val1 = myVal[0].value
    let val2 = myVal[1].value
    if (Number(val1) === NaN && Number(val2) === NaN
    || (val1 < 1 || val1 > 10) && (val2 < 1 || val2 > 10)) {
        document.getElementById("content").innerHTML = "«Номер страницы и лимит вне диапазона от 1 до 10»"
    }
    else if (Number(val1) === NaN || val1 < 1 || val1 > 10) {
        document.getElementById("content").innerHTML = "«Номер страницы вне диапазона от 1 до 10»"
    }
    else if (Number(val2) === NaN || val2 < 1 || val2 > 10) {
        document.getElementById("content").innerHTML = "«Лимит вне диапазона от 1 до 10»"
    }
    else {
        document.getElementById("content").innerHTML = ""
        sendRequest(val1, val2)
    }
}

function sendRequest(page, limit) {

    reqURL = `https://picsum.photos/v2/list?page=${page}}&limit=${limit}`
    
    fetch(reqURL)
    .then((response) => { return response.json(); })
    .then((data) => { 
        let imgArr = []
        let myDiv = document.getElementById("content"); 
        for (let img in data) {
            myDiv.insertAdjacentHTML('afterbegin', `<img src="${data[img].download_url}" width=300px height=300px> <br>`);
            imgArr.push(data[img].download_url); 
        }
        localStorage['myImgArr'] = JSON.stringify(imgArr);
    })
    .catch(() => { console.log('error') });
}

let imgArr = JSON.parse(localStorage.getItem('myImgArr'));
let myDiv = document.getElementById("content"); 
for (let img in imgArr) {
    myDiv.insertAdjacentHTML('afterbegin', `<img src="${imgArr[img]}" width=300px height=300px> <br>`);
}