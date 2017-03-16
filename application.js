

  $(document).ready(function(){



    streams.home.forEach(function(tweet) {
      $('#content').prepend('<div class= '+tweet.user+'> @' +
      tweet.user +':</div><div class=messages>'+
       tweet.message+ '</div><ul class=time><i>Created Time: '+tweet.created_at+'</i></ul>');
    })



});
