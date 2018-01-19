$('body').on('click', '.green', function() {
    var width = $(this).width() / 2;

    var firstDiv = $(this).width(width);
    var secondDiv = $(firstDiv).clone();

    if (random() <= 25) {
        $(secondDiv).removeClass('green').addClass('red');
    }

    $(firstDiv).after(secondDiv);
});

function random() {
    return Math.random() * 100;
}