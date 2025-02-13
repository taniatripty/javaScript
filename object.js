const obj={
    name:'tania',
    age:24,
    edu:'B.sc in cse',
    skills:[ 'html','css','js','tailwind','c','phython']


}
obj.edu='cse';
console.log(obj.edu)
obj['age']=25;
obj['skills']=['html','css','js','tailwind','c']
console.log(obj)
console.log(obj.age)
console.log(obj['skills'])
const computer={
    name:'lanevo',
    hdd:512,
    ram:16,
    ulique:{
        display:'14 inch',
        color:'silver',
        varient:{
            model:['intel','rayzan']
        }
    }

}
 delete computer.ram;
 console.log(computer)
computer.ulique.varient.model=['rayzan']
console.log(computer.ulique.varient.model)
const obj2={
    name:'tripty',
    age:24,
    edu:'B.sc in cse',
    skills:[ 'html','css','js','tailwind']


}
for( const abj in obj2){
console.log(abj + " : " +obj[abj])
}
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors.red);
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020}
   
car['passenger capacity']=5
console.log(car['passenger capacity']);
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let key=Object.keys(student2)
console.log(key);
let counts=0;
for(let property of key){
    //console.log(property)
}
console.log(key.length);
let student3 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
for(let property in student3){
    console.log(property + " : " +student3[property] + " | " + "type :" + typeof student3[property])
}