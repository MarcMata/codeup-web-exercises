// $(document).ready(function(){
//   alert("The DOM has finished loading")
// });

// jQuery(".codeup").css("border", "1px solid #FF0000");


// jQuery("li").css("font-size","20px")

// jQuery("h1, p, li").css("background-color", "yellow")
//
// let alertContents = jQuery("h1").html();
// alert(alertContents);

jQuery("h1").click(function(){
    $(this).css({
        'background-color': 'green',
    });
});

jQuery('p').dblclick(function(){
   $(this).css({
      'font-size' : '18px'
   });
});

jQuery('li').hover(
    function() {
        $(this).css({
            'color': 'red'
        });
    },
   function() {
       $(this).css({
          'color':'black'
       });
   }
);