// example-remove duplicate element in the array
// ['laptop','phone','laptop','tablet','phone']
// output
// ['laptop','phone','tablet']
const arr= ['laptop','phone','laptop','tablet','phone'];
const unique=[];

for(let i=0;i<arr.length;i++){
    const element=arr[i];
  //  console.log(element)
  if(!unique.includes(element)){
    unique.push(element)
  }
}
console.log(unique);

// const products=[
//    {names:'laptop' ,catagories : 'electronics'},
//    {names:'t-shirt' ,catagories : 'clothing'},
//    {names:'phone' ,catagories : 'electronics'},
//    {names:'jeans' ,catagories : 'clothing'}

// ]
// output
// {
//     electronics:['laptop','phone'],
//     clothing:['t-shirt','jeans']
// }
const products=[
       {names:'laptop' ,categories : 'electronics'},
        {names:'t-shirt' ,categories : 'clothing'},
        {names:'phone' ,categories : 'electronics'},
        {names:'jeans' ,categories : 'clothing'}
    
    ]
    const productsName ={
        electronics : [],
        clothing : []
    }
    for(let i=0;i<products.length;i++){
        const element=products[i];
        //console.log(element)
        if(element.categories==='electronics'){
            productsName.electronics.push(element.names)
        }
        else if(element.categories==='clothing'){

            productsName.clothing.push(element.names)
        }
        }
    
    console.log(productsName);

    // Input
    // $529
    // output
    // 16
    let str='$529'
    let sum=0;
    for(let i=0;i<str.length;i++){
    const element=str[i];
        // console.log(str[i]);
        if( !isNaN(element) && element!== " "){
           // console.log(element)
           sum +=Number(element)
        }
    }
    console.log(sum)
    // input
    // 'lightweight and durable backpack'
    // output
    // 'backpack durable and lightweight'
    let str2='lightweight and durable backpack';
    let split=str2.split(" ")
    //console.log(split);
    let str3='';
    for(let i=split.length-1;i>=0;i--){
     //  console.log(split[i])
     const element=split[i];
     str3=str3+element;
     if(i>0){
        str3 += " "
     }

    }
    console.log(str3);
    // input-find the biggest name
    // ['taniatripty','tania','muna','puspita']
    // output
    // 'taniatripty'
    let frnd=['tripty', 'taniatripty','tania','muna','puspita'];
    let bigName=frnd[0];
    for(let i=1;i<frnd.length;i++){
        let element=frnd[i];
        if(element.length > bigName.length){
            bigName=element;
        }
        
    }
    console.log(bigName);
    let check=[1,6,98,7,2,4,1,4,5,3,4,5];
    let uniqueNumber=[];
    for(let i=0;i<check.length;i++){
        let number=check[i];
        if(!uniqueNumber.includes(number)){
            uniqueNumber.push(number)
        }
    }
    console.log(uniqueNumber);
    let number2=[1,2,33,44,55,88,77,1,3,0,5];
    let Short=number2.sort(function(a,b){return a-b})
        
    console.log(Short[Short.length-1]);
    let year=2019;
    if((year %4==0 && year%100 !==0 ) || year%400==0){
        console.log(` ${year} is leap year`)
    }
    else{
        console.log(` ${year} is not leap year`)
    }
    // capitalize the first letter
    // input
    // 'hi i am tania akter tripty'
    // output
    // 'Hi I Am Tania Akter Tripty'
    
    const string='hi i am tania akter tripty'
    const word=string.split( " ");
   let result=''
    for(let i=0;i<word.length;i++){
        //console.log(word[i]);
        result +=word[i].charAt(0).toUpperCase()+word[i].slice(1)+ ( " ");
    }
    console.log('capitalize first letter :' ,result);
   // find the biggest number
      let numbers=[1,2,44,7,0,3,42,874];
      let bignumber=numbers[0];
      for(let i=1;i<numbers.length;i++){
        let element=numbers[i];
        if(element>bignumber){
            bignumber=element;
        }

      }
      console.log(bignumber);

//You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

let numbers3=[5,6,11, 7,6,7,6,12,98, 5];
let repeat=[];
let checked=[];
let count=0;
let frequency={};
for(let i=0;i<numbers3.length;i++){
    const element=numbers3[i];
    frequency[element] = (frequency[element] || 0) + 1;
    
    if( checked.includes(element)  && !repeat.includes(element) ){
        repeat.push(element)
        count++;
    
    
}
    else{
        checked.push(element)
    }
}
console.log(checked)
console.log(repeat)
console.log('repeted element is :' ,count)


for (let key in frequency) {
    if (frequency[key] > 1) {
        console.log(`Element ${key} is repeated ${frequency[key]} times`);
    }
}

//Write a function to count the number of vowels in a string.

const str4='Tripty tania';
let vowelsNumber=0;
let vowel=['a','e','i','o','u']
let split1=str4.split("");
for(let i=0;i<split1.length;i++){
    const element=split1[i];
    if( vowel.includes(element) ){
        
        vowelsNumber++
    }
}
console.log('total vowel is :' ,vowelsNumber);

//Generate a random number between 10 to 20.
let randomnumber;
for(let i=10;i<=20;i++){
    randomnumber=Math.floor(Math.random()*(20-10+1))+10;
    
}
console.log(randomnumber)

//Write a program to convert temperature from Celsius to Fahrenheit.
function Fahren(a){
return ( a * 9/5) + 32
}
console.log(Fahren(25))
function area(a,b){
    if( a <0 || b< 0){
        throw new Error('length and weigth can not negative number');
        
    }

    return a*b;
}
 console.log(area(2,20))