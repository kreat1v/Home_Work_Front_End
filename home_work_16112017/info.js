// Задача 3 - Написать скрипт, подключаемый к странице. При переходе на такую страницу в body будут последовательно добавляться и отображаться сообщения из notifications.js. Цвет фона сообщения зависит от его типа. Сначала появляется первое сообщение, отображается в течение 3 секунд, затем исчезает (удаляется из DOM) и за ним появляется новое и т.д. В качестве тестовой страницы можно использовать https://br3t.github.io/fstk/hometask/task_14/example.html

var notifications = [
    {
        type: "error",
        message: "TypeError: funckciya is not a function"
    },
    {
        type: "warn",
        message: "Don`t forget turn off the lights"
    },
    {
        type: "info",
        message: "The weather is good"
    },
    {
        type: "warn",
        message: "Attention! This is the very last notification!"
    }
];

var colors = {
    error: '#FF0000',
    warn: '#FFFF00',
    info: '#008000'
};

var messages = function (i) {
    var body = document.body;
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = colors[notifications[i].type];
    newDiv.innerText = notifications[i].message;
    body.appendChild(newDiv);
};

var removeMessages = function () {
    document.body.removeChild(document.body.lastChild);
};

var showAndRemove = function (index, timeout) {
    setTimeout(function () {
        removeMessages();
        if (index < notifications.length) {
            messages(index);
        }
    }, timeout);
};

for (var i = 0; i < notifications.length + 1; i++) {
    showAndRemove(i, 3000 * (i + 1));
}