// When the Schedule a Demo Button is Clicked...
$('.schedule-a-demo-cta').click(function(){
  // Apply the CSS Class to Toggle the Form
  $('.footer-container-wrapper').toggleClass('form-slide-in-toggle');
});

// When the Close Button X is Clicked...
$('.button-wrapper').click(function(){
  // Toggle the Form CSS Class Off
   $('.footer-container-wrapper').toggleClass('form-slide-in-toggle');
});

// COPYRIGHT AUTO UPDATE
// Get date
var today = new Date();
var year = today.getFullYear();
console.log(year);

// Set or display year
$('.year').text(year);