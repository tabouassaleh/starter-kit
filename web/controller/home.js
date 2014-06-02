App.controller('home', function (page) {
	// put stuff here
	$(page)
    .find('.app-button')
    .on('click', function () {
      var message = $('#input-message').val();
      kik.send({
  			title: 'Incoming Message!',
  			text: 'This will self-destruct 3 seconds after opening.',
  			data: {'text': message}
			});
    });
    if (kik.message) {
		  $('#message').show();
		  $('#message .message-text').text(kik.message.text);
		  setTimeout(function () {
		    $('#message').hide();
		  }, 3000); // Destroy message after 3 seconds.
		}
});
