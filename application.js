
$(document).ready(function(){

//UX
//This creates all content for the UX
var getTweets = (function() {
  var users = streams.users;
  // returns and groups each user into new #content id
  for (var i in users) {

      //return all users twittler handle
      $('#content').append('<div id=each><il class= "user ' +[i]+'"> @' +
      //displays the newest tweet
      [i] + ':<ul class="lastTweet">'+ users[i][0].message +'<ul class=lastTime>' + users[i][0].created_at + '</ul></ul>'
      //displays all messages as they refresh
      +'<a href="#" class=expand> Timeline</a>'+
      '<ul class=messages><ul class= "name'+i+'"></ul></ul></il></div>');

  }

})

//First Loads UX of the page
getTweets();


//TWEET UPDATES
//This part groups all tweets for each user
//then displays them under each users under the
//drop down "timeline"
//The tweets will Auto refresh and display the newest
//tweets at the top, pushing the older ones down the list
  setInterval(function Update(){

    //refreshes page after 400 total tweets
    if (streams.home.length >= 400) {
      return reload();
    }

  var users = streams.users;
  // returns each of the users
  // calls them into $ and commits all tweets into
    for (var i in users) {
      var $messages = $('.name'+i);
      $messages.html('');


    // displays tweets from newest (last index) to oldest
      for (var j = users[i].length-1; j >= 0; j--) {

          //creates new classes for each tweet + time
          var $tweet= $('<div></div>');
          $tweet.text(users[i][j].message);
          var $time = $('<ul class=time></ul>');
          $time.text('Created At:'+users[i][j].created_at);

          $tweet.appendTo($messages);
          $time.appendTo($messages);


        }
      }
    },2000);


//TIMELINE BUTTON
//Open and close the timeline key
$('.expand').on('click',function(event) {
    event.stopPropagation();
    event.preventDefault();
    //foreach timeline key it will open and close messages on click
    $(this).closest('.user').find('.messages').slideToggle();
 })

//page reload overflow stop
 var reload = function () {
   window.location.reload();
 }


});
