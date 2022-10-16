//Split the code into sections

//Section 1: Bring the necessary html id's to js
const red = document.querySelector("#circlered");
const green = document.querySelector("#circlegreen");
const blue = document.querySelector("#circleblue");
const yellow = document.querySelector("#circleyellow");
const currentscore = document.querySelector("#scorenum");
const highestscore = document.querySelector("#highnum");
const start = document.querySelector("#start");
const light = document.querySelector("#onoroff")


//Section 2: Start off by allowing the button to turn green, indicates that the game has started
//Aside = Game begins in 3s as stated in the question
start.addEventListener('click', (event) =>{
    light.style.backgroundColor = "green";
    score = 1;

    setTimeout(() => {
        startOfTheGame(); 
    }, 3000);
    
});



//Section 3: Initialize a few variables before starting
/*Things we need: array for colors, array for each player click, score, highest score
and check if the player is playing*/

let series = [] //This will be the array needed for each color iteration
let player = [] //This is to save each click the player clicks
let score = 1; //This will keep track of the score, always starts as 1.
let biggestscore; //This will find the highest score the player achieved
let play = false; //The game hasn't started yet so it should be false!!!

//Section 4: Code for the game itself
/*Aside: Methods needed: 1. method to start the game, 2.method to end the game, 3.method for the colors
to flash, method to reset?, 4.method to check if its correct*/

function startOfTheGame() //4.1 First section = start the game
{
    player = []; //Strats with an empty array.
    play = false;
    biggestscore = 0; //Might need this Section 4.4
    currentscore.innerHTML = score;
    //Randomising the number, each one will represent a color.
    let randomnumber = (Math.floor(Math.random()*4)+1);
    
    //Aside: how do we add the array?
    series.push(randomnumber);
    for(i = 0; i < series.length;i++)
    {
        let bwoah = series[i] //The each element will flash from it.

        //The game must come faster in rounds 5, 9 and 13.

        if(series.length <= 4) //Flashing colors from 1-5 will be slow
        {
        setTimeout(() => 
        {
            colorFlash(bwoah);
        },i*1500); //To ensure that each flash sequence is delayed by a few milliseconds
        }

        if(series.length >= 5 && series.length < 9) //Flashing colors from 5-9 will be at medium pace
        {
        setTimeout(() => 
        {
            colorFlash(bwoah);
        },i*1100); 
        }

        if(series.length >= 9 && series.length <= 12) //Flashing colors from 9-13 will be at fast pace
        {
        setTimeout(() => 
        {
            colorFlash(bwoah);
        },i*900); 
        }

        if(series.length > 12) //Flashing colors from 12 and up will go berzerk!!
        {
        setTimeout(() => 
        {
            colorFlash(bwoah);
        },i*600); 
        }
    }

    round();
}

function round() 
{
    play = true;
}

//Method for each color might work to allow it to flash. Just to check use white.
function redCircle()
{
    red.style.backgroundColor = "white";
}

function greenCircle()
{
    green.style.backgroundColor = "white";
}

function blueCircle()
{
    blue.style.backgroundColor = "white";
}

function yellowCircle()
{
    yellow.style.backgroundColor = "white";
}

//Method to reset color
function colorReset()
{
    red.style.backgroundColor = "red";
    green.style.backgroundColor = "green";
    blue.style.backgroundColor = "blue";
    yellow.style.backgroundColor = "yellow";
}

function colorFlash(num)//4.3 this will make the color flash we bring each element from 4.1
{
    //1 = red, 2 = green, 3 = blue, 4 = yellow

    if(num == 1) //This will make the red circle flash to white
    {
        redCircle();
        setInterval(() => {
            colorReset();
        }, 2500); //1 second each to flash and then resets back
    }

    if(num == 2) //This will make the green circle flash to white
    {
        greenCircle();
        setInterval(() => {
            colorReset();
        }, 2500); //1 second each to flash and then resets back
    }

    if(num == 3) //This will make the blue circle flash to white
    {
        blueCircle();
        setInterval(() => {
            colorReset();
        }, 2500); //1 second each to flash and then resets back
    }

    if(num == 4) //This will make the yellow circle flash to white
    {
        yellowCircle();
        setInterval(() => {
            colorReset();
        }, 2500); //1 second each to flash and then resets back
    }
}

//4.4: We need a method to check if the player is correct or not.
function correct()
{
    //If statement to check if the player is correct for one round
    /*Aside: since each click is saved by the player array, if all of the colors are correctly repeated
    they should be equal same as the amount of arrays in the series itself*/ 
    if(player.length == series.length)
    {
        score++; //Iterates to the next round.
        currentscore.innerHTML = score; //Increments to the next round
        
        //A 2 second gap between each round is a necessity.
        setTimeout(() => {
            startOfTheGame();
        },2000);
    }

    //However if the player clicks the wrong color the game should finish(method to be created later)
    if(series[player.length-1] !== player[player.length-1])
    {
        gamesDone();
    }
}

function gamesDone()//4.2 Game is finished.
{
    series = []; //The array is back to null to restart the game
    light.style.backgroundColor = "red"; //lights should go back to red.

    //We also need to check if the score from the previous game was the highest
    if(player.length > biggestscore)
    {
        biggestscore = score;
    }
    highestscore.innerHTML = biggestscore;//Changes the highest score box if the previous score was the highest
    currentscore.innerHTML = 0; //Resets back to zero
    colorReset();
}

//Before working on the clicks we need to work on timing of the colors..

//Section 5: This section will now involve the user to click on the correct circle.
red.addEventListener('click', (event) =>{
    if(!play)
    {
        return;
    }

    else
    {
        colorFlash(1);
    setInterval(() => {
        colorReset(); //Resets the color after every click
    }, 1500);
    player.push(1); //Adds the element to the player's guesses array

    correct();
    }
})

green.addEventListener('click', (event) =>{
    if(!play)
    {
        return;
    }

    else
    {
        colorFlash(2);
    setInterval(() => {
        colorReset();
    }, 1500);
    player.push(2);

    correct();
    }
})

blue.addEventListener('click', (event) =>{
    if(!play)
    {
        return;
    }

    else
    {
        colorFlash(3);
    setInterval(() => 
    {
        colorReset();
    }, 1500);
    player.push(3);

    correct();
    }
})

yellow.addEventListener('click', (event) =>{
    if(!play)
    {
        return;
    }

    else
    {
        colorFlash(4);
    setInterval(() =>
    {
        colorReset();
    }, 1500);
    player.push(4);

    correct();
    }
})