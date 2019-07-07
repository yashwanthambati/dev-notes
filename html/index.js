const array=['a','b','c','d'];
//push
array.push('e');

//pop
array.pop();
//unshift
array.unshift('x');
//splice
array.splice(2,0,'Yash');
//slice
array.slice();
console.log(array);


//classes in Javascript
class  Player {
  constructor(name,type) {
    console.log('player',this)
    this.name=name;
    this.type=type;
  }
  introduce(){
    console.log(`Hi I am ${this.name},im a ${this.type}`);
  }
}
class Wizard extends Player{
  constructor(name,type){
    super(name,type);
    console.log('wizard',this);
  }
  play(){
    console.log(`I do ${this.type}`);
  }
}
const wizard1 = new Wizard('Yash',"Stack dev");
const wizard2 = new Wizard('Raj','Bank');
//reference type
var obj0 = {value:10};
var obj1 = obj0;
var obj2 = {value:15}
//context vs scope
const b={
  a:function(){
    console.log(this);
  }
}
