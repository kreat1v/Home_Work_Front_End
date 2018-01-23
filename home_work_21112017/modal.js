var idCounter = 0;
var zIndex = 1;
var coordX = 10;
var coordY = 10;
var standartX = 250;

var createWindow = function (key) {
    if (document.body.childElementCount == 1) {
        idCounter = 0;
        zIndex = 1;
        coordX = 10;
        coordY = 10;
        standartX = 250;
    }

    if (idCounter % 10 == 0 && idCounter != 0) {
        coordX = standartX;
        coordY = 10;
        standartX += 250;
    }

    var body = document.body;
    var newWindow = document.createElement('div');
    var windowId = "window" + idCounter;
    newWindow.className = "window";
    newWindow.setAttribute('id', windowId);
    newWindow.style.left = coordX + 'px';
    newWindow.style.top = coordY + 'px';
    newWindow.style.zIndex = zIndex;
    newWindow.appendChild(createPart('caption', windowId, ''));
    newWindow.appendChild(createPart('x', windowId, 'X'));
    newWindow.appendChild(createPart('body', windowId, 'You clicked: ' + key));

    body.appendChild(newWindow);

    idCounter++;
    zIndex++;
    coordX += 50;
    coordY += 50;
};

function createPart(className, windowId, text) {
    var part = document.createElement('div');
    part.className = className;
    part.innerText = text;
    return part;
}

function firstPlan(id) {
    document.getElementById(id).style.zIndex = zIndex;
    zIndex++;
}

function dragAndDrop(id, MouseEvent) {
    var moveWindow = document.getElementById(id);
    var coords = getCoord(moveWindow);
    var shiftX = MouseEvent.pageX - coords.left;
    var shiftY = MouseEvent.pageY - coords.top;

    moveAt(MouseEvent);

    function moveAt(MouseEvent) {
        moveWindow.style.left = MouseEvent.pageX - shiftX + 'px';
        moveWindow.style.top = MouseEvent.pageY - shiftY + 'px';
    }

    document.onmousemove = function(MouseEvent) {
        moveAt(MouseEvent);
        moveWindow.style.cursor = "move";
    };

    moveWindow.onmouseup = function() {
        document.onmousemove = null;
        moveWindow.onmouseup = null;
        moveWindow.style.cursor = "";
    }
}

function getCoord(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function del(id) {
    document.body.removeChild(document.getElementById(id));
}

document.addEventListener('keypress', function(event){
    createWindow(event.key);
});

document.addEventListener('mousedown', function (MouseEvent) {
    var id = MouseEvent.target.offsetParent.id;
    firstPlan(id);

    if (MouseEvent.target.className == 'caption') {
        dragAndDrop(id, MouseEvent);
    } else if (MouseEvent.target.className == 'x') {
        del(id);
    }
});