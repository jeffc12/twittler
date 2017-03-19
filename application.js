

$(document).ready(function(){

// display all users
var getTweets = (function() {
  var users = streams.users;
  for (var i in users) {

      $('#content').append('<div id=each><il class= "user ' +[i]+'"> @' +
      [i] +':<a href="#" class=expand> Timeline</a>'+
      '<ul class=messages><ul class= "messages'+i+'"></ul></ul></il></div>');

  }
})


getTweets();
//file:///Users/JeffsMac/hrsf75-twittler/index.html
// run the generator


// show timeline of each user
// includes Auto add of tweets for each

  setInterval(function Update(){

  var users = streams.users;
    for (var i in users) {
      var $body = $('.messages'+i);
      $body.html('');
          streams.users.shawndrost.forEach(function(index){
            //console.log(index);
          var $tweet= $('<div></div>');
          $tweet.text(index.message +' Created At:'+index.created_at);
          $tweet.appendTo($body);
        })
      }
    },10000)

});



*/
