// var moment = require('moment');
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
      "text": "Je pense , donc je suis"
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
                              <span class="tweetId"> ${userHandle}</span>
                              <img src="${avatar}">
                              <h3>${userName}</h3>
                            </header>
                            <p>${tweetContent}</p>
                            <footer>
                              <img src="images/heart.png" class="heart-icon">
                              <img src="images/retweet.png" class="retweet-icon">
                              <img src="images/flag.png" class="flag-icon">
                              10 days ago
                            </footer>
                          </article>
                        </section>`
  return html_version
}

function renderTweets(tweets) {
  for(var tweet in tweets){
   var $tweet = createTweetElement(tweets[tweet]);
   $('.container').append($tweet);
 }
};
     // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

$(document).ready( function () {
 renderTweets(data);

});

//$('#tweets-container').append($tweet);


//console.log(createTweetElement(tweetData));


