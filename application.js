

  $(document).ready(function(){



    streams.home.forEach(function(tweet) {
      $('#content').prepend('<div id=each><div class= '+tweet.user+'> @' +
      tweet.user +':</div><div class=messages>'+
       tweet.message+ '</div><ul class=time><i>Created: '+tweet.created_at+'</i></ul></div>');
    })



});
