$(document).ready(function(){
  var $body = $('body');
  var index = streams.home.length-1;
  var counter=0;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div id="eachtweet"></div>');
    console.log('1',index,tweet)
    $tweet.html('@' + '<span class="tweetuser">' + tweet.user+'</span>'+ ': ' +tweet.message + ' ' + tweet.created_at);
    $tweet.appendTo('.tweets');
    index -= 1;
    counter += 1;
  };

  var clickUser = function() {
    $('.tweetuser').click(function() {
      $('.tweets').empty();
      $('.newtweets').empty();
      $('#userinfo').find('img').unbind('click');  
      var tweetuser = $(this).text();
      var oldtweet = streams.users[tweetuser];
      var index =0;
      while(index<oldtweet.length) {
        var $tweet = $('<div id="eachhistory"></div>');
        console.log('2',index,oldtweet[index])
        $tweet.text('@' + oldtweet[index].user + ': ' + oldtweet[index].message +' ' + oldtweet[index].created_at);
        $tweet.prependTo(".history");
        index += 1;
      };
      $('.goback').text("Go back").click(function() {
        $('#userinfo').find('img').unbind('click'); 
        $('.history').empty();
        $('.tweets').empty();
        $('.newtweets').empty();
        $('.goback').empty();
        var newcounter=0;
        while(newcounter < streams.home.length) {
          var tweet = streams.home[newcounter];
          var $tweet = $('<div id="neweachtweet"></div>');
          console.log('3',newcounter,tweet)
          $tweet.html('@' +'<span class="tweetuser">' + tweet.user+'</span>'+ ': ' +tweet.message + ' ' + tweet.created_at);
          $tweet.prependTo('.newtweets');
          newcounter += 1;
        };
        clickUser();
        $('#userinfo').find('img').click(function() {
          while(newcounter < streams.home.length) {
            var tweet = streams.home[newcounter];
            var $tweet = $('<div id="neweachtweet"></div>');
            console.log('4',newcounter,tweet)
            $tweet.html('@' +'<span class="tweetuser">' + tweet.user+'</span>'+ ': ' +tweet.message + ' ' + tweet.created_at);
            $tweet.prependTo('.newtweets');
            newcounter += 1;
          };
          clickUser();
        });
      });    
    });
  };    

  clickUser();
 
  $('#userinfo').find('img').click(function() {
    while(counter < streams.home.length) {
      var tweet = streams.home[counter];
      var $tweet = $('<div id="eachtweet"></div>');
      console.log('5',counter,tweet)
      $tweet.html('@' +'<span class="tweetuser">' + tweet.user+'</span>'+ ': ' +tweet.message + ' ' + tweet.created_at);
      $tweet.prependTo('.tweets');
      counter += 1;
    };
  });               
});
