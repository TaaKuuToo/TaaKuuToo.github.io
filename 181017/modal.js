 function showModal(){
   document.querySelector("#modal").innerHTML = "押された！";
}
function changeRed(){
  document.querySelector("#modal").style.backgroundColor = "red";
}
 function changeGreen(){
  document.querySelector("#modal").style.backgroundColor = "green";
 }
 function changeYellow(){
   document.querySelector("#modal").style.backgroundColor = "yellow";
 }
 function appendCircle(){
   document.querySelector("#modal").append("○");
 }
 function appendCross(){
   document.querySelector("#modal").append("×");
 }
 function plusOne(){
   document.querySelector("#modal").innerHTML =
       Number(document.querySelector("#modal").innerHTML) + 1;
 }

 function plusFive(){
   document.querySelector("#modal").innerHTML =
       Number(document.querySelector("#modal").innerHTML) + 5;
 }

 function plusTen(){
   document.querySelector("#modal").innerHTML =
       Number(document.querySelector("#modal").innerHTML) + 10;
 }