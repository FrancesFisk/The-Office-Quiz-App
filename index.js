// create Questions

const questions = [
  {number: 1,
  question: "Michael Scott was the central character of the The Office for how many seasons?",
  answers: {
    a: "5",
    b: "6",
    c: "7",
    d: "8"
  },
  correctAnswer: "7",
  image: "https://uproxx.files.wordpress.com/2015/03/michael-scott-100-percent.png?w=650&h=366",
  imgAlt: "Michael Scott quotes Wayne Gretsky"
  },
  {number: 2,
  question: "Who does Angela’s senator husband have a love affair with?",
  answers: {
    a: "Kelly",
    b: "Nellie",
    c: "Erin",
    d: "Oscar"
  },
  correctAnswer: "Oscar",
  image: "https://lovelace-media.imgix.net/uploads/501/f4a20b80-b46b-0132-9a4c-0e01949ad350.jpg",
  imgAlt: "Senator Lipton touches Oscar"
  },
  {number: 3,
  question: "What is the name of Darryl's daughter?",
  answers: {
    a: "Jada",
    b: "McKenzie",
    c: "Zoey",
    d: "Kayla"
  },
  correctAnswer: "Jada",
  image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzYjRhNTYtMDMzYi00ZWZjLWI4MjctMTVhZmJmMDA3ZTQzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAzOTQ2ODU@._V1_.jpg",
  imgAlt: "Darryl Valerie and Jada"
  },
  {number: 4,
  question: "When Michael realizes he is in deep debt, how does he attempt to remedy his financial problems?",
  answers: {
    a: "Declaring bankruptcy by yelling, 'I declare bankruptcy!'",
    b: "Getting a second job as a telemarketer",
    c: "Running away by hopping on a train",
    d: "All of the above"
  },
  correctAnswer: "All of the above",
  image: "https://i.makeagif.com/media/12-22-2015/YCStQ8.gif",
  imgAlt: "Michael Scott jumping on a moving train"
  },
  {number: 5,
  question: "Where did Jim propose to Pam?",
  answers: {
    a: "Scranton branch rooftop",
    b: "Niagara Falls",
    c: "Gas Station",
    d: "Dwight's beet farm"
  },
  correctAnswer: "Gas Station",
  image: "http://tribzap2it.files.wordpress.com/2013/05/office-jim-pam-proposal.jpg?w=1400",
  imgAlt: "Jim proposes to Pam at gas station"
  },
  {number: 6,
  question: "What's the name of Dwight's alter ego he uses to celebrate Earth Day every year?",
  answers: {
    a: "Earthmanator",
    b: "Recyclops",
    c: "Green Enforcer",
    d: "Nature Cop"
  },
  correctAnswer: "Recyclops",
  image: "https://media.giphy.com/media/6Pypvk13Mk5vG/giphy.gif",
  imageAlt: "Dwight as Recyclops"
  },
  {number: 7,
  question: "In Season 7, why was Michael forced to have 6 hours of counseling with Toby?",
  answers: {
    a: "He hit Meredith with a car",
    b: "He forced Meredith to go to rehab",
    c: "He punished his nephew by spanking him in front of everyone",
    d: "He tried to kiss Oscar"
  },
  correctAnswer: "He punished his nephew by spanking him in front of everyone",
  image: "https://i.imgur.com/hxfWdJI.jpg",
  imgAlt: "Michael Scott spanking his nephew"
  },
  {number: 8,
  question: "Who was an original member of the band Scrantonicity?",
  answers: {
    a: "Kevin",
    b: "Creed",
    c: "Darryl",
    d: "Andy"
  },
  correctAnswer: "Kevin",
  image: "https://i.imgur.com/ENVF5m8.jpg",
  imgAlt: "Kevin in a Scrantonicity music video"
  },
  {number: 9,
  question: "Which branch did Karen and Andy come from before transferring to Scranton?",
  answers: {
    a: "Stamford",
    b: "Utica",
    c: "New York City",
    d: "Nashua"
  },
  correctAnswer: "Stamford",
  image: "http://bp1.blogger.com/_xb4J_D2tSqg/RehevuvRQHI/AAAAAAAAAKY/iem0_SdTFP8/s320/Shots+1.jpg",
  imgAlt: "Jim Karen Andy take shots"
  },
  {number: 10,
  question: "Michael promised a group of 3rd graders (Scott's Tots) he'd pay their college tuition if they graduated from high school. He didn't have the money, and instead gave them:",
  answers: {
    a: "laptops",
    b: "iPads",
    c: "iPhones",
    d: "laptop batteries"
  },
  correctAnswer: "laptop batteries",
  image: "https://i.imgur.com/kiwjdby.jpg",
  imgAlt: "Michael Scott and Scott's Tots"
  }
]

let currentQuestion = 0;
let currentScore = 0;

// hide the question area at first
function hideQuestion() {
  $(".question-area").hide();
}

// make the Start button lead to Question, hiding the start page 
function clearStartPage() {
  $(".start-page").on("click", ".start-quiz-btn", event => {
    $(".start-page").hide();
    $(".question-area").show();
  });
}

// create HTML for the current question
function showQuestion(item) {
  let questionBlock = 
    `<div class="question-page">
        <div class="question-box">
            <form>
                <h3 class="question">${item.question}</h3>
                <fieldset class="choices">
                    <label><input type="radio" value="${item.answers.a}"><span class="answer-choice">${item.answers.a}</span></label>
                    <label><input type="radio" value="${item.answers.b}"><span class="answer-choice">${item.answers.b}</span></label>
                    <label><input type="radio" value="${item.answers.c}"><span class="answer-choice">${item.answers.c}</span></label>
                    <label><input type="radio" value="${item.answers.d}"><span class="answer-choice">${item.answers.d}</span></label>
                </fieldset>
                <button type="button" class="submit">Submit</button>
            </form>
        </div>
        <div class="feedback-area">
        </div>
        <div class="current-status">
          <div class="current-question">Question ${item.number} out of 10</div>
          <div class="current-score">Current Score: ${currentScore}</div>
      </div> 
    </div>`;

  $(".question-area").html(questionBlock);
}

// determine if the submitted answer is correct or incorrect
function submitAnswer() {
  $(".question-area").on("click",".submit", event =>{
    event.preventDefault();
    let noAnswer;
    let currentCorrectAnswer = questions[currentQuestion].correctAnswer;
    // if the user doesn't make a choice and presses submit button 
    if ($("input:checked").val() === noAnswer) {
      requiresAnswerAlert();
    }
    // if the user chooses correct answer
    else if ($("input:checked").val() === currentCorrectAnswer){
      $(".question-box").hide();
      showCorrectFeedback(questions[currentQuestion]);
      // add to the number of questions correct score
      currentScore++;
    }
    // if the user chooses the incorrect answer
    else {
      $(".question-box").hide();
      showIncorrectFeedback(questions[currentQuestion]);
    }
  });
}

// transition to the next question and to the final page
function transitionPg() {
  $(".question-area").on("click",".next", event =>{ 
    event.preventDefault();
    if(currentQuestion === 9) {
      displayFinalPg(currentScore);
    } else {
      ++currentQuestion;
      showQuestion(questions[currentQuestion]);
    }
  });
}

// create Feedback block when user submits answer

function showIncorrectFeedback(item) {
  // hide submit button to prevent user from clicking multiple times
  $(".submit").hide();
  let questionImage = `<img src="${item.image}" alt="">`;
  let incorrectFeedback = `<span class='feedback-msg incorrect-answer-msg'>Nope, sorry. The correct answer was: ${item.correctAnswer}.</span>`
  const nextBtn = "<button type='button' class='next'>Next</button>";
  $(".feedback-area").html(questionImage + incorrectFeedback + nextBtn);
}

function showCorrectFeedback(item) {
  // hide submit button to prevent user from clicking multiple times
  $(".submit").hide();
  let questionImage = `<img src="${item.image}" alt="${item.imgAlt}">`;
  let correctFeedback = "<span class='feedback-msg correct-answer-msg'>You got it right!</span>"
  const nextBtn = "<button type='button' class='next'>Next</button>";
  $(".feedback-area").html(questionImage + correctFeedback + nextBtn);
}

function requiresAnswerAlert() {
  let chooseAnswerMsg = "<span class='feedback-msg incorrect-answer-msg'>Please choose an answer</span>";
  $(".feedback-area").html(chooseAnswerMsg);
}

// display the final page with overall score and Play Again button
function displayFinalPg(score) {
  $(".question-area").hide();
  $(".final-pg-area").html(
    `<div class="final-page">
        <img src="https://media1.tenor.com/images/c6a8a033b1d860ab90d0abd05f57a7e4/tenor.gif?itemid=5669794" alt="Dwight slow clapping">
        <h2>Way to go! You got ${score} out of 10 correct!</h2>
        <button type="button" class="play-again-btn">Play Again</button>
    </div>`);
  watchPlayAgainBtn();
}

// reload the quiz when user presses Play Again button 
function watchPlayAgainBtn() {
  $(".final-page").on("click", ".play-again-btn", event =>{
      location.reload();
  });
}

// run the major functions
function runQuiz() {
  hideQuestion();
  clearStartPage();
  submitAnswer();
  transitionPg();
  showQuestion(questions[currentQuestion]);
}

$(runQuiz());

