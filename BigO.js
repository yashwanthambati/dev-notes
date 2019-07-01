const yash = ['yash'];
const everyone = ["yash",'suri','raju',
'naru','harika','swarupa','siddi'];

const large = new Array(100).fill('yash');

function findYash(array){
  for(let i=0;i<array.length;i++){
  if(array[i]=== 'yash'){
   console.log('Found Yash');
  }
  }
}

findYash(yash);
findYash(large);
//O(n)

const boxes=[1,2,3,4,5];
function FirstBox(){
  console.log(boxes[0]);
}

FirstBox();
//O(1)

const array=[1,2,3,4,5]
function LastItem(){
  const a=array.length-1;
  console.log(array[a]);
}
LastItem();
//O(1)
function Challenge1(input){
  let a=3;
  let b=4;
  let c=5;
  for(let i=0;i<input.length;i++){
    let x=i+1;
  }
  for(let j=0;j<input.length;j++){
    let p=j*2;
  }
  let I="I am Yashwanth";
}

Challenge1(3);

//log all pairs
const boxes1=[1,2,3,4,5];
function Pairs(input){
for(let i=0;i<input.length;i++ ){
  for(let j=0;j<input.length;j++){
    console.log(input[i],input[j]);
  }
  }
}

Pairs(boxes1);
//O(n^2);-Quadratic time

function Twice(boxes,boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  boxes2.forEach(function(){
    console.log(boxes);
  });
}
//O(a+b)
const numbers=[1,2,3]
function PrintAllNumThenAllPairSum(numbers){
  console.log('these are numbers:');
  numbers.forEach(function(number){
    console.log(number);
  })
  console.log('and their sums');
  numbers.forEach(function(firstNum){
    numbers.forEach(function(secondNum){
      console.log(firstNum+secondNum);
    })
  })
}

PrintAllNumThenAllPairSum(numbers);
//O(x^2)
