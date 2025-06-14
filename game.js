let btn=document.querySelectorAll('.choice-container');
let alert1=document.querySelector('#msg');
let comP=document.querySelector('#comp');
let userP=document.querySelector('#user');
let sysChoice=document.querySelector('.sysChoice');
let sysName=document.querySelector('.sysName');

// userP.innerText='rrr';
// console.dir(alert1);
// btn[0].onclick=()=>{
// console.log(btn[0].innerText);}

// btn[1].onclick=()=>{
// console.log(btn[1].innerText);}

// btn[2].onclick=()=>{
// console.log(btn[2].innerText);
let userScore=0;
let comScore=0;
comP.innerText=comScore;
userP.innerText=userScore;

 btn.forEach(element => {
   element.onclick=()=>{
  sysName.innerText='Computer Choice is';
  sysChoice.id='css';
 let userChoise=element.id;
 let compChoice= Math.floor(Math.random()*3);
 compChoice==0?sysChoice.setAttribute('src','rock.png'):'' ;
 compChoice==1?sysChoice.setAttribute('src','paper.png'):'' ;
 compChoice==2?sysChoice.setAttribute('src','sessoir.png'):'' ;
 console.log(userChoise);
 console.log(compChoice);
 if(userChoise==compChoice){ 
  alert1.innerText='game is tie! Play again';
  alert1.className='alert';
 }
 else{
 if(userChoise==0) {
      if(compChoice==1) {
        comScore++;
         alert1.innerText='You lose the game. Paper beats rocks!';
         alert1.className='lose';
      }
      else{
          userScore++;
          alert1.innerText='You win the game. rock beats sessoir!';
          alert1.className='win';
      }}
 if(userChoise==1) {
      if(compChoice==2) {
        comScore++;
         alert1.innerText='You lose the game. sessoir beats Paper!';
         alert1.className='lose';
      }
      else{
          userScore++;
          alert1.innerText='You win the game. Paper beats Rock!';
          alert1.className='win';
      }}
 if(userChoise==2) {
      if(compChoice==0) {
        comScore++;
         alert1.innerText='You lose the game. Rock beats sessoir!';
         alert1.className='lose';
      }
      else{
          userScore++;
          alert1.innerText='You win the game. sessoir beats paper!';
          alert1.className='win';
      }}
 }
 comP.innerText=comScore;
    userP.innerText=userScore;
}}
 );
 
// btn.forEach(element => {
//   element.onclick=()=>{
//     userScore++;
//     comP.innerText=comScore;
//     userP.innerText=userScore;
// console.log(userScore);

//   }});