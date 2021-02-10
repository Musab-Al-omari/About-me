'use strict';

function justAlert() {
  alert('Welcome to mosab website ');
}

justAlert();

let score=0;

let question1 = prompt('do mosab al omari love programing?answer MUST BE  (Y OR N)');

while (question1.toUpperCase() !== 'Y' && question1.toUpperCase() !== 'N') {
  question1 = prompt('do mosab al omari love programing answer MUST BE  (Y OR N)');
}
// eslint-disable-next-line no-unused-vars

if (question1.toUpperCase()==='Y') {score=score+1;}

alert('yes he love programing');

//console.log(question1);

let question2 = prompt('do mosab al omari study Phisics? answer MUST BE  (Y OR N)');
while (question2.toUpperCase() !== 'Y' && question2.toUpperCase() !== 'N') {question2 = prompt('do mosab al omari study Phisics? answer MUST BE  (Y OR N)');
}

if (question2.toUpperCase()==='N') {score=score+1;}

alert('no he study civil engineering');
//console.log(question2);

let question3 = prompt('do the sun have a son? answer MUST BE  (Y OR N)');
while (question3.toUpperCase() !== 'Y' && question3.toUpperCase() !== 'N') {question3 = prompt('do the sun have a son? answer MUST BE  (Y OR N)');
}

if (question3.toUpperCase()==='Y') {score=score+1;}

alert('yes ohh maybe no , is the moon the son of sun XD');
//console.log(question3);

let question4 = prompt('Kommst Mosab al omari aus Jordanian?answer MUST BE  (J OR N)');
while (question4.toUpperCase() !== 'J' && question4.toUpperCase() !== 'N') {question4 = prompt('Kommst Mosab al omari aus Jordanian?answer MUST BE  (J OR N)');
}


if (question4.toUpperCase()==='J') {score=score+1;}

alert('Je,Er kommt aus Jordanian/ the question in the germany ');
//console.log(question4);
let question5 = prompt('do 1=2? answer MUST BE  (Y OR N)');

while (question5.toUpperCase() !== 'Y' && question5.toUpperCase() !== 'N') {question5 = prompt('do 1=2?answer MUST BE  (Y OR N)');
}
if (question5.toUpperCase()==='Y') {score=score+1;}

alert('yes 1=2 i saw a fake prove to this equation yesterday XD');
//console.log(question5);




let i;
for(i=4;i>-1;i--){
  let question6 = prompt(' Guess my fov number?');

  if (question6>10){
    alert('Too High you have '+i+' itration');

  } else if (question6<10) {
    alert('Too Low you have '+i+' itration');

  }
}
if(i===-1){
  alert('the right answer was 10');
} else if(i>-1){
  alert('thats right the answer is 10');
  score=score+1;
}

let mosabArray=['cola','seven','tee','coffee',];
console.log(mosabArray);
console.log(mosabArray.length);
let a;
let t;

for(t=6;t>-1;t--){
  let question7 = prompt('what is my favorit drinks');
  for(a=0;a<=3;a++){
    if(question7 === mosabArray[a] )
    {
      alert('correct answer');
      score=score+1;
      break;
    }
  }
  if (a===4) {
    alert('Wrong Answer ,you still have '+t+ 'time');
  }else{break;}

}

alert('you got '+ score+' point out of 7');



