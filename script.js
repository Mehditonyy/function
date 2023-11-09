let answer = prompt("What task would you like to run? (sum, convert, low, wordCounter, random)");

if(answer === "sum"){
    sum()
}else if(answer === "convert"){
    convert()

}else if(answer === "low"){
    low()
}
else if(answer === "random"){
    random()
}
else if(answer === "wordCounter"){
    wordCounter()
}

function sum() {

    let firstnumber = +prompt("What is your first number?");
    let secondnumber = +prompt("What is your second number?");

    let answer1 = firstnumber + secondnumber;


    alert(`${firstnumber} + ${secondnumber} = ${answer1}`);

    
} 

function random(){
    let nomber = prompt("Enter a number");

    let randomNumber = Math.ceil(Math.random() * (nomber));
    alert(`${randomNumber}`);
}


function convert(){
    let minute = prompt("how many minutes?");

    let answer2 = minute * 60;

    alert(`${minute}`+"into seconds is"+ `${answer2}`);
    
}


function low() {
    let firstNumberr = prompt("Enter the first number:");
    let secondNumberr = prompt("Enter the second number:");

    if (firstNumberr < secondNumberr) {
        alert(`${firstNumberr} is lower than ${secondNumberr}`);
    } else {
        alert(`${firstNumberr} is not lower than ${secondNumberr}`);
    }
}
function wordCounter() {
  let word = prompt("Enter a word:");
  let letterCount = word.length;
  alert(`There are ${letterCount} letters in the word '${word}'.`);
}




