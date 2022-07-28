const quizData = [ //array with quiz questions
    {
        question: "How many days per week do you eat meat?",
        a: "Everyday",
        b: "Once every two to three days",
        c: "Once a week",
        d: "Never",
        worst: "a",
        bad: "b",
        ok: "c",
        good: "d",
    },
    {
        question: "How do you normally commute?",
        a: "Car",
        b: "Always using public transportation",
        c: "Sometimes using public transportation",
        d: "Walking/Cycling",
        worst: "a",
        bad: "b",
        ok: "c",
        good: "d",
    },
    {
        question: "Is the energy in your home...",
        a: "100% non renewable",
        b: "Less than 50% renewable",
        c: "More than 50% renewable",
        d: "100% renewable",
        worst: "a",
        bad: "b",
        ok: "c",
        good: "d",
    },
    {
        question: "How many hours do you fly in a normal year",
        a: "12+ hours per year",
        b: "5-12 hours per year",
        c: "4 hours per year",
        d: "Never",
        worst: "a",
        bad: "b",
        ok: "c",
        good: "d",
    },
    {
        question: "How often do you recycle the recyclable products you buy?",
        a: "Never",
        b: "Sometimes",
        c: "Most of the times",
        d: "Always",
        worst: "a",
        bad: "b",
        ok: "c",
        good: "d",
    },
];

//sync hmtl variables with javascript ones
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz() 

function loadQuiz() { //display quiz questions
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() { /*No answer selected for next question before click*/ 
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() { //submit the user option as answer
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer
}

submitBtn.addEventListener("click",()=> {
    const answer = getSelected();
    if(answer) { //assign points depending on the answer
        if(answer === quizData[currentQuiz].worst) {
            score = score + 6;
        }
        else if(answer === quizData[currentQuiz].bad) {
            score = score + 4;
        }
        else if(answer === quizData[currentQuiz].ok) {
            score = score + 3;
        }
        else if(answer === quizData[currentQuiz].good) {
            score = score + 1;
        }
    
        currentQuiz ++;

        if(currentQuiz < quizData.length) { /*Load all questions until quiz is done */
            loadQuiz();
        }
        else { /*All questions answered */
            if(score < 6) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"><center> 4.4 tonnes of CO2 annually!</center> </h2> 
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> Well done and keep saving the earth :)) </center> </h4>
                    <h4> <center> If you want to learn more about how to reduce your carbon footprint, please visit this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
            else if(score > 6 && score <=10 ) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"> <center> 5.4 tonnes of CO2 annually! </h2> </center>
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> Well done and keep saving the earth :)) </center> </h4>
                    <h4> <center> If you want to learn more about how to reduce your carbon footprint, please visit this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
            else if (score > 10 && score <15) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"> <center> 6.6 tonnes of CO2 annually! </h2> </center>
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> Well done and keep saving the earth :)) </center> </h4>
                    <h4> <center> If you want to learn more about how to reduce your carbon footprint, please visit this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
            else if(score>=15 && score<19) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"> <center> 7.4 tonnes of CO2 annually! </h2> </center>
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> Well done and keep saving the earth :)) </center> </h4>
                    <h4> <center> If you want to learn more about how to reduce your carbon footprint, please visit this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
            else if(score >=19 && score<23) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"> <center> 9.1 tonnes of CO2 annually. </h2> </center>
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> We believe that you can do better. Join us in our fight to reduce carbon footprint </center> </h4>
                    <h4> <center> Learn more about how to reduce your carbon footprint, by visiting this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
            else if(score >=23 && score<27) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"> <center> 10.7 tonnes of CO2 annually. </h2> </center>
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> We believe that you can do better. Join us in our fight to reduce carbon footprint </center> </h4>
                    <h4> <center> Learn more about how to reduce your carbon footprint, by visiting this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
            else if(score >=27) {
                quiz.innerHTML = `
                <div class = "endtext">
                    <h2 class="titleres"> Carbon Footprint Calculator Results</h2>
                    <h3> <center> Your annual carbon footprint is: </h3> </center>
                    <h2 class="tonnesres"> <center> 12.2 tonnes of CO2 annually. </h2> </center>
                    <h4> <center> The annual UK average carbon footprint per person is 8.3 tonnes of CO2 </center> </h4>
                    <h4> <center> We believe that you can do better. Join us in our fight to reduce carbon footprint </center> </h4>
                    <h4> <center> Learn more about how to reduce your carbon footprint, by visiting this <a class="links" href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"> website</a> </center> </h4>
                    <button id="reloadbtn" onclick="location.reload()">Retake The Quiz</button>
                </div>`
            }
        }
    }

})