 'use strict';

 var username = prompt('Whats your name?');
 alert('Hello, ' + username + ' welcome to my page!');
 alert('Ok ' + username + ' I have a few questions....');

//first question
 var yoyo = prompt('Am I amazing at yo-yoing?').toLowerCase();
 if(yoyo === 'yes'){alert('Thats right!');
   console.log('thats right!');
 }else{alert('Wrong Answer!');
   console.log('wrong! im a yoyo champ');
 }
//second question
 var pie = prompt('Is pumpkin pie my favorite?').toLowerCase();
 if(pie === 'no' ){alert('Thats right! Not a fan of pumpkin I LOVE sweet potato pie though!');
   console.log('correct');
 }else{alert('Pumpkin? Gross!!');
   console.log('Pumpkin? Gross!!');
 }
//third question
 var zodiac = prompt('Is my zodiac sign the Scorpio?').toLowerCase();
 if(zodiac === 'yes'){alert('Yea, Obvi...');
   console.log('correct');
 }else{alert('Nah.');
   console.log('wrong zodiac');

 }
 //fourth question
 var teeth = prompt('Cavity free since 93\'? ').toLowerCase();
 if(teeth === 'yes'){
   console.log('yes');
   alert('Yep *insert cool emoji*');
 }else{alert('Wrong.');
   console.log('wrong');
 }

//fifth question
 var hometown = prompt('Last question, Is my hometown Chicago? ').toLowerCase();
 if(hometown === 'no'){
   console.log('yes');
   alert('East Side Atlanta Zone 6 ');
 }else{
   console.log('wrong');
   alert('Hint: answer is No');
 }
//question 6

 var mynum = 5;
 var numguess = 4;

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
//question 7

 var mycar1 = 'kia';
 var mycar2 = 'honda';
 var mycar3 = 'volkswagon';
 var carguess = 6;
 while(carguess > 0){
   var userCarGuess = prompt('Name the make of a car that I have owned').toLowerCase();
   console.log(userCarGuess);
   //for(var j = 0; j < 6; j++){
   if(userCarGuess === mycar1){
     alert('Correct!!');
     console.log(carguess);
     console.log(j);
   }else if(userCarGuess === mycar2){
     alert('Correct!!');
     console.log(carguess);
     //console.log(j);
   }else if(userCarGuess === mycar3){
     alert('Correct!!');
     console.log(carguess);
           //console.log(j);
   }else alert('you are incorrect');
   carguess--;
   console.log(carguess);

 }



 // if (userCarGuess !== mycars){
 //   alert('you are incorrect');
 //   carguess--;
 //}
 //}
