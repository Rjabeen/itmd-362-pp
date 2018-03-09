$('document').ready(function() {
  console.log("Document is ready")
});

$("#contactInfo-form").on('submit', function(e) {
  e.preventDefault();

if($('#email').val().indexOf('@')>-1)
{
  alert('Thank you')
}
else {
  alert('Please make sure you have @ in your email id')
}

  $('html').append("Thanks for signing up!")
});
