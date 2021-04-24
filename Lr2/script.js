//#1
let time = prompt("Какое сейчас время?");

if(time > 17)
{
    alert("Добрый вечер");
}
else
{
    alert("Добрый день");
}

//#2
let username = prompt("Как вас зовут?");

if(username == "John")
{
    alert("Привет Jonh");
}
else
{
    alert("Я вас не знаю");
}

//#3
username = prompt("Как вас зовут?");
let password = prompt("Введите ваш пароль:");

if(username == "ivan" && password == 333 ||
 username == "ssss" && password == 666 || 
 username == "gibs" && password == 0000)
{
    alert("Доброе пожаловать");
}
else
{
    alert("Пользователь не найден");
}

//#4
let number1 = prompt("Введите первое число:");
let number2 = prompt("Введите второе число:");
let number3 = prompt("Введите третье число:");

if(number1 >= number2 && number1 >= number3)
{
    alert("Число " + number1 + " максимальное");
}
else if(number2 >= number3)
{
    alert("Число " + number2 + " максимальное");
}
else
{
    alert("Число " + number3 + " максимальное");
}





