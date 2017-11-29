// Задача 1 - Написать скрипт, который выводит в консоль дерево DOM тела (body) текущей страницы, задавая отступы с учетом вложенности элементов. В качестве тестовой страницы можно использовать https://br3t.github.io/fstk/hometask/task_14/example.html

var tree = function(name, indent) {
    if (name.nodeType == 3 || name.nodeType == 8){
        console.log(indent + name.nodeName + ': ' + name.nodeValue);
    } else {
        console.log(indent + name.nodeName);
    }

    if (name.childNodes.length > 0){
        for(var i = 0; i < name.childNodes.length; i++) {
            tree(name.childNodes[i],'-' + indent);
        }
    }
};

tree(document.body, '');