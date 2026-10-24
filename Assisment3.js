//11 reverse an array
let input =[1,2,3,4,5];
console.log(input.reverse());
//12 Check whether a string contains the word "Java".
let input1= "I am learning JavaScript";
console.log(input1.includes("Java"));
//13 count vowels in a string

let str ="hello";
let count=0;

for(let i=0;i<str.length;i++){
    if("aeiou".includes(str[i])){
        count++;
    }
}

console.log(count);
