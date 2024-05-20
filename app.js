// Objective: Take an array of numbers and return the sum : sum should be 12

const arr = [2,4,6]; 
let sum = 0;
for(let i=0; i < arr.length; i++) {sum += arr [i];}
console.log(sum)




// Objective: Take an array of numbers and return the average : average should be 4

function average(numbers){
    let sum = 12;
    for (const num of numbers) {
}
return sum/numbers.length;
}
console.log(average([2,4,6]))





// Objective: Take an array of strings sand return the longest string

let arr = ["Abba", "Justyn", "Jason",];



function longestString() {
    let longestString = "";
    for (let i = 0; i < arr.length; i++) {
        if (
            typeof arr[i] === "string" &&
            arr[i].length > longestString.length
        ) {
            longestString = arr [i];
        }
    }
    return longestString

}

console.log(longestString())

// Transforming rows into Objects

const str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// .split turns a string into an array & splits up a string by a provided value

const words = str.split('\n');

//    starting   condition   direction

function parentArr(){

    let miniArr = []


 for(let i = 0; i < words.length; i++) {

    miniArr.push(words[i].split(','))
 } 
 return miniArr
}
const myArray = parentArr();

console.log(myArray)









