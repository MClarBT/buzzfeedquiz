let readlineSync = require('readline-sync');

/* Project requirements:
- Be creative
- Your quiz should have at least 5 questions
- At least one question must depend on a response to a previous question. (“Choose your own Adventure” style.)

Your code should run smoothly (no errors), regardless of user input.

Make sure you push yourself outside of your comfort zone to explore new methods and techniques.*/


//here's some code to get started

/* let  readlineSync  =  require('readline-sync');

let thisIsLove = 0;
let thisIsNotLove = 0;

function readiness() {
  getStarted = readlineSync.question( "Are you ready? Type yes or no.\n");
  if (getStarted === "yes") {
    console.log("Excellent. Let's proceed.\n");
  }
  else if (getStarted === "no") {
    console.log("Fine. I didn't want to play with you anyway.\n");
  }
  else {
      readiness();
    }
}

function questionOne() {
 // write some code that displays a question and some answer choices to a user
// write some code that changes the value of your variables based on how the user responds
}

function calculateLove() {
// write some code that compares your variables to each other and displays different results to your user based on those comparisons.
}

console.log("WELCOME TO CECE'S LOVE CALCULATOR!\n")

let name = readlineSync.question( "What is your name?\n")

console.log(`Ok ${name}. I'm going to ask you a series of questions. Based on your answers, I'm going to tell you whether your crush likes you back.\n`)

readiness();
questionOne();
calculateLove();*/

//okay, so what will my quiz be about?
/* a quiz about pizza? Love, pizza...what kind of person you'd be
most compatible with based on how you prefer your pizza to be like.*/


function isUserReady() {
  let start = readlineSync.question( "\nThe quiz I'm suggesting you take is what kind of person you'd be most compatible with based on how you prefer your pizza to be like. Type yes if you're ready to take the quiz or no if you aren't: ");
  if (start === "yes") {
    console.log("\nAwesome, let's do this.\n");
  }
  else if (start === "no") {
    console.log("\nOkay, have a nice day!\n");
  }
  else {
      isUserReady();
    }
}


/* if i can think of five questions for this one...*/

//problem is if I put wrong input, the computer knows it, but kind of continues the buzzfeedquiz!

function questionOne() {
 // write some code that displays a question and some answer choices to a user
// write some code that changes the value of your variables based on how the user responds

//I think I'll google the different types of pizza out there....

//I think question 1 will be do you prefer your pizza to have minimal toppings, like the Neapolitan pizza, or do you prefer your pizza to have many toppings, like the California style pizza?

//let name = readlineSync.question( "What is your name?\n")

// console.log("All righty, then. Here's question 1: Do you prefer your pizza to have minimal toppings or to have many toppings? Please type either many or minimal: ");

let toppingResponse = readlineSync.question("\nAll righty, then. Here's question 1: Do you prefer your pizza to have minimal toppings or to have many toppings? Please type either minimal or many: ");

if(toppingResponse === "minimal") {
  console.log("\nYour answer was \"minimal\". You'd be compatible with somebody who prefers a simple life and/or who doesn't like to be very flamboyant. A humble, simple person would be great for you.\n ");
}

else if(toppingResponse === "many")
{
  console.log("Your answer was \"many\". You'd be compatible with somebody who likes to jazz up life a bit even if it gets more complicated. Somebody who's kind of innovative.\n ");
}

else {
  console.log("\nThat's not a choice, here's the question again: ");
  questionOne();
}


}

function questionTwo() {
//do you prefer for your pizza crust to be thin or thick?

  let crustThicknessResponse = readlineSync.question("\nHere's question 2: Do you prefer a thin pizza crust or a thick pizza crust? Please type either thin or thick: ");

  if(crustThicknessResponse === "thin") {
    console.log("\n Your answer was \"thin\". You'd be more compatible with somebody who prefers a simple life and is more practical. Your soul mate probably would enjoy talking about stuff like philosophy.\n");
  }

  else if(crustThicknessResponse === "thick") {
    console.log("\n Your answer was \"thick\". You'd be more compatible with somebody who likes to have several things going on in life and likes to have a good amount of fun now and then. He or she would also probably enjoy expensive stuff.\n");
  }

  else {
    console.log("\n That's not a choice, here's the question again: ");
    questionTwo();
  }

}

function questionThree() {
  //do you prefer your pizza to be deep, like the chicago deep dish, or not as deep?
  let depthResponse = readlineSync.question("\nHere's question 3: Do you prefer your pizza to be deep or flat? Please type either deep or flat: ");

  if(depthResponse === "deep") {
    console.log("\n Your answer was \"deep\". You'd be more compatible with somebody who has cool ideas and likes to introspect. Your soul mate would kind of keep to him or herself most of the time. \n");
  }

  else if(depthResponse === "flat") {
    console.log("\n Your answer was \"flat\". You'd be more compatible with somebody who is extroverted. Somebody who doesn't do much of introspecting but is great at entertaining you. \n")
  }

  else {
    console.log("\n That's not a choice, here's the question again: ");
    questionThree();
  }


}

function questionFour() {
  //do you prefer your pizza to be cut in squares and/or strips, or do you prefer for it to be cut diagonally?
  let cutResponse = readlineSync.question("\nHere's question 4: Do you prefer your pizza to be cut in squares and strips or for it to be cut diagonally? Please type either squares and strips or diagonally: ");

  if(cutResponse === "squares and strips")
  {
    console.log("\n Your answer was \"squares and strips\". You'd be more compatible with somebody who prefers some sort of routine and organization in his or her life. Somebody who's analytical. \n");
  }

  else if(cutResponse === "diagonally")
  {
    console.log("\n Your answer was \"diagonally\". You'd be more compatible with somebody who's kind of artistic and enjoys shaking up his or her routine once in a while. \n");
    //questionSix();
  }

  else {
    console.log("\n That's not a choice, here's the question again: ");
    questionFour();
  }

}


function questionFive() {
  //do you prefer your pizza crust to be golden or not as much?
  let crustColorResponse = readlineSync.question("Here's question 5: Do you prefer your pizza crust to be golden or not as golden? Please type either golden or not as golden: ");

  if(crustColorResponse === "golden")
  {
    console.log("\nYour answer was \"golden\". You'd be more compatible with somebody who supports you and who is demonstrative of his or her warmth toward you.\n ");
  }

  else if(crustColorResponse === "not as golden")
  {
    console.log("\nYour answer was \"not as golden\". You'd be more compatible with somebody who is not super mushy, but loves you with his or her emotions under control.\n ")
  }

  else {
    console.log("\nThat's not a choice, here's the question again: ");
    questionFive();

  }
}

function questionSix() {
  //do you prefer to eat your pizza folded?
  let foldResponse = readlineSync.question("Here's question 6: Do you prefer folding your pizza when you eat it or not? Please type in either folded or not folded: ");

  if(foldResponse === "folded")
  {
    console.log("\nYour answer was \"folded\". You'd be more compatible with somebody who is flexible in life. Somebody who's kind of easygoing. \n");
  }

  else if(foldResponse === "not folded")
  {
    console.log("\n Your answer was \"not folded\". You'd be more compatible with somebody who is strong and doesn't let life get them down much. \n");
  }

  else {
    console.log("\nThat's not a choice, here's the question again: ");
    questionSix();
  }

}

function questionSeven() {
  //do you prefer a pizza with the tomato sauce under the toppings or over?
  let tomatoSauceResponse = readlineSync.question("Here's the last question, question 7: Do you prefer a pizza with the tomato sauce under the toppings or over the toppings? Please type either under or over: ");

  if (tomatoSauceResponse === "under")
  {

	  console.log("\nYour answer was \"under\". You'd be more compatible with somebody who seemingly isn't too emotional, but does have his or her sweetness within. Somebody who's comfortable with showing his or her feelings only after they get really attracted to you. \n");
  }

  else if(tomatoSauceResponse === "over")
  {
     questionEight();
  }

  else
  {
	   console.log("\nThat's not a choice, here's the question again: ");
     questionSeven();
  }

}


function questionEight() {

  let tomatoSauceQuestion2Response = readlineSync.question("\nYour answer was \"over\". Since you answered that, here's the bonus question, question 8: The tomato pie is a pizza that has the tomato sauce over the toppings. Would you prefer eating that pizza? Type yes or no: ");

  if(tomatoSauceQuestion2Response === "yes")
  {
    console.log("\nYour answer was \"yes\". You'd be more compatible with somebody who is especially sweet towards you and is very demonstrative of it. Your soul mate would be a bit more open about his or her feelings. \n");
  }

  else if(tomatoSauceQuestion2Response === "no")
  {
    console.log("\nYour answer was \"no\". In that case, you'd get along better with somebody who is again really sweet towards you, but isn't mushy all the time.\n");
  }

  else {
    console.log("\nThat's not a choice, here's the question again:\n ");
    questionEight();
  }
}


isUserReady();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven(); //here, questionEight is called
