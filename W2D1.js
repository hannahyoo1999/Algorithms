var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor); //output: 1
console.log(ceiling); //output: 4
console.log(random); //output: random number between 0 and 1

//Dice Roller
function d6() {
    var roll = Math.random();
    roll= Math.floor(roll*6)+1;// your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

//Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var randnum= Math.floor(Math.random()*lifesAnswers.length);

lifesAnswers= lifesAnswers[randnum]
console.log("the magic ball say " + lifesAnswers);
