// prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.



$(document).ready(function(){

    //1) let name = prompt("Write your name");
let sentence = prompt("write a sentence on what you need for Ileya ");

// prompt my sentence
console.log(sentence);
// to get the first letter
let firstletter = sentence.charAt(0).toUpperCase();
// to get the last letter
let lastletter = sentence.charAt(sentence.length -1).toUpperCase();

// to concat first and last
let firstandlast = firstletter.concat(lastletter);

// to count number of  and round down
let  countandround = (sentence.length).Math.round();


// to reverse the first and last letter
// let reversal = (firstletter.concat).reverse().lastletter.join("");

//2) create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

function letter(){
    return firstandlast;
    
}
// invoke my fucntion
console.log(letter());

//3) Create another function that will reverse the order of these two letters and return the result.
// function revfirstlast(sentence){
// return reversal;

// }
// console.log(revfirstlast(sentence));





// 4) Create another function that will reverse the order of these two letters and return the result.
// mine
function rev(){
    let rev1 = sentence.split("");
    let rev2 = rev1.reverse();
    let rev4 = rev2.join("");

    return rev4;

}
console.log(rev());

//5) Create a third function that calls the other two functions you've just created.

function call(sentence){
    let Q1 = rev(sentence);
    let Q2 = letter(sentence);
    let Q3 = Q1.concat(Q2);

    return Q3;

}
console.log(call(sentence));

// 6) Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence.

function counting(){
   return countandround;

}
console.log(counting());








});