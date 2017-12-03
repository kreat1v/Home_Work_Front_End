// Задача 3 - Написать скрипт, подключаемый к странице. При переходе на такую страницу в body будут последовательно добавляться и отображаться сообщения из notifications.js. Цвет фона сообщения зависит от его типа. Сначала появляется первое сообщение, отображается в течение 3 секунд, затем исчезает (удаляется из DOM) и за ним появляется новое и т.д. В качестве тестовой страницы можно использовать https://br3t.github.io/fstk/hometask/task_14/example.html

var newMessage = {
    notifications: [
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
    ],

    colors: {
        error: '#FF0000',
        warn: '#FFFF00',
        info: '#008000'
    },

    divMessage: null,

    messages: function (i) {
        var body = document.body;
        var newDiv = document.createElement("div");
        newDiv.style.backgroundColor = this.colors[this.notifications[i].type];
        newDiv.innerText = this.notifications[i].message;
        body.appendChild(newDiv);
        this.divMessage = newDiv;
    },

    removeMessages: function () {
        document.body.removeChild(newMessage.divMessage);
    },

    showAndRemove: function (index, timeout) {
        setTimeout(function () {
            if (newMessage.divMessage) {
                newMessage.removeMessages();
            }
            if (index < newMessage.notifications.length) {
                newMessage.messages(index);
            }
        }, timeout);
    },

    start: function () {
        for (var i = 0; i < this.notifications.length + 1; i++) {
            this.showAndRemove(i, 3000 * (i + 1));
        }
    }
};

newMessage.start();