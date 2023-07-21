console.log("First Line");

let questionsBankArray = [

  
        ["Commonly used data types DO NOT include:",
        "alerts",

            ["strings", 
            "booleans", 
            "numbers", 
            "alerts"
            ]
        ],

        ["The condition in an if/else statement is enclosed in _____.",
        "parenthesis",
        
            ["quotes", 
            "curly brackets", 
            "parenthesis", 
            "square brackets"
            ]

        ],
    

    
        ["Arrays in JavaScript can be used to store _____.",
        "all of the above",

            ["numbers and strings", 
            "other arrays", 
            "booleans", 
            "all of the above"
            ]
        ],
        

    
        ["String values must be enclosed within _____ when being assigned to variables.",
            "quotes",

            ["quotes", 
            "curly brackets", 
            "parenthesis", 
            "commas"
            ]
        ],   
        
        ["This tool is often used for debugging to print content",
        "console.log",  

            ["JavaScript", 
            "terminal/bash", 
            "for loops", 
            "console.log"            
            ]
        ],

    
        ["Where does JavaScript fit in the following classes of languages?",
        "Object-Based",

            [
            "Object-Oriented",
            "Object-Based",
            "Assembly-language",
            "High-level"
            ]
        ],

    
        
        ["What happens when the Javascript interpreter encounters an empty statement?",
        "It ignores the statement",

            [
            "It issues a warning",
            "It prompts to complete the statement",
            "It halts with an error",
            "It ignore the statement"
            ]

        ],
    
    
        ["JavaScript is interpreted by _________",
        "Client",

            [
            "Client",
            "Server",
            "Object",
            "None of the above"
            ]
        ],
        
        
        ["Which of the following is not a valid JavaScript variable name?",
        "2names",

        [
            "2names",
            "_first_and_last_names",
            "FirstAndLast",
            "None of the above"
        ],

        "This method creates a new array or a string from an old one without changing the original",

        "Slice",

            [
                "Reverse",
                "Shift",
                "Slice",
                "Splice"
            ]
        ],

    ["This statement tests for a specific condition.",
    "If",

        [
            "Select",
            "If",
            "Switch",
            "For"
        ]
    ],
    
    ["This is not considered a JavaScript operator?",
     "delete",

        [
            "new",
            "this",
            "delete",
            "typeof"
        ]
    ],

    ["Select the MOST true statement",
     "Both of the above.",

        [
            "You should not use any of the JavaScript reserved keyword as variable name.",
            "JavaScript variable names should not start with a numeral (0-9).",
            "Both of the above.",
            "None of the above."
        ]
    ],


    ["This variables is visible only within a function where it is defined",
      "local variable",
       [
            "global variable",
            "local variable",
            "Both of the above.",
            "None of the above."
        ]
    ],


    ["Use this method to find an ID element",
     "getElementbyId()",

            ["getElementsById()", 
            "getElementByID()", 
            "getElementbyId()", 
            "getElementsById()"
        ]
    ],

    ["Use this to compare if two variables are equal in every way.",
    "===",

            ["=",
             "==", 
             "===", 
             "!="
            ]
    ],

    ["Math.random() returns one of the following:",
    "a number between 0 and 1",

            [
            "a number between 1 and 9", 
            "a number between 0 and 9", 
            "a number between 0 and 1", 
            "a number between 0 and 99"
            ]
    ], 

    ["The appendChild() method places a node as the ____ child.",
    "last",

            [
            "first", 
            "place you looked", 
            "random", 
            "last"]

    ],


    ["This is the first index in an array.",
    "0",

        [
        "i",
         "first",
         "0", 
         "custom"
        ],
    ], 


    ["Name a creating Javascript developer",
    "Brendan Eich",

        [
        "Edward Linux", 
        "Brendan Eich", 
        "Bill Gates", 
        "Linus Torvald"
        ]
    ],
     
    
    ["The following is an example of an HTML event",
      "All the above.",

            [
            "User hitting a key",
            "User clicking a mouse", 
            "Web page loading", "All the above"
        ]
    ],


    ["Javascrip Boolean return the following values?",
    "true or false",
    
            [
            "Integers and strings",
            "Positive or Negative", 
            "Fibonacci sequence", 
            "true or false"
            ]
    ],

    
    ["Javascript variables work within the following scopes:",
    "all of the above",

            [
            "global",
            "function",
            "local",
             "all of the above"
            ],
    ], 
    [
      "[var count = \"20\" + 35] produces the following result",
      "2035",
      

            ["undefined", 
            "55", "2035", 
            "\"20\"+35"
            ]
    ]
];


function arrayContent(){


    console.log(questionsBankArray.length);
    console.log("============================================");
    console.log(questionsBankArray);

};
arrayContent();

let previousQuestionArray = [];
let previousQuestionIndex = 0

// Shuffle the questionsBankArray to ensure randomness

    function shuffleIndices(arrayLength) {
        const indices = Array.from({ length: arrayLength }, (_, index) => index);
        for (let i = arrayLength - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices;
      }
      

// Get shuffled indices
const shuffledIndices = shuffleIndices(questionsBankArray.length);


// Get shuffled indices

// Now select the first 10 unique questions for the final quiz
let finalQuestionsArray = shuffledIndices.slice(0, 10).map((index) => questionsBankArray[index]);





console.log("============================================");
console.log(finalQuestionsArray.length);
console.log("============================================");
console.log(finalQuestionsArray);

for (let index = 0; index < 10; index++) {
    const element = finalQuestionsArray[index];
    console.log(index + ". " + finalQuestionsArray[index][0] + " --> " + finalQuestionsArray[index][1]);
    console.log("Choices   " + finalQuestionsArray[index][2][0]   + "," + finalQuestionsArray[index][2][1] + "," + finalQuestionsArray[index][2][2] + "," + finalQuestionsArray[index][2][3]);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    
}



// Global variables


var topLine = document.createElement("h1");
topLine.textContent = "Quiz";


var timeBox = document.createElement("section");
const timeDisplay = document.createElement("p");

document.body.append(timeBox);

var box1 = document.createElement("section");
document.body.append(topLine);
document.body.append(box1);

var timeLeft = 60;

let currentQuestionIndex = 0;
let quizScore = 0;
let interactionAllowed = true;






function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}






function displayQuestion() {

      if (currentQuestionIndex > 9) {
          timeLeft = 0;
          currentQuestionIndex = 99;
          return; 
      }
      else
      {

      const questionData = questionsBankArray[currentQuestionIndex];
      const questionText = questionData[0];
      const correctAnswer = questionData[1];
      const choices = questionData[2];


      var emptyLine = document.createElement("p");

      box1.appendChild(emptyLine);
      box1.appendChild(emptyLine);


        const questionNumber = document.createElement("h2");
        questionNumber.textContent = "Question " + (currentQuestionIndex + 1);
        questionNumber.setAttribute(
          "style",
          "margin-left: 360px; width: 300px; margin-top: 8px; list-style-type: none; font-size: 40px; border-radius: 15px; color: blue"
        );

        timeDisplay.textContent = "Time Left: " + (timeLeft);
        timeDisplay.setAttribute(
          "style",
          "margin-left: 550px; width: 150px; margin-top: 8px; list-style-type: none; font-size: 20px; border-radius: 15px; text-decoration: bold; color: black"
        );


          const questionLine = document.createElement("h3");
          questionLine.textContent = questionText;
          questionLine.setAttribute(
            "style",
            "margin-left: 200px; width: 600px; margin-top: 8px; list-style-type: none; font-size: 30px; border-radius: 15px; color: black"
            );

          box1.innerHTML = "";
          box1.appendChild(questionNumber);
          timeBox.appendChild(timeDisplay);

          box1.appendChild(questionLine);


          for (let index = 0; index < choices.length; index++) {
                const choiceText = choices[index];

                var emptyLine = document.createElement("div");
                box1.appendChild(emptyLine);

                const choiceButton = document.createElement("button");
                choiceButton.textContent = choiceText;
                choiceButton.setAttribute("class", "choice-button");
                choiceButton.setAttribute(
                  "style",
                  "margin-left: 200px; width: 600px; margin-top: 3px; list-style-type: none; font-size: 25px; border-radius: 150px; color: blue"
                  );
                box1.appendChild(choiceButton);

                choiceButton.addEventListener("click", function () {
                  handleChoice(choiceText, correctAnswer);
                });
          }
}
}

function handleChoice(choiceText, correctAnswer) {
  
          if (!interactionAllowed) {
              return;
          }

          interactionAllowed = false;

          var checkAnswer = document.createElement("p");


          if (choiceText.trim() === correctAnswer) {
              quizScore++;

              checkAnswer.textContent = "Correct Answer!"
              
              box1.appendChild(checkAnswer);
              console.log("Correct Answer!");
          
          } else {

                checkAnswer.textContent = "Wrong Answer!"
                box1.appendChild(checkAnswer);
                if (timeLeft > 10) {
                  timeLeft -=  10;
                }
                else 
                {
                      timeLeft = 0
                      currentQuestionIndex = 99;

                      
                };

                console.log("Wrong Answer!");

          };


          if (currentQuestionIndex < 9) {
              currentQuestionIndex++;

             interactionAllowed = true;  

             displayQuestion();

          } else

          {
            timeLeft = 0;
            currentQuestionIndex = 99;

          };
           

      }






function setTime() {

        // Sets interval in variable
        var timerInterval = setInterval(function() {
          if (timeLeft < 1 ||  currentQuestionIndex > 9) {
             clearInterval(timerInterval);

              timeLeft = 0;
              currentQuestionIndex = 99;


              endQuiz()
              }
              else 
              {
              
          timeLeft--;
          initializeQuiz();
        }

        }, 1000);
}












function quizInstructions() {

        box1.innerHTML = "";
        const instructionsArray = [
          "You have 60 seconds to complete the quiz",
          "Time starts once you click \"Start Quiz\" button",
          "You will be penalized 10 seconds for each wrong answer",
          "Your score will be saved at the end of the quiz",
        ];

        for (let index = 0; index < 4; index++) {
              const element = instructionsArray[index];
              const instructionsLine = document.createElement("li");
              instructionsLine.textContent = element;

              instructionsLine.setAttribute(
                  "style",
                  "margin-left: 200px; font-size: 30px; color: green"
              );

    

  
            box1.appendChild(instructionsLine);
          }

          const startButton = document.createElement("button");
          startButton.textContent = "Start Quiz";
          startButton.setAttribute("class", "start-button");

          startButton.setAttribute(
            "style",
            "margin-left: 400px; padding: 10px; border: none; margin-top: 80px; font-size: 30px; border-radius: 30px; color: green"
        );

          box1.appendChild(startButton);

          startButton.addEventListener("click", function () {

          setTime();

          });



          const exitButton = document.createElement("button");
          exitButton.textContent = "Exit Quiz";
          exitButton.setAttribute("class", "exit-button");

          exitButton.setAttribute(
            "style",
            "font-size: 30px; padding: 10px; border-radius: 30px; border: none; margin-left: 400px; color: green"
        );


         // box1.appendChild(exitButton);

          exitButton.addEventListener("click", function () {
            alert("Exit Button Pressed");
          });
         
}


function initializeQuiz() {

        //    shuffleArray(questionsBankArray);
        displayQuestion();
}

function endQuiz() {

            var removeBox1 = box1;
            while (removeBox1.hasChildNodes()) {
              removeBox1.removeChild(removeBox1.firstChild);
          }
          var removeTimeBox = timeBox;
          while (removeTimeBox.hasChildNodes()) {
            removeTimeBox.removeChild(removeTimeBox.firstChild);
          }


 console.log("End of Quiz");
 console.log("Your Score: " + quizScore + "/10");


        ///   function handleRecordedScores() {
        const clearfixDiv = document.createElement("div");
        clearfixDiv.classList.add("clearfix");
        const card1Div = document.createElement("div");
        card1Div.classList.add("card");
        const h2Element = document.createElement("h2");
        h2Element.textContent = "Name";

        const formElement = document.createElement("form");
        formElement.method = "POST";
        const inputGroupDiv = document.createElement("div");
        inputGroupDiv.classList.add("input-group");

    
        const nameLabel = document.createElement("label");
        nameLabel.setAttribute("for", "name");


        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "name";
        nameInput.id = "name";
        nameInput.placeholder = "Enter name here";

        inputGroupDiv.appendChild(nameLabel);
        inputGroupDiv.appendChild(nameInput);


        const msgDiv = document.createElement("div");
        msgDiv.id = "msg";

        const recordButton = document.createElement("button");
        recordButton.id = "record";
        recordButton.textContent = "Record";
        recordButton.setAttribute(
          "style",
          "background-color: #001b44; border-radius: 8px; color: #fff; cursor: pointer; font-size: 1.2em; letter-spacing: 0.21px; line-height: 16px; max-width: 255px; padding: 20px 52px; text-align: center; transition-duration: 0.15s; transition-property: background-color; transition-timing-function: linear; margin-top: 0.6em; float: right;"
      );


 
        formElement.appendChild(inputGroupDiv);
        formElement.appendChild(msgDiv);
        formElement.appendChild(recordButton);

     
        card1Div.appendChild(h2Element);
        card1Div.appendChild(formElement);

     
        const card2Div = document.createElement("div");
        card2Div.classList.add("card");

 
        const h2Element2 = document.createElement("h2");
        h2Element2.textContent = "Last Score:";

      
        const p1Element = document.createElement("p");
        p1Element.innerHTML = "<strong>Name:</strong> <span id='disp-name'></span>";

        const p2Element = document.createElement("p");
        p2Element.innerHTML = "<strong>Score:</strong> <span id='disp-score'></span>";

       
              card2Div.appendChild(h2Element2);
              card2Div.appendChild(p1Element);
              card2Div.appendChild(p2Element);


              clearfixDiv.appendChild(card1Div);
              clearfixDiv.appendChild(card2Div);

        
              document.body.appendChild(clearfixDiv);








      function displayMessage(type, message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute("class", type);
      }

    //  function renderLastRecorded() {

                    const storedName = localStorage.getItem("name");
                    const storedScore = localStorage.getItem("score");

                    const dispNameElement = document.getElementById("disp-name");
                    const dispScoreElement = document.getElementById("disp-score");

                    if (storedName) {
                      dispNameElement.textContent = storedName;
                    } else {
                      dispNameElement.textContent = "No name available";
                    }

                    if (storedScore) {
                      dispScoreElement.textContent = storedScore;
                    } else {
                      dispScoreElement.textContent = "No score available";

                    }


      // }

      recordButton.addEventListener("click", function(event) {
        event.preventDefault();

        var name = document.querySelector("#name").value;


        if (name === "") {
              displayMessage("error", "Name cannot be blank");
        }

        else
            {   
              

              score = quizScore * 10;

              localStorage.setItem("name", name);
              localStorage.setItem("score", score);
              displayMessage("success", "Registered successfully");
              return;


            };
      });
     // renderLastRecorded();
    }




quizInstructions();

