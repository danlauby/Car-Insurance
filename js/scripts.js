$(function() {
  $('form#insurance').submit(function(e) {
    var age = parseInt($('input#age').val());
    var gender = $('select#gender').val();
    if (age) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && age < 26) {
        quote += 50;
      }
      $('#rate').text(quote);
      $('#quote').show();
    } else {
      alert('Please enter your age');
    }
    e.preventDefault();
  });
});
