(function(){
    function buildQuiz(){
      // variable for HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add question and the answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      //one string of HTML and puts it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from the quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add number of correct answers
          numCorrect++;
  
          // color answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // number of correct answers
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
          question: "Budapest is the captial of which country?",
          answers: {
            a: "Serbia",
            b: "Romania",
            c: "Hungary"
          },
          correctAnswer: "c"
        },
        {
          question: "On which continent is the Vatican located?",
          answers: {
            a: "Europe",
            b: "North America",
            c: "Asia"
          },
          correctAnswer: "a"
        },
        {
          question: "The Yellowstone Volcano is located in which State?",
          answers: {
            a: "Montana",
            b: "Idaho",
            c: "Nevada",
            d: "Wyoming"
          },
          correctAnswer: "d"
        },
        {
            question: "At the end of WWII which country captured Berlin?",
            answers: {
              a: "USA",
              b: "USSR",
              c: "Britain",
            },
            correctAnswer: "b"
          },
          {
            question: "Which year did the first humans land on the Moon?",
            answers: {
              a: "1971",
              b: "1965",
              c: "1969",
            },
            correctAnswer: "c"
          }
      ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();

//Date
var d = new Date()
document.getElementById("date").innerHTML = d

