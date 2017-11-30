// Задача 1 - Написать функцию-конструктор для объекта-бегуна. Написать статический метод для награждения бегуна. При каждом награждении описание медали добавляется в статическую переменную класса, а id медали сохраняется в массиве medals объекта. При награждении медалью, которой нет в статической переменной, она создается и ей назначается id.

    var Runner = function() {
        this.medals = [];
    };

    Runner.info = [];
    Runner.count = 1;
    Runner.giveMedal = function (runner, info) {
        var index = Runner.info.indexOf(info);
        if (index == -1) {
            runner.medals.push(Runner.count);
            Runner.info.push(info);
            Runner.count++;
        } else {
            runner.medals.push(index + 1);
        }
    };

// Задача 2 - Написать функцию-конструктор Car, создающую объект-автомобиль заданной марки с 4 колесами . Добавить фабричные методы для добавления трёх- и восьмиколесных автомобилей.

    var Car = function(brand) {
        this.brand = brand;
        this.wheels = 4;
    };

    Car.threeWheels = function (brand) {
        var car = new Car(brand);
        car.wheels = 3;
        return car;
    };

    Car.eightWheels = function (brand) {
        var car = new Car(brand);
        car.wheels = 8;
        return car;
    };

// Задача 3 - Написать функцию-конструктор, которая создает объект-бегуна с полями "имя" и "медали". Написать ещё одну функцию-конструктор, создающую объект-игрока в лотерею с полями "количество купленных билетов", "количество выигранных денег". Добавить игроку метод для выдачи ему денежного приза . Использовать данный метод для выдачи денежного приза бегуну, используя call.

    var NewRunner = function (name, medals) {
        this.name = name;
        this.medals = medals;
    };

    var LotteryPlayer = function (tickets) {
        this['number of tickets purchased'] = tickets;
        this['amount of money won'] = 0;
        this.GiveMoney = function (money) {
            this['amount of money won'] = money;
        }
    };

    var player = new LotteryPlayer(5);
    player.GiveMoney(500);
    console.log(player);

    var runner = new NewRunner('Kostya', 5);
    player.GiveMoney.call(runner, 1000);
    console.log(runner);

// Задача 4 - Создать псевдо-массив Arr длинной 5, заполенный произвольными целыми числами от 10 до 99, и методом sort, сортирующим Arr по возрастанию остатков от деления на 10 его элеметов. С помощью одалживания метода sort отсортировать элементы по убыванию. Одалживать метод под тем же именем и на время одалживания сохранить имеющийся метод. После сортировки вернуть sort сохраненный метод.

    var Arr = {
        0: 10,
        1: 22,
        2: 69,
        3: 41,
        4: 87,
        length: 5,
        sort: function () {
           return [].sort.call(this, function (a, b) {
               return (a%10) - (b%10);
           })
        }
    };

    Arr.sort();
    console.log(Arr);

    var saveSort = Arr.sort;
    Arr.sort = [].sort;
    Arr.sort(function (a, b) {
        return b - a;
    });
    console.log(Arr);

    Arr.sort = saveSort;
    console.log(Arr);

// Задача 5 - Добавить декоратор для метода Math.max, который, в случае, если какие-то из элементов строки, заменял их на длину этих строк; если какие-то из элементов объекты - возвращает первое найденное числовое свойство или 0.

    var decorator = function (f) {
        return function () {
            var newArguments = [];

            for (var value in arguments) {
                if (typeof arguments[value] == 'string') {
                    newArguments.push(arguments[value].length);
                } else if (typeof arguments[value] == 'object') {
                    for (var key in arguments[value]) {
                        var chek = 0;
                        if (typeof arguments[value][key] == 'number') {
                            newArguments.push(arguments[value][key]);
                            chek = 1;
                            break;
                        }
                    }
                    if (chek == 0) {
                        newArguments.push(chek);
                    }
                } else {
                    newArguments.push(arguments[value]);
                }
            }

            var result = f.apply(this, newArguments);

            return result;
        }
    };

    Math.max = decorator(Math.max);

    Math.max(
        1,
        2,
        'abc',
        {a: 2, b: 4}
    );
