// Задача 1 - Объединение объектов. Написать функцию, которая на вход будет принимать два объекта и будет возвращать результирующий объект со всеми свойствами входящих объектов. Если есть одинаковые свойства в обоих объектах, то берется значение из второго. Значения всех свойств - примитивы.
function objectMerge (a, b) {
    var newObject = {};
    for (var property1 in a) {
        for (var property2 in b) {
            if (a[property1] == b[property2]) {
                newObject[property2] = b[property2];
            } else {
                newObject[property1] = a[property1];
                newObject[property2] = b[property2];
            }
        }
    }
    for (property1 in a) {
        if (property1 in newObject) {
            return newObject;
        } else {
            newObject[property1] = a[property1];
        }
    }
    for (property2 in b) {
        if (property2 in newObject) {
            return newObject;
        } else {
            newObject[property2] = b[property2];
        }
    }
    return newObject;
}

// Задача 2 - Самые старые. Имеется информация о спортсменах в виде массива объектов с полями "имя" и "возраст" ([{name:"Yan", age: 33}, ...]). Написать функцию, которая вернет массив из имен N самых старых спортсменов.
var sportsmen = [{name:"Yan", age: 33}, {name:"Sara", age: 27}, {name:"Bob", age: 46}];
function topOldest(menlist, limit) {
    function compareAge(personA, personB) {
        return personB.age - personA.age;
    }
    menlist.sort(compareAge);
    var oldestPeople = [];
    for (var i = 0; i < limit; i++) {
        oldestPeople.push(menlist[i].name);
    }
    return oldestPeople;
}
console.log(topOldest(sportsmen, 3));

// Задача 3 - Награждение. Есть данные о спортсменах, информация о каждом спортсмене хранится в своей переменной типа "объект". Необходимо написать функцию, которая будет принимать 3 параметра: спортсмена, тип медали (строка) и количество медалей (целое положительное число). При запуске этой функции у спорстмена должно увеличиться количество медалей указанного типа на заданное число. Информация о типе и количестве медалей хранится в свойствах внутреннего объекта medals объекта спортсмена. Следует учесть, что в у спортсмена до запуска функции может не быть медалей заданного типа или не быть медалей вообще.
function give(runner, typeMedals, place) {
    if ("medals" in runner){
        if (typeMedals in runner.medals) {
            runner.medals[typeMedals] += place;
        } else {
            runner.medals[typeMedals] = place;
        }
    } else {
        runner.medals = {};
        runner.medals[typeMedals] = place;
    }
}

// Задача 4 - Спамер консоли. Создать объект spammer с двумя методами startSpam и stopSpam. При передаче методу startSpam некой строки он каждую секунду выводит в консоль (console.log) эту строку. При повторном запуске с другой строкой первая строка продолжает выводиться, а новая строка выводится отдельным console.log. Запуск метода stopSpam с параметром в виде строки находит эту строку среди выводимых в консоль и останавливает "спам" этой строки.
var spammer = {
    arr: [],
    spam: {},
    key: 0,

    startSpam: function (string)
    {
        this.arr.push(string);
        this.spam['key' + this.key] = setInterval(console.log, 1000, string);
        this.key++;
    },

    stopSpam: function (string)
    {
        var index = this.arr.indexOf(string);
        clearInterval(this.spam['key' + index]);
        this.arr[index] = null;
        delete this.spam['i' + index];
    }
};

// Задача 5 - Улучшатор текста. Написать функцию, которая на вход будет принимать тектовую строку и будет возвращать "улучшенный" текст: буквы должны комбинировать регистр в произвольном порядке, а после каждого слова должен быть один из смайлов: :) ;) (: :p :D :-*. Строка на входе содержит только буквы русского алфавита и некоторые знаки препинания (. , ? ! ;).
var str = "Всем привет, как дела?";

function beautify(str) {
    var arrWord = str.split(' ');
    var newStr = null;

    var smile = [':)', ';)', '(:', ':p', ':D', ':-*'];
    var rand = function (value) {
        return Math.floor(Math.random() * value);
    };

    arrWord.forEach(function (t) {
        var arrLetter = t.split('');

        for (var i = 0; i < arrLetter.length; i++) {

            if (rand(2) == 0) {
                arrLetter[i] = arrLetter[i].toUpperCase();
            } else {
                arrLetter[i] = arrLetter[i].toLocaleLowerCase();
            }
        }

        if (arrLetter[arrLetter.length - 1] == arrLetter[arrLetter.length - 1].match(/[. , ? ! ;]/g)) {
            arrLetter.splice(-1, 0, smile[rand(smile.length)]);
        } else {
            arrLetter.push(smile[rand(smile.length)]);
        }

        if (newStr != null) {
            newStr += ' ' + arrLetter.join('')
        } else {
            newStr = arrLetter.join('');
        }
    });

    return newStr;
}

// Задача 6 - Только брутфорс. Имеется зашифрованный пароль (например, "YTFiMmMz") и извесна функция шифрования btoa. Извесно, что пароль имеет длину от 1 до 6 символов и состоит из цифр и букв a, b, c, не начинается с нуля. Написать функцию, которая с помощью последовательного перебора найдет пароль. Функцию btoa считаем "необратимой", т.е. использовать atob нельзя.
var password = "YTFiMmMz";

function bruteForce(psswrd) {
    var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c'];
    var pass = null;
    var a, b, c, d, e, f;

    var bust = function (arr) {
        for (var i, j = 0; i < 14, j < 14; i++) {
            a = arr[i];

            if (j == 13) {
                j = 0;
            }
        }
    };

    var fullBust = function () {
        for (var i = 0, j = 0; i < 14, j < 14; j++) {
            if (pass == null) {
                bust(arr);
            } else {

            }
        }
    };

    var encodedVariant = btoa(variant);
    // ...
}
console.log(bruteForce(password));