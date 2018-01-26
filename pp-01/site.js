$('document').ready(function() {
  console.log("Document is ready")
});

$("#contactInfo-form").on('submit', function(e) {
  e.preventDefault();
  window.alert('Thank you', + $('#email').val() + ".")
  $('html').append("Thanks for signing up!")
});
