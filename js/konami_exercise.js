"use strict";

$('.page-wrapper').css('background-color','black');
$('h1').css('color', 'white')

let cheatCode = [38, 38, 40 ,40,37,39,37,39,66, 65, 13]
let arrayIndex = 0;

$(document).keyup(function(event){
    console.log(event.keyCode);
    event.preventDefault();
    if(event.keyCode === cheatCode[arrayIndex]) {
        if (event.keyCode !== cheatCode[arrayIndex]) {
            arrayIndex = 0;
            alert('Code entered incorrectly')
        }
        arrayIndex++;
    }
    if (arrayIndex === cheatCode.length) {
        alert('Konami code entered!');
        arrayIndex = 0;
        $('.page-wrapper').css('background-color','green')
    }
});
// 38, 38, 40 ,40,37,39,37,39,66, 65

