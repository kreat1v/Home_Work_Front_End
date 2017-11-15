// Задача 1 - имеется код. Почему при вызове с другим параметром значение имени пользователя не изменилось? Как исправить код?
// - В аргументы функции мы передаем значение, и после чего в самой функции мы это значение и используем.

    var user = {};
    var newFirstName = "boris";
    var newFirstName2 = "basil";

    function setNewName(newName) {
        var capitalizedName = newName[0].toUpperCase() + newName.substr(1);
        var prettyfiedName = "-=" + capitalizedName + "=-";
        this.name = prettyfiedName;
    }

    user.setNewName = setNewName;
    user.setNewName(newFirstName); // user.name = "-=Boris=-", OK
    user.setNewName(newFirstName2); // user.name = "-=Basil=-", OK

// Задача 2 - Написать функцию-конструктор, все созданные объекты которой равны между собой.

    var Clone = function() {
        return this.constructor;
    };
    var clone1 = new Clone;
    var clone2 = new Clone;
    clone1 == clone2; // true

// Задача 3 - Спам 2.0. Написать функцию-конструктор, которая принимает один параметр - время в миллисекундах, и записывает в свойства возвращаемого объекта-спамера. У объекта также есть метод startSpam, которому передается строка для спама. После вызова метода спамер с указанным временным промежутком спамит в консоль.

    var Spammer = function (msc) {

        this.msc = msc;

        this.startSpam = function (str) {
            setInterval(console.log, msc, str);
        }
    };

    var spammer1 = new Spammer(1000);
    spammer1.startSpam('first');
    var spammer2 = new Spammer(2000);
    spammer2.startSpam('second');

// Задача 4 - Написать функцию-конструктор, которая принимает три параметра: тип домашнего животного, кличку (строки) и год рождения (целое). У созданного объекта: нельзя изменить тип и год рождения; год рождения не отображается при переборе через for-in; свойство info отображает строку вида "ТИП КЛИЧКА: ВОЗРАСТ лет".

    var Pet = function(type, name, birthYear) {

        this.name = name;
        Object.defineProperty(this, 'type', {
            value: type,
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'birthYear', {
            value: birthYear,
            writable: false,
            enumerable: false
        });

        var age = new Date().getFullYear() - this.birthYear;

        Object.defineProperty(this, "info", {
            get: function() {
                return this.type + ' ' + this.name + ': ' + age + ' лет';
            }
        });
    };

    var myPet = new Pet("cat", "Barsik", 2015);
    for(var key in myPet) { console.log(key); } // type, name
    myPet.type = "dog";
    myPet.name = "Murzik";
    myPet.birthYear = 1700;
    console.log(myPet.info); // "cat Murzik: 2 years"

// Задача 5 - Написать функцию-конструктор, которая принимает параметр год и записывает его в свойство объекта. У созданного объекта: при работе как со строкой выводится дополнительная информация, високосный год или нет; при работе как с числом выводится только значение года.

    var Years = function(year) {
        this.year = year;

        this.toString = function () {
            if (new Date(year, 1, 29).getMonth() == 1) {
                return this.year + ', високосный';
            } else {
                return this.year + ', не високосный';
            }
        };

        this.valueOf = function () {
            return this.year;
        }
    };

    var year = new Years(2017);
    alert(year); // "2017, не високосный"
    // 2017 - year // 0