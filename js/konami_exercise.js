"use strict";

$('.page-wrapper').css({
    'background-color' : '#C72331',
});
$('h1').css('color', 'white')

let cheatCode = [38, 38, 40 ,40,37,39,37,39,66, 65, 13]
let arrayIndex = 0;
let audioElement = $("#my-audio")[0];

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
        $('.page-wrapper').css({
            'background-color' : 'white',
            'background-image' : 'url("../images/lost_art_cards.png")',
            'background-repeat': 'no-repeat',
            'background-size' : 'cover',
        });
        $('h1').css({
            'color': 'red',
        });
        if (audioElement.paused) {
            audioElement.play();
            $(this).text("Pause Sound");
        } else {
            audioElement.pause();
            $(this).text("Play Sound");
        }
    }
});

// var audioElement = $("#my-audio")[0];
// $("#play-pause-sound").click(function () {
//     if (audioElement.paused) {
//         audioElement.play();
//         $(this).text("Pause Sound");
//     } else {
//         audioElement.pause();
//         $(this).text("Play Sound");
//     }
// });
// 38, 38, 40 ,40,37,39,37,39,66, 65
