// Objective: Take an array of numbers and return the sum : sum should be 12

/*const arr = [2,4,6]; 
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
*/




// Objective: Take an array of strings sand return the longest string

/*let arr = ["Abba", "Justyn", "Jason",];



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
*/




// Objective: Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

let words = ["Abba", "Justyn", "Jason"];
let i = 4
words.sort(function filterLongWords(x, i) {
    if (words[x].length > i){
        return words[x];
    }
    else {
        console.log("No words are longer than i")
    }
});
