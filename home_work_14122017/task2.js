$('div').each(function () {
    $(this).css('background-color', colorRandom());
});

var count = 4;

$('.newSubmit').click(function() {
    var newDiv = $('<div>');
    $(newDiv).css('background-color', colorRandom());
    $(newDiv).append('<button class="submit up" title="Переместиться перед предыдущим блоком">Вверх!</button>');
    $(newDiv).append('<button class="submit down" title="Перемститься после следующего блока" disabled>Вниз!</button>');
    $(newDiv).append('<button class="submit in" title="Переместиться внутрь предыдущего блока">Внутрь!</button>');
    $(newDiv).append('<button class="submit out" title="Переместиться из родительского блока и стать после него" disabled>Наружу!</button>');
    $(newDiv).append('<p>' + count + '</p>');
    $('main').append(newDiv);
    count++;
});

function colorRandom() {
    return '#' + String(Math.random()).substring(2, 8);
}

$('body').on('click', '.submit', function() {
    var parent = $(this).parent()[0];

    if ($(this).hasClass('up')) {
        $($(parent).prev('div')[0]).before(parent);
    }

    if ($(this).hasClass('down')) {
        $($(parent).next('div')[0]).after(parent);
    }

    if ($(this).hasClass('in')) {
        $($(parent).prev('div')[0]).append(parent);
    }

    if ($(this).hasClass('out')) {
        $($(parent).parent()[0]).after(parent);
    }

    $('.up, .in').each(function () {
        var parent = $(this).parent()[0];

        if (!$(parent).prev('div')[0]) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });

    $('.down').each(function () {
        var parent = $(this).parent()[0];

        if (!$(parent).next('div')[0]) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });

    $('.out').each(function () {
        var parent = $(this).parent()[0];

        if (!$(parent).parent('div')[0]) {
            $(this).prop("disabled", true);
        } else {
            $(this).prop("disabled", false);
        }
    });
});