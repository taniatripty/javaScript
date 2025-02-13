const str='tania';
const string="tania tripty";
const char=`b-baria`
const firstname='afrin \"sultana "';
console.log(firstname)
const name='it\'s tania'
console.log(str.length);
console.log(name)
console.log(string[2]);
console.log(char)
const name1='tania';
const name2='Tania';
if(name1.toLowerCase()===name2.toLowerCase()){
    console.log('both are same person')
}
else{
    console.log('they are not same person')
}
const flower='rose';
const flower2='rose  ';
if( flower.trim()===flower2.trim()){
    console.log('same flower');
}
else{
    console.log('different flower');
}
const frnd='tania , tripty , muna , puspita';
console.log(frnd.substr(8,6));
const name3="My name is Tania";
console.log(name3.replace('Tania','Tripty'));
const n1='tania';
const n2='tripty';
console.log(n1.concat(" " ,n2 ));
// const first= "hello" + " " +" world";
console.log("hello".concat( " ", "world"))
const rev='my name is tania akter tripty';
let reverse='';
// for(let name5 of rev){
//    reverse=name5+reverse
    
// }

// console.log(reverse)
// for( let i=0;i<rev.length;i++){
//     reverse=rev[i]+reverse;
// }
// console.log(reverse);
// console.log(rev.split('').reverse('').join(''))
console.log(rev.split('').reverse())
let str2 = "banana apple avocado";
let count = 0;

for (let i = 0; i < str2.length; i++) {
    if (str2[i] === 'a') {
        count++;
    }
}

console.log("Count of 'a':", count); // Output: 6
const names=' My Name is Tania Akter Tripty';
let times=0;
for(let i=0;i<names.length;i++){
    if(names[i]==='a' || names[i]==='A'){
        times++;
    }

}
console.log(times);
// let check=' a ,c, i,o,u ';
// if( check==='a' && 'e' && 'i' &&'o' && 'u'){
//     console.log('all are vowels')
// }
// else{
//     console.log('all are not vowels')
// }
let strings='Education';
let vowels=new Set(['a' ,'e','i','o','u']);
let foundvowels=new Set();
for(let char of strings.toLowerCase()){
    if(vowels.has(char)){
        foundvowels.add(char)
    }
}
let containAllVowels=foundvowels.size===5;
 console.log(containAllVowels)
// let str4 = "Education";  // Example string
// let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
// let foundVowels = new Set();

// for (let char of str4.toLowerCase()) {
//     if (vowels.has(char)) {
//         foundVowels.add(char);
//     }
// }

// let containsAllVowels = foundVowels.size === 5; // True if all vowels are found
// console.log(containsAllVowels); // Output: true
let str5 = "hello world! this is javascript.";
let words = str5.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}

console.log(result); // Output: "Hello World! This Is Javascript."
let tania= 'repalce A to  a';
 let repalce1=tania.replaceAll('A','B').replaceAll('a','b')
console.log(repalce1)
let str7 = "Example text with x and X.";
let updatedStr = "";

for (let i = 0; i < str7.length; i++) {
    if (str7[i] === 'x') {
        updatedStr += 'y';
    } else if (str7[i] === 'X') {
        updatedStr += 'Y';
    } else {
        updatedStr += str7[i];
    }
}

console.log(updatedStr); // Output: "Eyample teyt with y and Y."
