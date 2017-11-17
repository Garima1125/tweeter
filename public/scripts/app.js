var data = [
{
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
},
{
  "user": {
    "name": "Descartes",
    "avatars": {
      "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
      "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
      "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    },
    "handle": "@rd" },
    "content": {
      "text":"Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweetData) {
  const userHandle = tweetData['user']['handle'];
  const userName = tweetData['user']['name'];
  const avatar = tweetData['user']['avatars']['small'];
  const tweetContent = tweetData['content']['text'];
  const created_at = tweetData['created_at'];
  const html_version = `<section class="alltweet">
                          <article class= "arttweet">
                            <header>
                              <span class="tweetId"> ${escape(userHandle)}</span>
                              <img src="${escape(avatar)}">
                              <h3>${escape(userName)}</h3>
                            </header>
                            <p>${escape(tweetContent)}</p>
                            <footer>
                              <img src="images/heart.png" class="heart-icon">
                              <img src="images/retweet.png" class="retweet-icon">
                              <img src="images/flag.png" class="flag-icon">
                              ${escape(moment(created_at).fromNow())}
                            </footer>
                          </article>
                        </section>`
  return html_version
}

function renderTweets(tweets) {
  for(var tweet in tweets){
   var $tweet = createTweetElement(tweets[tweet]);
   $('#tweets').prepend($tweet);
  }
};

function loadTweets() {
  $('#tweets').empty();
  $.ajax({
    url: "/tweets/",
    method: "GET",
    success: function(jsondata) {
      console.log("get ajax call works");
      renderTweets(jsondata);
    }
  });
}

$(document).ready( function () {
  renderTweets(data);
  $('.new-tweet form').on('submit',function(event){
    event.preventDefault();
    const text = $("textarea").val();
    if (text === null || text === '') {
      alert("Tweet can not be empty");
    } else if (text.length > 140) {
      alert("Tweet can't be more than 140 characters");
    } else {
      let input = $( this ).serialize();
      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: input,
        success: function() {
          console.log("post ajax call works");
          loadTweets();
          $("#mytextarea").val("");
          $(".counter").text(140);
        }
      });
    }

  });
  
  $('.compose-button').on('click',function(event){
    $('.new-tweet').toggle(function(){
      $('textarea').focus();
    });
  });
});

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}




