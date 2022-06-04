// prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.



$(document).ready(function(){

    // let name = prompt("Write your name");
let sentence = prompt("write a sentence on what you need for Ileya ");


console.log(sentence);


// create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

function letter(sentence){
    let firstletter = sentence.charAt(0).toUpperCase();
    let lastletter = sentence.charAt(sentence.length -1).toUpperCase();
    let str = firstletter.concat(lastletter);
    
    return str;
}
console.log(letter(sentence));








});