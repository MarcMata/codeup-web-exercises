let $jQuerydd = $('dd');
let $jQuerydt = $('dt');
let $btn = $('button');


$jQuerydd.addClass('invisible')
// $btn.on('click',function(){
//     ($jQuerydd).toggleClass('invisible')
//     });
//adds class of highlight

$jQuerydt.click(function(){
    $(this).toggleClass('highlight')
});

$jQuerydt.click(function(){
    $(this).next().fadeToggle(1500);
});