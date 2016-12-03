$(function() {

//* Gallery Carousel Autoplay
  $('.images').slick({
    autoplay: true,
  });


//* Navigation Toggle
  var rightSidebar = $(".menu").sidebar({side: 'right'});

  $('.toggle-nav').on('click', function() {
    rightSidebar.trigger('sidebar:toggle');
  });


//* Contact Form Completion
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
