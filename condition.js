var burger=400;
if(burger>500){
    console.log("  you got a free cake")
}
else{
    console.log(" you got a free 30tk")
}


var weight=62;
var height=1.6;
let BMI = weight/( height^2);
 if(BMI<18.5){
    console.log(" you are underweight")
 }
 else if(BMI >= 18.5 && BMI <=24.9){
    console.log(" you are normal")
 }
 else if( BMI >=25 && BMI <= 29.9){
    console.log("you are overweight")
 }
 else{
    console.log("you are obese")
 }
 var myScore=72;
 var myFriendScore=70;
 if(myScore>80){
    if(myFriendScore>80){
        console.log("go for a lunch");

    }
    else{
        if(myFriendScore<80 && myFriendScore>=60){
            console.log("good luck next time")
        }
        else{
            if(myFriendScore<=60 && myFriendScore>=40){
                console.log("good luck next time")
            }
            else{
                console.log("block friends")
            }
        }
 }
}
 else{
    console.log("go to home and sleep and act sad")
 }
 var num1=30;
 var num2=40;
 var result;
 result=num1>num2 ? 2*num1 : num1+num2;
 console.log(result);
 const arr=[12,21,44,55,57,888]
 arr[2]=999;
 arr.push(789,7009);
 arr.pop();
 arr.shift();
 arr.unshift(33)
 const arr2=arr[3];
console.log(arr)
 console.log( " 3th index array is " +arr2);
 console.log(arr.includes(15));
 const fruits=["banana","mango","blackberry","guaba","jackfruits"]
 console.log(fruits[3]);
 fruits[2]="jambura";
 console.log(fruits);
 const tourist=["bandorban","sundorban","cox's bazar"];
 tourist.push("sajek");
 tourist.push("rangamati","sentmartin");
 tourist.pop();
 console.log(tourist);
 const book=["data stracture","database","java"]
 console.log( "javascript book " +book.includes("javascript"));
 const array=[22,44,66];
 console.log(Array.isArray(array));
 const arr1=["tania","tripty"];
 const arr23=["tahmina","toma"];
 console.log(arr1.concat(arr23));
 

