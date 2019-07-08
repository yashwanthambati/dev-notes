

function reverse(str){
  //check input
  if(!str||str.length < 2|| typeof str !=='string'){
    return "its bullshit";

  }
  const backwards=[];
  const totalItems=str.length-1;
  for(let i=totalItems;i=0;i--){
   backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('')
}

reverse('Hi My name is Yash');

//built in methods
function reverse2(str){
  return str.split('').reverse().join('');

}
reverse2('Hi I am Yash');

//modern es6 using spread operator
const reverse3= str => [...str].reverse().join('');
