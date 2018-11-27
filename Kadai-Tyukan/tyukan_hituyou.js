let tweetsHTML = "<ul>";
for(let i =0; i<tweets.length; i++){
tweetsHTML += `<li> <img src="${tweets[i].avatar}" height="100" width="100">${tweets[i].name} ${tweets[i].message} ${tweets[i].tweetedAt} </li>`}
tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;

//let appendTweet = function(tweet){
  //tweetsHTML += `<li> <img src="${tweet.avatar}" height="100" width="100">${tweet.name} ${tweet.message} ${tweet.tweetedAt} </li>`;
//};
//tweets.forEach(appendTweet);
//tweetsHTML += "</ul>";
//document.querySelector("#answer").innerHTML = tweetsHTML;

function saburohChange() {
  document.querySelector("#answer").innerHTML = "";
  let tweetsHTML = "<ul>";
  for (let s = 0; s < tweets.length; s++) {
    if (tweets[s].name == "三郎BOT") {
      console.log(tweets[s].name);
      tweetsHTML += `<li> <img src="${tweets[s].avatar}" height="100" width="100">${tweets[s].name} ${tweets[s].message} ${tweets[s].tweetedAt} </li>`
    }
    tweetsHTML += "</ul>"
  }
  document.querySelector("#answer").innerHTML += tweetsHTML;
}
function jirohChange() {
  document.querySelector("#answer").innerHTML = "";
  let tweetsHTML = "<ul>";
  for (let j = 0; j < tweets.length; j++) {
    if (tweets[j].name == "次郎") {
      console.log(tweets[j].name);
      tweetsHTML += `<li> <img src="${tweets[j].avatar}" height="100" width="100">${tweets[j].name} ${tweets[j].message} ${tweets[j].tweetedAt} </li>`
    }
    tweetsHTML += "</ul>"
  }
  document.querySelector("#answer").innerHTML += tweetsHTML;
}
function tarohChange() {
  document.querySelector("#answer").innerHTML = "";
  let tweetsHTML = "<ul>";
  for (let t = 0; t < tweets.length; t++) {
    if (tweets[t].name == "太郎") {
      console.log(tweets[t].name);
      tweetsHTML += `<li> <img src="${tweets[t].avatar}" height="100" width="100">${tweets[t].name} ${tweets[t].message} ${tweets[t].tweetedAt} </li>`
    }
    tweetsHTML += "</ul>"
  }
  document.querySelector("#answer").innerHTML += tweetsHTML;
}
function homeChange() {
  let tweetsHTML = "<ul>";
  for (let i = 0; i < tweets.length; i++) {
    tweetsHTML += `<li> <img src="${tweets[i].avatar}" height="100" width="100">${tweets[i].name} ${tweets[i].message} ${tweets[i].tweetedAt} </li>`
  }
  tweetsHTML += "</ul>";
  document.querySelector("#answer").innerHTML = tweetsHTML;
}