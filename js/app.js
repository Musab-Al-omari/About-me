/* eslint-disable no-unused-vars */
'use strict';
/*
let question1 = prompt('do mosab al omari love programing?answer MUST BE  (Y OR N)');

let k=question1.toUpperCase();

while (k !== 'Y' && k !== 'N') {question1 = prompt('do mosab al omari love programing answer MUST BE  (Y OR N)');
}
alert('yes he love programing');
//console.log(question1);

let question2 = prompt('do mosab al omari study Phisics? answer MUST BE  (Y OR N)');
while (question2.toUpperCase() !== 'Y' && question2.toUpperCase() !== 'N') {question2 = prompt('do mosab al omari study Phisics? answer MUST BE  (Y OR N)');
}
alert('no he study civil engineering');
//console.log(question2);

let question3 = prompt('do the sun have a son? answer MUST BE  (Y OR N)');
while (question3.toUpperCase() !== 'Y' && question3.toUpperCase() !== 'N') {question3 = prompt('do the sun have a son? answer MUST BE  (Y OR N)');
}
alert('yes ohh maybe no , is the moon the son of sun XD');
//console.log(question3);

let question4 = prompt('Kommst Mosab al omari aus Jordanian?answer MUST BE  (J OR N)');
while (question4.toUpperCase() !== 'J' && question4.toUpperCase() !== 'N') {question4 = prompt('Kommst Mosab al omari aus Jordanian?answer MUST BE  (J OR N)');
}
alert('Je,Er kommt aus Jordanian/ the question in the germany ');
//console.log(question4);
let question5 = prompt('do 1=2? answer MUST BE  (Y OR N)');

while (question5.toUpperCase() !== 'Y' && question5.toUpperCase() !== 'N') {question5 = prompt('do 1=2?answer MUST BE  (Y OR N)');
}
alert('yes 1=2 i saw a fake prove to this equation yesterday XD');
//console.log(question5);
*/



let i;
for(i=4;i>-1;i--){
  let question6 = prompt(' Guess my fov number?');

  if (question6>10){
    alert('Too High you have '+i+' itration');

  } else if (question6<10) {
    alert('Too Low you have '+i+' itration');

  } else{
    break;
  }
}
if(i===-1){
  alert('the right answer was 10');
} else if(i>0){
  alert('thats right the answer is 10');
}
let mosabArray=['cola','seven','tee','coffee',];

console.log(mosabArray);
console.log(mosabArray.length);
let a;
for(a=6;a>-1;a--){
  let question7 = prompt('what is my favorit drinks');
  if(question7 ===mosabArray ){
    alert('correct answer');
    break;
  }
  else{
    alert('wrong answer you still have '+ a+' itrations');
  }
}
alert('you got '+a+'out of 6')








