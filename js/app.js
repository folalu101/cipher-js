// prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.



$(document).ready(function(){

    //1) let name = prompt("Write your name");
let sentence = prompt("write a sentence on what you need for Ileya ");


console.log(sentence);


//2) create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.
let firstletter = sentence.charAt(0).toUpperCase();
    let lastletter = sentence.charAt(sentence.length -1).toUpperCase();
    let str = firstletter.concat(lastletter);

function letter(sentence){
    
    return str;
}
console.log(letter(sentence));

//3) Create another function that will reverse the order of these two letters and return the result.





// 4) Create another function that will reverse the order of these two letters and return the result.

function rev(sentence){
    let rev1 = sentence.split("");
    let rev2 = rev1.reverse();
    let rev4 = rev2.join("");

    return rev4;

}
console.log(rev(sentence));

//5) Create a third function that calls the other two functions you've just created.

function call(sentence){
    let Q1 = rev(sentence);
    let Q2 = letter(sentence);
    let Q3 = Q1.concat(Q2);

    return Q3;

}
console.log(call(sentence));








});