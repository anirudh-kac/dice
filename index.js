var randomNumber1;
randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1);
randomNumber1=randomNumber1+1;
document.querySelectorAll(".dice .img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2;
randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2);
randomNumber2=randomNumber2+1;
document.querySelectorAll(".dice .img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML="Player 1 wins !";
}
else if (randomNumber1<randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML="Player 2 wins !";

}else{
  document.querySelectorAll("h1")[0].innerHTML="Draw !";
}
