//jqeury selector
let $jQueryParent = $("#paragraphParent");

//vanilla JS equivalent
let vanillaParent = document.querySelector('#paragraphParent');

//changing one css property
$jQueryParent.css('color', 'red');

//or change a bunch of them!
// $jQueryParent.css({
//     'fontWeight': '600',
//     'textTransform' : 'uppercase',
//     'fontStyle' : 'italic'
// });

//add classes with jQuery
$jQueryParent.addClass('active');

//getting more than one element, you can run the same methods
let $paragraphs = $('p');

$paragraphs.css('color', 'blue')

//vanilla javascript
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(element){
    element.style.color='blue'
    element.setAttribute('data-name' ,'anything')
    let paragraphValue = element.getAttribute('data-name')
});

//jQuery
$paragraphs.attr('data-name2','really anything');
let newParaValue = $paragraphs.attr('data-name2');

$paragraphs.text('This is the new text inside this element');
let paraText = $paragraphs.text();
console.log(paraText);

//adding a class to elements in jquery
$paragraphs.addClass('highlight');

//removing a class from elements in jquery
$paragraphs.removeClass('highlight');

//toggle a class
$paragraphs.on('click',function(){
   // $(this).toggleClass('highlight')
    $(this).fadeOut(1000, function(){
       $(this).fadeIn(1000);
    });
    $(this).animate({
       opacity: 0.25
    }, 3000, function(){
        //animation complete
    });
});

