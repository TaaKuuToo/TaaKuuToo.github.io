//fetch("http://zipcloud.ibsnet.co.jp/api/search?zipcode=1660001").then(
  //  response => {
    //  return response.json();
    //}
//).then(
  //  function(json){
   //   let answerHtml = "";
     // json.forEach(function (tweet){
       // answerHtml += `<li>${tweet.name}</li>`;
      //});
      //document.querySelector("#answer").innerHTML = answerHtml;
    //}
//);
function searchApi(){

}

fetch("http://zipcloud.ibsnet.co.jp/api/search?zipcode=2510015").then(
    response => {
      return response.json();
    }
).then(
    json => {
      console.log(json);
      let answer = document.querySelector("#answer");
      answer.innerHTML += `<li>
            ${json.results[0].address1}
            ${json.results[0].address2}
            ${json.results[0].address3}
            </li>`;
    }
);