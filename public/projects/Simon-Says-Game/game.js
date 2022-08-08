const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
// originally used Const which are not allowed to be manipulated inside of functions. Changed to let to allow manipulation to occur. I need to decide ahead of time to either use const or let. I need to determine prior to starting a project if the variable being used will be manipulated or if it needs to be a constant in order for everything else to work. In this case buttonColors can remain a const because they are never manipulated.

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("level " + level);
        nextSequence();
        started=true;
    }
})

$(".btn").click(function() {
    const userChosenColor=$(this).attr("id");
    // this is another way of saying 'any'. When a button is detected to have been clicked identify any attribute id and present it and inform the user that they clicked that pattern.
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
    animatePress(userChosenColor);
    // define sound as coming from userChosenColor avoids the empty array variable being selected. If the array is selected then there will be a continuous stream of inputs added into the array which will call for sound files that cannot be produced. userChosenColor simplifies this and only performs the color selected.
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success');
        if (userClickedPattern.length === gamePattern.length){
           setTimeout(function() {
               nextSequence();
           }, 1000);
       } 
    } else {
        console.log('wrong');
        var audio = new Audio("sounds/wrong.mp3")
        audio.play();
        $("body").addClass("game-over")
        setTimeout (function() {
            $("body").removeClass("game-over");
        }, 100)
        $("#level-title").text("Game Over, Press Any Key to Restart ");
        startOver();
        // You have to include the function you want to go to. It will not execute automatically just because you say so in the function. Functions are just ideas that must be linked together in order to create a purpose. Triggers occur. Think back to map editor days of StarCraft as a child if this helps. Alerts only trigger when certain requirements are met. Program the event first and then establish how each event becomes initiated.
    }
};

function nextSequence() {
    userClickedPattern = [];
    // reset userClickedPattern to an empty array for each level.
    level++;
    $("#level-title").text("Level " + level);
    // a for loop would have also worked in this area if need. but for simplicity sake level++ will work just fine because it has alredy been defined previously.
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}


function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play(); 
}

function animatePress(currentColor) {
    $('#'+currentColor).addClass("pressed"); 
    setTimeout(function() {
        $('#'+currentColor).removeClass("pressed");
    }, 100);
    // this only works because the class is set to affect box attributes. Text with ID are unaffected.
}

function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
    }