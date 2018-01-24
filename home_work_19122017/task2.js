$('.container').hover(function () {
    $('.red').css('border', '1px solid #000000');
    $('.red').animate({width:'500px', height: '500px'}, 400, function () {
        $('.green').css('border', '1px solid #000000');
        $('.green').animate({width:'400px', height: '400px', left: '-=400', top: '-=400'}, 400, function () {
            $('.blue').css('border', '1px solid #000000');
            $('.blue').animate({width:'300px', height: '300px', left: '-=300'}, 400, function () {
                $('.yellow').css('border', '1px solid #000000');
                $('.yellow').animate({width:'200px', height: '200px', top: '-=200'}, 400);
                $('.text2').animate({fontSize:'20px', marginBottom: '10px'}, 400, 'linear');
                $('.text2').animate({marginBottom: '0'}, 100);
            })
        });
    });
}, function () {
    $('div, .text2').removeAttr('style').stop();
});