$(function()
{
// Caching the Scroll Top Element
var ScrollButton = $("#scroll");
     $(window).scroll(function()
     {
        //  console.log($(this).scrollTop());

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

// $(function(){
//   $('.lb-prev').on('click', function() {
//     console.log("perv");
//     var currentImage = $('.example-image-link');
//     var nextImage = currentImage.nextImage();
//     if(nextImage.length){
//       currentImage.removeClass('data-lightbox')
//     }
//
//     // if (self.currentImageIndex === 0) {
//     //   self.changeImage(self.album.length - 1);
//     // } else {
//     //   self.changeImage(self.currentImageIndex - 1);
//     // }
//     // return false;
//   });
//
//   $('.lb-next').on('click', function() {
//     console.log("next");
//     console.log("perv");
//     var currentImage = $('.example-image-link');
//     var nextImage = currentImage.nextImage();
//     if(nextImage.length){
//       currentImage.removeClass('data-lightbox')
//     }
//     // if (self.currentImageIndex === self.album.length - 1) {
//     //   self.changeImage(0);
//     // } else {
//     //   self.changeImage(self.currentImageIndex + 1);
//     // }
//     // return false;
//   });
// });

// $(function(){
//   $(document).ready(function() {
//       $("#lightgallery").lightSlider();
//     });
// });
