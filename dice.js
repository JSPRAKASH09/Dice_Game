var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDice="images/dice"+randomNumber1+".png";
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",randomDice);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDice="images/dice"+randomNumber2+".png";
var imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",randomDice);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏴 Player-1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=" Player-2 🏴 Wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW !";
}