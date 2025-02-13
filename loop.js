// const arr=["tania","toma","tahmina"]
// for(let arr2 of arr){
//     console.log(arr2);
// }
 const num = [1, 2, 3, 64, 75, 6]; 
// let sum = 0;

for (let i = 0; i <num.length; i++) {  // Use i < num.length to avoid out-of-bounds error
    
    if(num[i]%2===0){
        console.log(num[i]);
    }
}
  // Output: 151
  const fruits=['banana','mango','water melon']
  for( let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
    console.log('I want to eat');
  }
  
  
 
  let total = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
       
        total = total + i;
        
    }
}

console.log('total of the numbers', total)
let sums=0;
for( let i=0;i<50;i++){
  if(i%2===0 && i%4===0){
    sums=sums+i;
  }
}
console.log( 'summution is :' ,sums);
let num1=61;
while(num1<=75){
  console.log(num1);
  num1=num1+2;
}
let num2 = 1;
let sum1 = 0;
while(num2 <= 10){
  if(num2%2===0){
  
    sum1 = sum1 + num2;
   
  }
    
    num2++;
}
console.log('sum:', sum1);
let total1=0;
 for( let i=0;i<20;i++){
  if(i%5===0 && i%3===0){
    continue;
  }
  total1=total1+i;
 }
 console.log('total number is : ', total1)
 for(let i=0;i<20 ;i++){
  if(i>=10){
    break;
  }
  console.log(i);
 }
 let nums=61;
 while(nums>25){
  
  if(nums<50){
    break;
  } 
   console.log(nums);
   nums--;
  
}
let n = 54;
while (n > 25) {
  n--;
    if (n < 50) {
       continue;
    }
    console.log(n);
    
}
let n1 = 0;
while (n1< 15) {
  n1++;
    if (n1 % 5 == 0) {
        continue;
    }
    console.log(n1);
   
    
}
for(let i=0;i<=20;i++){
  console.log('i will invest at least 6 hour every single day for next 60 days ')
}
let multi=9;
for(let i=0;i<=10;i++){
 console.log('9 * ',i ,'=' , multi*i)
}
//console.log(sum3)
for(let i=50;i<100;i++){
  if(i===70){
    break
  }
  console.log(i);
}
let sum4=0
for(let i=0;i<300;i++){
  sum4 +=i;
  
  if(sum4>100){
    break;
  }
  
}
console.log(sum4)
// for(let i=1;i<=100;i++){
//   if(Number.isInteger(Math.sqrt(i))){
//     break;
//   }
//   console.log(i);
// }
for (let i = 1; i <= 100; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
      continue;
  }
  console.log(i);
}
for(let i=0;i<50;i++){
  if(i%5===0){
    continue
  }
  console.log(i);
}
