let rand1=Math.floor(Math.random()*6)+1;
let randomImg="images/dice"+rand1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg);
let rand2=Math.floor(Math.random()*6)+1;
let randomImg2="images/dice"+rand2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
if(rand1>rand2){
    document.getElementById("h1").innerHTML="Player 1 won";
}
else if(rand2>rand1){
    document.getElementById("h1").innerHTML="Player 2 won";
}
else{
    document.getElementById("h1").innerHTML="DRAW";
}
// document.getElementById("ref").location.reload();


