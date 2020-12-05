// test
let players = [];
let player = {};
let initials;

// Declarations -----------------------------
let answerChecked = "";
let currentQuestion = 1;
let timer;
let highScore;

// start Button
let startBtn = document.getElementById("start");

// submit 
let submitBtn = document.getElementById("submit");


// pages
let page1 = document.getElementById("firstPage");
let page2 = document.getElementById("questions");
let page3 = document.getElementById("end-screen");

// questions

// 1
// title
let questionTitle = document.getElementById("question-title")

// btns
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")

// timer
let time = document.getElementById("time");


// START APP -----------------------------
function startQuiz(){
    // (exchange one attribute for another to modify)
    page1.setAttribute("class", "hide"); 
    page2.setAttribute("class", "appear")

    // Timer i000 = 1 second
    time.innerHTML = 40;

    timer = setInterval(startTimer, 1000);

    startQuestion1()
}

// End Quiz
function endQuiz(){
    // GET HIGHSCORE
    highScore = time.innerHTML

    // reset timer to 0
    time.innerHTML = 0

    // exit the setInterval function
    clearInterval(timer);

    page2.setAttribute("class", "hide"); 
    page3.setAttribute("class", "appear")

    document.getElementById("final-score").innerHTML = highScore;
}

// start timer
function startTimer(){
    // decrease time by 1 every second
   time.innerHTML = time.innerHTML - 1;

   // if the timer goes below or equal 0 the quiz needs to end
   if (time.innerHTML <= 0){
       console.log("timer to 0")
       time.innerHTML = 0
       endQuiz();

       // exit the setInterval function
       clearInterval(timer);
       
   }
}

// submit data
function sendHighscore() {    
    // getting initials from input field
    initials = document.getElementById("name").value;

    // creating player obj with highscore (timer) and name (initials)
    player = {
        name: initials,
        highscore: highScore
    }


    // get players from localstorage
    players = JSON.parse(localStorage.getItem("players") || "[]");

    // add the new player to the array
    players.push(player);

    // Send back the array of players including the new player 
    localStorage.setItem("players", JSON.stringify(players));

    // change page to highscores
    //window.location("")
}

// question 1 function

function startQuestion1(){

    // access the text inside the html tag with id="question-title"
    questionTitle.innerHTML = "whats Rodney Mullen last name?"
    option1.innerHTML = "Benny"
    option2.innerHTML = "Mullen"
    option3.innerHTML = "Fredericten"
    option4.innerHTML = "Glenting"

}

function startQuestion2(){

    // access the text inside the html tag with id="question-title"
    questionTitle.innerHTML = "where do you live?"
    option1.innerHTML = "Canada"
    option2.innerHTML = "USA"
    option3.innerHTML = "Chile"
    option4.innerHTML = "Argentina"

    option1.setAttribute("answer", "yes")
    option2.setAttribute("answer", "no")
    option3.setAttribute("answer", "no")
    option4.setAttribute("answer", "no")

}

function startQuestion3(){

    // access the text inside the html tag with id="question-title"
    questionTitle.innerHTML = "Canada capital?"
    option1.innerHTML = "Madrid"
    option2.innerHTML = "Lima"
    option3.innerHTML = "Santiago"
    option4.innerHTML = "Ottawa"

    option1.setAttribute("answer", "no")
    option2.setAttribute("answer", "no")
    option3.setAttribute("answer", "no")
    option4.setAttribute("answer", "yes")

}


function startQuestion4(){

    // access the text inside the html tag with id="question-title"
    questionTitle.innerHTML = "Canada?"
    option1.innerHTML = "Maid"
    option2.innerHTML = "Li"
    option3.innerHTML = "Sio"
    option4.innerHTML = "Oa"

    option1.setAttribute("answer", "yes")
    option2.setAttribute("answer", "no")
    option3.setAttribute("answer", "no")
    option4.setAttribute("answer", "no")

}

function startQuestion5(){

    // access the text inside the html tag with id="question-title"
    questionTitle.innerHTML = "hghg"
    option1.innerHTML = "fd"
    option2.innerHTML = "gfvgbfb"
    option3.innerHTML = "bffhb"
    option4.innerHTML = "hjhmm"

    option1.setAttribute("answer", "no")
    option2.setAttribute("answer", "no")
    option3.setAttribute("answer", "yes")
    option4.setAttribute("answer", "no")

}


// OPTIONS CHECK (clicks)
function option1Check(){
    answerChecked = option1.getAttribute("answer")
    
    // when clicked the button with an attribute called 'answer' 
    // it check for the value of that atribute and if the value is "no" 
    // it falls into the if right below
    if (answerChecked === "no"){                                                       // 0 == "0" is true     // 0 === "0" is false
        // time -10 sec if wrong
        time.innerHTML = time.innerHTML - 10;
    }

    // next page
    // if statament to pick the right next question
    if (currentQuestion === 1){
        currentQuestion = currentQuestion + 1;
        startQuestion2()
    }

    else if (currentQuestion === 2){
        currentQuestion = currentQuestion + 1;
        startQuestion3()
    }
    
    else if (currentQuestion === 3){
        currentQuestion = currentQuestion + 1;
        startQuestion4()
    }
    else if (currentQuestion === 4){
        currentQuestion = currentQuestion + 1;
        startQuestion5()
    }
    else if (currentQuestion === 5){
        currentQuestion = 1;
        endQuiz()
    }
}

function option2Check(){
    answerChecked = option2.getAttribute("answer")
    console.log(answerChecked + "------------------------")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
        time.innerHTML = time.innerHTML - 10;
    }

    // next page
    // if statament to pick the right next question
    if (currentQuestion === 1){
        currentQuestion = currentQuestion + 1;
        startQuestion2()
    }

    else if (currentQuestion === 2){
        currentQuestion = currentQuestion + 1;
        startQuestion3()
    }

    else if (currentQuestion === 3){
        currentQuestion = currentQuestion + 1;
        startQuestion4()
    }
    else if (currentQuestion === 4){
        currentQuestion = currentQuestion + 1;
        startQuestion5()
    }
    else if (currentQuestion === 5){
        currentQuestion = 1;
        endQuiz()
    }
}

function option3Check(){
    answerChecked = option3.getAttribute("answer")
    console.log(answerChecked + "------------------------")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
        time.innerHTML = time.innerHTML - 10;
    }

    // next page
    // if statament to pick the right next question
    if (currentQuestion === 1){
        currentQuestion = currentQuestion + 1;
        startQuestion2()
    }

    else if (currentQuestion === 2){
        currentQuestion = currentQuestion + 1;
        startQuestion3()
    }

    else if (currentQuestion === 3){
        currentQuestion = currentQuestion + 1;
        startQuestion4()
    }
    else if (currentQuestion === 4){
        currentQuestion = currentQuestion + 1;
        startQuestion5()
    }
    else if (currentQuestion === 5){
        currentQuestion = 1;
        endQuiz()
    }
}

function option4Check(){
    answerChecked = option4.getAttribute("answer")
    console.log(answerChecked + "------------------------")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
        time.innerHTML = time.innerHTML - 10;
    }

    // next page
    // if statament to pick the right next question
    if (currentQuestion === 1){
        currentQuestion = currentQuestion + 1;
        startQuestion2()
    }

    else if (currentQuestion === 2){
        currentQuestion = currentQuestion + 1;
        startQuestion3()
    }

    else if (currentQuestion === 3){
        currentQuestion = currentQuestion + 1;
        startQuestion4()
    }
    else if (currentQuestion === 4){
        currentQuestion = currentQuestion + 1;
        startQuestion5()
    }
    else if (currentQuestion === 5){
        currentQuestion = 1;
        endQuiz()
    }
}

// Buttons
option1.addEventListener("click", option1Check);
option2.addEventListener("click", option2Check);
option3.addEventListener("click", option3Check);
option4.addEventListener("click", option4Check);

submitBtn.addEventListener("click", sendHighscore);

startBtn.addEventListener("click", startQuiz);


