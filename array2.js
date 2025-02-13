const names=['tania','tripty','toma','muna','puspita']
for(let i=0;i<names.length;i++){
  console.log(names[i])
}
const num=[1,2,3,4,5,6];
let n=0;
while(n<num.length){
    console.log(num[n]);
    n++;

}
const name3=['tania','tripty','muna','puspita']
let rev=[];
for(i=name3.length-1;i>=0;i--){
  // console.log(name3[i])
    rev.push(name3[i])
}
console.log(rev);
const num2=[2,88,7,0,3,12,66];
console.log(num2)
const short=[...num2].sort(function(a,b) {return a-b})
console.log(short);
// const reverse='I am a hard working person';
// let
// for(let i=reverse.length-1;i>=0;i++){

// }
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
for(let i=0;i<numbers.length;i++){
    console.log(i)
}