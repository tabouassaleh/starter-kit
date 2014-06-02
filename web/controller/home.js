App.controller('home', function (page) {
	// put stuff here
	$(page).find('#button-send').click(function () {
      var message = $(page).find('#input-message').val();
      kik.send({
		  	title: 'Incoming Message!',
		  	text: 'This will self-destruct 10 seconds after opening: '+message,
		  	data: {'text': message}
      });
      App.dialog({
      	title        : 'Message Sent' ,
      	text         : 'Message sent:' + message,
      });
    });
    if (kik.message) {
	$('#message').show();
		  $('#message .message-text').text(kik.message.text);
		  setTimeout(function () {
		    $('#message').hide();
		  }, 10000); // Destroy message after 3 seconds.
		}
});
