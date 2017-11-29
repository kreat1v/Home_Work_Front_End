// Задача №2 - Написать скрипт, подключаемый к странице. При переходе на такую страницу с параметрами адресной строки, например, с page.html?id=2&color=fdd на странице скриптом находился блок с классом "highlight" и с data-id равным 2, и фоновый цвет этого блока становился "#FDD". В качестве тестовой страницы можно использовать https://br3t.github.io/fstk/hometask/task_14/example.html

var highlight = function(){
    var search = location.search;
    var arr = search.split('&');
    var id = arr[0].split('=')[1];
    var color = arr[1].split('=')[1];

    var highlightArr = document.querySelectorAll('[class=highlight]');

    for (var i = 0; i < highlightArr.length; i++) {
        if (highlightArr[i].dataset.id == 2) {
            highlightArr[i].style.backgroundColor = '#' + color;
        }
    }
};

highlight();