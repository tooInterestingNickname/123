function guess() {
    var guessNumber = 5;
    var ourNumber = prompt("Введите число:");

    if (ourNumber > guessNumber) {
        alert("Число должно быть меньше");
        return guess();
    } else if (ourNumber == guessNumber) {
        alert("Вы угадали");
    } else {
        alert("Число должно быть больше")
        return guess();
    }
}

function reminder() {
    alert("Ты здесь слишком долго!");
    //window.close();
}

//setTimeout(reminder, 3000)

function valideForm() {
    alert("Проверка формы")
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    console.log(name);
    console.log(password);

    var reg_name = /^[а-яa-zё]+$/i;
    var reg_password = /^[a-z0-9]{5,100}$/i;

    if (reg_name.test(name) == false) {
        alert("Ошибка в поле ФИО")
    }
    if (reg_password.test(password) == false) {
        alert("Ошибка в поле Пароль")
    }

}
document.querySelector(".button").addEventListener("click", valideForm);

function valideForm {
    var otzivya = /^[а-яa-zё]+$/i;
    if (otzivya.test(otzivya) == true) {
        alert("На это времени не хватило")
    }
}
