let $jQuerydd = $('dd');
let $jQuerydt = $('dt');
// let $btn = $('button');

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

$(".traversing-button").on('click',  function(){
    $('ul').each(function(){
        $(this).children().last().toggleClass('highlight')
    })
});

$('h3').on('click', function(){
        $(this).next('ul').css('font-weight', 'bold')
});

$('li').on('click', function(){
   $(this).parents('ul').children().first().css('color','blue')
});


// The left frame swaps to the right and takes the image from the frame in the center.
// The center frame swaps randomly to either the left or right.
// The right frame swaps to the left and takes the image from the frame in the center.

$('.swap-btn').on('click', function(){
    let btn = $(this).attr('id');
    let $commonParent = $(this).parents('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function(){
        let srcValue = $(this).attr('src');
        imgSources.push(srcValue);
    });
    console.log($images[0]);
    console.log('Image Source Array => ', imgSources);
    switch(btn) {
        case "leftBtn":
            // do the logic for left btn
            $($images[0]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[0]);
            console.log('clicked leftBtn')
            break;
        case "middleBtn":
            // do the logic for middle btn
            let randomNum = randomNumber(1, 2);
            if (randomNum === 1) {
                //go left
                $($images[1]).attr('src', imgSources[0]);
                $($images[0]).attr('src', imgSources[1]);
            } else {
                //go right
                $($images[1]).attr('src', imgSources[2]);
                $($images[2]).attr('src', imgSources[1]);
            }
            console.log('clicked middleBtn')
            break;
        case "rightBtn":
            // do the logic for right btn
            console.log('clicked rightBtn')
            $($images[2]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[2]);
            break;
    }
});


// let $firstFrame = $('.frame1').find('img').attr('src');
// let $secondFrame = $('.frame2').find('img').attr('src');
// let $thirdFrame = $('.frame3').find('img').attr('src');





