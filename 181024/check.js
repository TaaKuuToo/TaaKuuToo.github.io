function checkNumber(){
 if(Number(document.querySelector('#num').value) > 10){window.alert("true");
 }else{
   window.alert("false");
 }
}
function checkUserInput(){
  let input = document.querySelector('#user_input');
  let answer = document.querySelector('#answer');
  if (input.value == "隣の客はよく柿食う客だ"){
    answer.innerHTML = "〇";
  }else{
    answer.innerHTML = "×";
  }
}
function checkAge() {
 let age = document.querySelector('#age');
 let ageNumber = Number(age.value);
 let answer = document.querySelector('#answer');
 if(ageNumber <= 0){
   answer.innerHTML = "エラー"
 }else if(ageNumber < 20) {
   answer.innerHTML = "未成年"
 }else if(ageNumber < 65){
   answer.innerHTML = "成人"
 }else{
   answer.innerHTML = "高齢者"
  }
}
function checkYear(){
  let i = document.querySelector('#year');

}