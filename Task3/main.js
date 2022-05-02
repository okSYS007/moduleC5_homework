// Напишите код приложения, интерфейс которого представляет собой 
//input и кнопку. В input можно ввести любое число.
//При клике на кнопку должно происходить следующее:

// Если число не попадает в диапазон от 1 до 10 — 
//выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — 
//сделать запрос c помощью XHR по URL 
// https://picsum.photos/v2/list?limit=10, 
//где get-параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет 
//вида https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.

// Подсказка

// Получение данных из input:

// const value = document.querySelector('input').value;
// При возникновении проблем по ходу решения вы всегда 
//можете обратиться к ментору в Slack. 
function myFunc() {
    var inptNumber = document.querySelector('input').value
    if (inptNumber < 1 || inptNumber > 10) {
        document.getElementById("content").innerHTML = "«число вне диапазона от 1 до 10»"
    }
    else {
        document.getElementById("content").innerHTML = ""
        sendRequest(inptNumber)
    }
}

function sendRequest(inptNumber) {

    reqURL = `https://picsum.photos/v2/list?limit=${inptNumber}`

    // 1. Создаём новый XMLHttpRequest-объект
    let xhr = new XMLHttpRequest();

    // 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr.open('GET', reqURL );

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function() {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
        let allUrls = JSON.parse(xhr.response)   
        let myDiv = document.getElementById("content"); 
        for (let img = 0; img < allUrls.length; img++) {
            myDiv.insertAdjacentHTML('afterbegin', `<img src="${allUrls[img].download_url}" width=170px height=100px> <br>`);
        } 
    }
    };

    xhr.onprogress = function(event) {  
    };

    xhr.onerror = function() {
    alert("Запрос не удался");
    };
}