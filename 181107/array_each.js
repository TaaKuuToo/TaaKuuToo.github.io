//let fruitsHTML = "<ul>";

//let i = 0;
//while (i < fruitNames.length){
  //fruitsHTML += '<li>${fruitNames[i]}</li>';
  //i++;
//}

//for(let i = 0;i < fruitNames.length;i++){
  //fruitsHTML += `<li>${fruitNames[i]}</li>`;
//}

//let appendFruit = function(fruit){
  //fruitsHTML += `<li>${fruit}</li>`;
//};
//fruitNames.forEach(appendFruit);

//fruitsHTML += "</ul>";
//document.querySelector("#answer").innerHTML = fruitsHTML;

let tweetsHTML = "<ul>";

//let i = 0;
//while(i < tweets.length){
  //tweetsHTML += `<li>${tweets[i].name} ${tweets[i].message} ${tweets[i].tweetedAt}</li>`;
  //i++;
//}

//tweetsHTML += "</ul>";
//document.querySelector("#answer").innerHTML = tweetsHTML;

//let tweetsHTML = "<ul>";

//for(let i = 0; i < tweets.length;i++){
  //tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//}
let appendTweet = function(tweet){
  tweetsHTML += `<li>${tweet.name} ${tweet.message} ${tweet.tweetedAt}</li>`;
};
tweets.forEach(appendTweet);

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;