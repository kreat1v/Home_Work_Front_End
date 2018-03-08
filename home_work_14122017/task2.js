$('div').each(function () {
    $(this).css('background-color', colorRandom());
});

var count = 4;

$('.newSubmit').click(function() {
    var newDiv = $('<div style="background-color: ' + colorRandom() + '">' +
        '<button class="submit up" title="Переместиться перед предыдущим блоком">Вверх!</button>' +
        '<button class="submit down" title="Перемститься после следующего блока" disabled>Вниз!</button>' +
        '<button class="submit in" title="Переместиться внутрь предыдущего блока">Внутрь!</button>' +
        '<button class="submit out" title="Переместиться из родительского блока и стать после него" disabled>Наружу!</button>' +
        '<p>' + count + '</p>');
    $('main').append(newDiv);
    count++;
});

function colorRandom() {
    return '#' + String(Math.random()).substring(2, 8);
}

$('body').on('click', '.submit', function() {
    var parent = $(this).parent('div');

    if ($(this).hasClass('up')) {
        parent.prev('div').before(parent);
    }

    if ($(this).hasClass('down')) {
        parent.next('div').after(parent);
    }

    if ($(this).hasClass('in')) {
        parent.prev('div').append(parent);
    }

    if ($(this).hasClass('out')) {
        parent.parent('div').after(parent);
    }

    $('.up, .in').each(function () {
        var parent = $(this).parent('div');

        if (!parent.prev('div').get(0)) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });

    $('.down').each(function () {
        var parent = $(this).parent('div');

        if (!parent.next('div').get(0)) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });

    $('.out').each(function () {
        var parent = $(this).parent('div');

        if (!parent.parent('div').get(0)) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });
});