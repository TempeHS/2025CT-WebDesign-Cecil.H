let entername = prompt("entername");
let playerGuess;
//let computerGuess = randomNum
let computerGuess = randomnum()
let playerFeedback ="test";
loadDIV ();
function randomnum(){
    return Math.floor(Math.random() * (10 - 1 + 1)+1)
}
function loadDIV() {}
document.getElementById("ScriptThisDIV").innerHTML = "<H1>hello " + entername+ "</H1>"
document.getElementById("ScriptThisDIV").innerHTML = "<H1>hello" + entername + "</H1><H2>Guess a Number"
document.getElementById("ScriptThisDIV").innerHTML = "<H1>hello" + entername + "</H1><H2>Guess a Number" + playFeedback