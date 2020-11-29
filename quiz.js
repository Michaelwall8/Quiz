// Declarations -----------------------------
let answerChecked = "";
let currentQuestion = 1;

// start Button
let startBtn = document.getElementById("start");

// pages
let page1 = document.getElementById("firstPage");
let page2 = document.getElementById("questions")

// questions

// 1
// title
let questionTitle = document.getElementById("question-title")

// btns
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")


// START APP -----------------------------
function startQuiz(){
    // (exchange one attribute for another to modify)
    page1.setAttribute("class", "hide"); 
    page2.setAttribute("class", "appear")

    startQuestion1()
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

// OPTIONS CHECK (clicks)
function option1Check(){
    answerChecked = option1.getAttribute("answer")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
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
    
    // else if (currentQuestion === 3){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion4()
    // }
    // else if (currentQuestion === 4){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion5()
    // }
    // else if (currentQuestion === 5){
    //     currentQuestion = 1;
    //     endQuiz()
    // }
}

function option2Check(){
    answerChecked = option2.getAttribute("answer")
    console.log(answerChecked + "------------------------")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
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

    // else if (currentQuestion === 3){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion4()
    // }
    // else if (currentQuestion === 4){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion5()
    // }
    // else if (currentQuestion === 5){
    //     currentQuestion = 1;
    //     endQuiz()
    // }
}

function option3Check(){
    answerChecked = option3.getAttribute("answer")
    console.log(answerChecked + "------------------------")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
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

    // else if (currentQuestion === 3){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion4()
    // }
    // else if (currentQuestion === 4){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion5()
    // }
    // else if (currentQuestion === 5){
    //     currentQuestion = 1;
    //     endQuiz()
    // }
}

function option4Check(){
    answerChecked = option4.getAttribute("answer")
    console.log(answerChecked + "------------------------")
    
  
    if (answerChecked === "no"){
        // time -10 sec if wrong
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

    // else if (currentQuestion === 3){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion4()
    // }
    // else if (currentQuestion === 4){
    //     currentQuestion = currentQuestion + 1;
    //     startQuestion5()
    // }
    // else if (currentQuestion === 5){
    //     currentQuestion = 1;
    //     endQuiz()
    // }
}


option1.addEventListener("click", option1Check);
option2.addEventListener("click", option2Check);
option3.addEventListener("click", option3Check);
option4.addEventListener("click", option4Check);

startBtn.addEventListener("click", startQuiz);