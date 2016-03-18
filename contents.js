$(document).ready(function(){
  var $body = $('body');
  var index = streams.home.length-1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div id="tweets"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
    $tweet.appendTo('#tweets');
    index -= 1;
  };

  
  // var newTweets = function() {
  var index = 3
  $('#userinfo').find('img').click(function() {
    while(index < streams.home.length) {
      var tweet = streams.home[index]
      var $tweet = $('<div id="tweets"></div>');
      $tweet.text('@'+ tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
      $tweet.insertBefore('#tweets');
      index= index +1;
    };      
  });

  // var newTweetsRepeat = function(){
  //   newTweets();
  //   setTimeout(newTweetsRepeat, time);
  // };

  // newTweetsRepeat();

  $('#tweets').click(function() { alert('hi'); });

});
