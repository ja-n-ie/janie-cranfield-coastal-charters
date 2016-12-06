$(function() {

//* PAGE LOADER
  $(document).ready(function () {
    $("#divloader").addClass("HideLoader");
        })
  $(document).ready(function(){
    $(".loader").fadeOut("slow");
        });


//* GALLERY CAROUSEL AUTOPLAY
  $('.images').slick({
    autoplay: true,
  });


//* NAVIGATION TOGGLE
  var rightSidebar = $(".menu").sidebar({side: 'right'});
  $('.toggle-nav').on('click', function() {
    rightSidebar.trigger('sidebar:toggle');
  });


//* CONTACT FORM COMPLETION
  $('#my-form').on('submit', function(event) {
     event.preventDefault();
     if ( $('#my-name-input').val() == '' ) {
        alert('Please enter your name.');
     } if ( $('#my-email-input').val() == '' ) {
        alert('Please enter your email address.');
     } if ( $('#my-message-input').val() == '' ) {
        alert('Please enter your message.');
     } else {
        alert('Thanks for contacting us.');
     }
  });

});
