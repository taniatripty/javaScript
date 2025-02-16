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

 //convert inch to feet

 function inchToFeet(inch){
    let feet=parseInt(inch/12) ;
    let remainder=inch%12;
    let result=feet +' feet '+remainder+' inch';
    return result
 }
 console.log(inchToFeet(62));

//  convert kiloMeter To Miles
function kiloMeterToMiles(kilo){
    let meter=kilo*0.621371
    return meter;

}
console.log(kiloMeterToMiles(4));
//swap

let a=12;
let b=15;
let temp;
console.log('before swaping: a =',a,'b =',b)
temp =a;
a=b;
b=temp;
console.log('after swaping : a =',a,'b =',b)

//give me the average of the odd numbers in the array

function add_average(numbers){
    let sum=0;
    let avg;
    const odd=[];
for(let i=0;i<numbers.length;i++){
    let element=numbers[i];
   
    if(element%2===1){
        odd.push(element);
        sum +=element;
    }
    
    avg=sum/odd.length;
}
return avg;
}
  
  console.log(add_average([1,2,3,4,5,6,7,8,9,133]))
 
  //check valid email


  //Write a function to check if a number is prime.


  function isPrime(num) {
    if (num < 2) return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {
            return false; }
    }

    return true; 
}


console.log(isPrime(2));  
console.log(isPrime(11)); 
//find the prime number from array;
function primeNumber(numbers) {
    let prime = [];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        let isPrime = true;

        if (element < 2) {
            continue; 
        }

        for (let num = 2; num<= Math.sqrt(element); num++) {
            if (element % num === 0) {
                isPrime = false; 
                break;
            }
        }

        if (isPrime) {
            prime.push(element);
        }
    }

    return prime;
}

console.log(primeNumber([1, 2, 3, 4, 5, 6, 7, 13]));

//Write a function to check if a string is a palindrome.



// total wood quantity
// chair --> 3 cft
//   table --> 10 cft
//  bed --> 50 cft


function totalWoodQuantity( chairquantity,tablequantity,bedquantity){
   const chair= 3 ;
  const  table =10;
  const bed =50 ;
    const totalcharwood=chair * chairquantity;
    const totaltablewood=table * tablequantity;
    const totalbedwood=bed * bedquantity;
    const totalwood=totalcharwood+totaltablewood+totalbedwood;
    return totalwood;

}

console.log(totalWoodQuantity(2,3,4));


 // total product price

function productprice(product){
    let total=0;
    for(let i=0;i<product.length;i++){
        const element=product[i];

          let prices= element.price * element.quantity;
          total +=prices
        

    }
    return total;
}

console.log( ' total price = ',productprice( [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 }
]))


//find cheapest phone

const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function cheapestphoneprice(phones){
    let cheapestphone=phones[0];
    for(let i=0;i<phones.length;i++){
        const element= phones[i];
        if(element.price<cheapestphone.price){
            cheapestphone.price =element.price;
        }
    }
    return cheapestphone.price;
}
console.log( ' cheapest phone price is : ',cheapestphoneprice(phones));

// find layered DiscountedTotal
function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity<=100){
        const total100price=first100Price * quantity;
        return total100price;
    }
    else if(quantity<=200){
        const total100price=first100Price * 100;
        const total200price= total100price+(second100Price*(quantity-100));
        return total200price;
    }
    else{
        const total100price=first100Price *100;
        const total200price=second100Price*100;
        const totalabove200price=total100price+total200price+ (above200Price* (quantity-200));
        return totalabove200price;
    }
}

console.log(layeredDiscountedTotal(220));

//simple calculator

function add( a,b){
    return a+b;
}
function subtract( a,b){
    return a-b;
}

function multipication( a,b){
    return a*b;
}

function division( a,b){
    return a/b;
}
function  calculator (num,num2,operation){
if(operation==='add'){
    return add(num,num2)
}
else if(operation==='subtract'){
    return subtract(num,num2)
}
else if(operation==='multipication'){
    return multipication(num,num2)
}
else if(operation==='division'){
    return division(num,num2)
}
}
console.log(calculator(1,5,'subtract'))

//You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phone = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phone){
    let total=0;
    let avg;
    for(let i=0;i<phone.length;i++){
        const element=phone[i];
        total +=element.price;
        avg=total/phone.length
    }
    return avg;

}
console.log(findAveragePhonePrice(phone))

//For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalsalary(employees){
    let salary;
    let totalSalary=0;
    for(let i=0;i<employees.length;i++){
        const employee=employees[i];
         salary=(employee.experience* employee.increment) + employee.starting;
         totalSalary +=salary
        
    }
    return totalSalary;

}
console.log(totalsalary(employees)/12)
