$(function()
{
// Caching the Scroll Top Element
var ScrollButton = $("#scroll");
     $(window).scroll(function()
     {
          console.log($(this).scrollTop());

          if ($(this).scrollTop() >= 50 ){
               ScrollButton.show()
          }
          else{
               ScrollButton.hide();
          }

    });

    // Click On Button To Scroll To Top Of The Page
          ScrollButton.click(function()
          {
               $("html,body").animate({scrollTop : 0}, 600);
          });
   
});

// used to animate photo 
$( function() {
    $( '#gallery' ).jGallery( { mode: 'slider' } );
} );

// gallery animation

$( function() {
$( '#album' ).jGallery( {
autostart: true,
zoomSize: '100%'
} );
} ); 

