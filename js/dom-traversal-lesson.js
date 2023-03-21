$(".box").on('click', function(){
    //hide the boxes in the other container
    $(this)
        .parents('.container')
        .siblings('.container')
        .find(".box")
        .fadeToggle();
});

//crawl up the DOM
$('#box1').parents('.container');

//crawl down the dom
$('#box1').find();
$('#box1').children();


//crawl SIDEWAYS on the DOM
$('#box1').siblings();

//utility methods
$('#box1').closest();

// $(".box").first().css('background-color', 'yellow');

$('.column:nth-child(3) .box').last().css('background-color', 'yellow');

$('.box').each(function(){

});