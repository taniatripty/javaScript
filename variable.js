console.log(33);


var year;
var time=20.25;
console.log(year);
var name='tania';
var x=true;
var y= false;
console.log(x);
console.log(typeof y);
console.log(typeof name);
console.log(typeof time);
console.log(typeof age);
var money=1000
var costOfAppleAndaOrange=700;
var returnTaka=money-costOfAppleAndaOrange; 
console.log(returnTaka)
var math=72.5;
var bio=65;
var chem=80;
var physics=35.45;
var bangla=99.50;
var average=(72.5+65+80+35.45+99.50)/5;

console.log(average);
var givenNumber=119;
var divider=5;
var remainder=givenNumber%divider;
console.log(remainder);
var taka=250;
if(taka<=300){
    console.log("you can buy biriani");
}
else{
    console.log("you have less money  to buy biriani");
}
 var weight=30;
 if(weight<=10){
    console.log("I will cary by myself");
 }
 else if(weight<=20){
    console.log(" I will take a rickshaw");
 }
else{
    console.log(" I will  take CNG")
}
 var year=2026;
 if(year<=2025){
console.log("somehow i wil manage a intern");
 }
 else{
    if(year=2026){
        console.log(" I wil take my life seiously")
    }
    else{
        if( year<=2027){
            console.log(" my wish i got a job before 2027")
        }
        else{
            console.log(" I am a loser")
        }
    }
 }
 var age=45;
 var price=500 ;
 if(age<=10){
    console.log(" you can eat free");
 }
 else if(age>=60){
    let discount=price*50/100;
    let payBill=price-discount;
    console.log(payBill)
 }
 else if( age>=50){
    let discount=price*25/100;
    let payBill=price-discount;
    console.log(payBill)
 }
 else if( age>=40){
    let discount=price*15/100;
    let payBill=price-discount;
    console.log(payBill)
 }
 else{
    console.log(price);
 }
 var passed=false;
 if(!!passed){
    console.log(" kopal valo pass korsis")

 }
 else{
    console.log(" kopale dukkho ache tor")
 }
 let yearsOld=25;
 let manage= yearsOld>18 ? " you are eligible for vote" : " can't voted";
 console.log(manage);

 var isLeader=true;
 var price=900;
 price = isLeader==true ?  price>1000 ? price/2 : price-200  : price;
 console.log(price);