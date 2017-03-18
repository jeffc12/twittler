

$(document).ready(function(){


var getTweets = (function() {
  var users = streams.users;
  for (var i in users) {

      $('#content').append('<div id=each><il class= "user ' +[i]+'"> @' +
      [i] +":<a href='#' class=expand> more tweets</a><ul class=messages>"+
       groupTweets(i) + "</ul></div></div>");


  }
})

function groupTweets(i) {
//console.log(streams.users[i]);
var array = [];
  streams.users[i].forEach(function(tweet) {

  array.push(tweet.message + '<ul class=time><i>Created: ' + tweet.created_at + '</i></ul>');
  })
  //console.log(array);
  return array.join('<hr>');
}


getTweets();


$('.expand').on('click',function(event) {
  event.stopPropagation();
    event.preventDefault();
  $(this).closest('.user').find('.messages').slideToggle();
  })

$('.user').on('click', function() {
  console.log('1');
})

/*
users.forEach(function(tweet) {
  $('#content').append('<div id=each><div class= '+tweet.user+'> @' +
  tweet.user +':</div><div class=messages>'+
   tweet.message+ '</div><ul class=time><i>Created: '+tweet.created_at+'</i></ul></div>');
})
*/
/*
var allUserTweets = function(){
var users = streams.users;
for (var name in users) {
    name = '.'+ name;
    name = name.toString();
    $(name).on('click', function() {
      return renderTweets(name);
    });
}
}

var renderTweets = function(tweetArray) {
  console.log(tweetArray);
  streams.user[tweetArray].forEach(function(tweets) {
    $('#content').prepend('<div class=messages>' + tweets.messages+'</div>');
  })
}
//allUserTweets();
//var autoUpdate =
*/

});
