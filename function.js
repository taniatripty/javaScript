function arrayOperation(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2===0)
        sum +=numbers[i];
    }
    return sum;
}
let result=arrayOperation([1,2,3,4,5,6,7,8,9,10]);
console.log(result);
function eligibleVote(age){
    if(age>=18){
       let result='eligible for vote';
       return result;
    }
    else{
        let result='not eligible'
        return result;
    }
}
 console.log(eligibleVote(17));
 console.log(eligibleVote(19));

 

 function checkLengthSize(str){

        size=str.length;
        if(size%2===0){
            let result='even size';
            return result;
        }
        else{
            let result='odd size';
            return result;
        }
    }
 
 console.log(checkLengthSize('taniatript'))

 function objectProperty(obj){
    console.log(obj.age);
 }
 objectProperty(
    {name:'tania',age:24}

 )
 //Take four parameters. Multiply the four numbers and then return the result
 function mutli(a,b,c,d){
    let result=a*b*c*d;
    return result;
 }
 console.log(mutli(3,4,5,2))
 //Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

 function checkNumber(number){
    if(number%2===0){
        let result=number/2;
        return result;
    }
    else{
        let result=number*2;
        return result
    }
 }
console.log(checkNumber(3));

//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers){
    let sum=0;
    let avg
    for(let i=0;i<numbers.length;i++){
        const element=numbers[i];
        sum +=numbers[i];
         avg=sum/numbers.length;
    

    }
    return avg;
}
console.log(make_avg([1,2,3,4,5,6,7,8,9,10]))

//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count=0;
    for(let i=0;i<str.length;i++){
    if(str[i]==='0'){
        count++;
    }
    
}
return count;
}
console.log(count_zero('000010100101101'))

//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if(number%2===0){
        let result='number is even';
        return result;
    }
    else{
        let result='number is odd';
        return result;
    }
 }

 let num1=12;
 let num2=13
 console.log(odd_even(12));
 console.log(odd_even(21));
 console.log(odd_even(num1));
 console.log(odd_even(num2));