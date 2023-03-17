
// can use dollar sign as short-hand for jquery
// jQuery("h3").click(function(){
//    $(this).next().slideToggle(500);
// });

//arrow function
// jQuery(".slide").click((event)=> {
//    $(event.currentTarget).next().slideToggle(500);
// });

// $("h3").click(function(){
//     $(this).next().slideToggle(500);
// });

//If we ask our Javascript to access DOM elements but those elements have not loaded yet, then our JavaScript can't access them. We can get around this by asking our JavaScript to wait until the page has loaded.

// function init() {
//     $("h3").click(function () {
//         $(this).next().slideToggle(500);
//     });
// };
//
// window.onload = init

$(document).ready(function(){
   alert("The DOM has finished loading")

// window.onload(function(){
//    alert("The DOM has finished loading");
// });
   $("h3").click(function(){
      $(this).next().slideToggle(500);
   });

   // const $libraryReference = $("#library")
   // const $libraryText = $(#library).text();
   // let libraryText = $libraryText.text();
   // console.log(libraryText);
   // $("#library").text(`${libraryText} is library`);
   // console.log(libraryText);
   // console.log($libraryReference.text());

   // $(".framework").css('border','1px solid black')
   $(".framework").css({
      'border': "1px solid black",
      'width' : 'fit-content',
      'padding' : '4px',
      'border-radius' : '5px',
      'margin-bottom':'3px'
   });

   $("p, li").text("jQuery takes over").css("color","hotpink")

});