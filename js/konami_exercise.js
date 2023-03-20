"use strict";

$('.page-wrapper').css({
    'background-color' : '#C72331',
});
$('h1').css('color', 'white')

let cheatCode = [38, 38, 40 ,40,37,39,37,39,66, 65, 13];
let emptyArray = [];
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
            'background-image' : 'url("../images/konami/yugioh_background_image.jpeg")',
            'background-repeat': 'no-repeat',
            'background-size' : 'cover',
        });
        $('h1').css({
            'color': 'red',
        });
        function afterText() {
            let photo1 =
                `<div class="image-wrapper inner-card">
                <img src="../images/konami/right_leg2.jpeg" alt="Exodia Right leg">
                </div>`
            let photo2 = `<div class="image-wrapper inner-card">
                <img src="../images/konami/right_arm2.jpeg" alt="Exodia Right arm">
            </div>`
            let photo3 = `<div class="image-wrapper inner-card">
                <img src="../images/konami/main_body.webp" alt="Exodia main body">
            </div>`

            let photo4 = `<div class="image-wrapper inner-card">
                <img src="../images/konami/left_arm2.webp" alt="Exodia Left arm">
            </div>`
            let photo5 = `<div class="image-wrapper inner-card">
                <img src="../images/konami/left_leg2.webp" alt="Exodia Left Leg">
            </div>`
            let photo6 = `<div class="image-wrapper clickable">
                <img src="../images/konami/back_of_card.jpeg" alt="Back of YUGIOH card">
            </div>`
            $(".images-wrapper").append(photo1, photo2, photo3, photo4, photo5, photo6);
            /// images have been added
            // get the x,y positions of each of the cards that will animate
            document.querySelectorAll('.image-wrapper').forEach(function(element, index) {
                element.setAttribute('endPosX', element.offsetLeft);
                element.setAttribute('width', element.offsetWidth);
            });
            let startCard = document.querySelector('.image-wrapper.clickable')
            startCard.style.width = startCard.offsetWidth + 'px';
            startCard.style.flex = 'none';
            // then add display none to all .inner-card elements
            document.querySelectorAll('.inner-card').forEach(function(element){
                element.style.display = 'none';
            });
            startCard.setAttribute('startLeft', startCard.offsetLeft);
            // then add position absolute
            document.querySelectorAll('.image-wrapper').forEach(function(element, index){
                element.style.position = 'absolute';
                element.style.display = 'block';
                element.style.width = element.getAttribute('width') + 'px';
                element.style.left = startCard.getAttribute('startLeft') + 'px';
            });
            startCard.addEventListener('click', function(){
                document.querySelectorAll('.image-wrapper').forEach(function(element){
                   element.style.left = element.getAttribute('endPosX') + 'px';
                })
            })

            // then
        }
        afterText()


        if (audioElement.paused) {
            audioElement.play();
            $(this).text("Pause Sound");
        } else {
            audioElement.pause();
            $(this).text("Play Sound");
        }
    }
});





//while loop goes under prevent default
// if (event.keyCode === cheatCode[emptyArray.length]) {
//     emptyArray.push(event.keyCode);
//     console.log(emptyArray);
//     if (emptyArray.length === cheatCode.length) {
//         let arrayIndex = 0;
//         let match = true;
//         while (arrayIndex < cheatCode.length && match) {
//             if (cheatCode[arrayIndex] !== emptyArray[arrayIndex]) {
//                 match = false;
//             }
//             arrayIndex++;
//         }
//         if (match) {
//             console.log('Cheat code entered correctly');
//         } else {
//             console.log('Cheat code entered wrong, reset!');
//             emptyArray = [];
//         }
//     }
// } else if (emptyArray.length > 0 && event.keyCode !== cheatCode[emptyArray.length - 1]) {
//     console.log('Wrong keys pressed, resetting!');
//     emptyArray = [];
// }