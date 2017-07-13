 'use strict';
 var score = [];
  var username = prompt('Whats your name?');
  alert('Hello, ' + username + ' welcome to my page!');
  alert('Ok ' + username + ' I have a few questions....');



//first question
function question1 () {
   var yoyo = prompt('Am I amazing at yo-yoing?').toLowerCase();
   if(yoyo === 'yes' || yoyo === 'y'){alert('Thats right!');
     console.log('thats right!');
     score.push('q1');
     console.log(score.length + ' out of 7');
   }else if (yoyo === 'no' || yoyo === 'n'){
     alert('Wrong Answer!');
     console.log('wrong! im a yoyo champ');
   }
 }
 question1();

//second question
function question2(){
   var pie = prompt('Is pumpkin pie my favorite?').toLowerCase();
   if(pie === 'no'|| pie === 'n' ){
     alert('Thats right! Not a fan of pumpkin I LOVE sweet potato pie though!');
     console.log('correct');
     score.push('q2');
   }else if (pie === 'yes' || pie === 'y'){
     alert('Pumpkin? Gross!!');
     console.log('Pumpkin? Gross!!');

   }
 }
 question2();

//third question
function question3(){
   var zodiac = prompt('Is my zodiac sign the Scorpio?').toLowerCase();
   if(zodiac === 'yes'|| zodiac === 'y'){
     alert('Yea, Obvi...');
     console.log('correct');
     score.push('q3');
   }else if (zodiac === 'no'|| zodiac === 'n'){
     alert('Nah.');
     console.log('wrong zodiac');

 }
}
question3();

 //fourth question
 function question4(){
   var teeth = prompt('Cavity free since 93\'? ').toLowerCase();
   if(teeth === 'yes' || teeth === 'y'){
     console.log('yes');
     alert('Yep *insert cool emoji*');
     score.push('q4');
   }else if (teeth === 'no' || teeth === 'n') {
     alert('Wrong.');
     console.log('wrong');
   }
 }
 question4();


//fifth question
function question5(){
     var hometown = prompt('Last question, Is my hometown Chicago? ').toLowerCase();
     if(hometown === 'no' || hometown === 'n'){
       console.log('yes');
       alert('East Side Atlanta Zone 6 ');
       score.push('q5');

     }else if(hometown === 'yes' || hometown === 'y'){
       console.log('wrong');
       alert('Hint: answer is No');
     }
   }
   question5();

//question 6
function question6(){
   var mynum = 5;
   var numguess = 3;

   while(numguess > 0 && userNumGuess !== mynum){
     var userNumGuess = parseInt(prompt('What is my favorite number (between 1-10)'));
     console.log(userNumGuess);

     if(userNumGuess < mynum){
       alert(username + ', you guessed too low, you have ' + numguess + ' guesses left');
       console.log(username + ' guessed too low, they have ' + numguess + ' guesses left');
       numguess--;

     }else if(userNumGuess > mynum){
       alert(username + ', you guessed too high, you have ' + numguess + ' guesses left');
       console.log(username + ' guessed too high, they have ' + numguess + ' guesses left');
       numguess--;
     }else if(userNumGuess === mynum){
       alert('You guessed it!! ' + mynum + ' is my Fav number!');
       console.log(username + ' guessed correctly');

     }else{
       alert('Invalid Input');
     }
   }
 }
 question6();

//question 7

 function question7(){
   var mycar = ['kia', 'honda', 'volkswagon'];
   var carguess = 6;
   while(carguess > 0){
     var userCarGuess = prompt('Name the make of a car that I have owned').toLowerCase();
     console.log(userCarGuess);
     for(var j = 0; j < mycar.length; j++){
       if (userCarGuess === mycar[j] || userCarGuess === mycar[j]){
         alert(userCarGuess + ' Is right!');
         score.push('q7');
         carguess = -1;
         break;
       }
     }
     if (carguess > 0){
       alert('Sorry try again ' + carguess + ' Try\'s left.');
       carguess--;
     }
     if (carguess === 0){
       alert(carguess + ' Trys left: You suck! RIP GG EZZ');

     }
    }
  }
  question7();

alert('your score ' + score.length + ' out of 7');

   //if(userCarGuess === mycar1){

 //     alert('Correct!!');
 //     console.log(carguess);
 //     console.log(j);
 //   }else if(userCarGuess === mycar2){
 //     alert('Correct!!');
 //     console.log(carguess);
 //     //console.log(j);
 //   }else if(userCarGuess === mycar3){
 //     alert('Correct!!');
 //     console.log(carguess);
 //           //console.log(j);
 //   }else alert('you are incorrect');
 //   carguess--;
 //   console.log(carguess);
 //
 // }



 // if (userCarGuess !== mycars){
 //   alert('you are incorrect');
 //   carguess--;
 //}
 //}
