// Define an array of questions for lip shade quiz
const questions = [
  {
    question: "What shade of lipstick do you prefer?",
    options: ["Red", "Pink", "Nude", "Coral"],
  },
  {
    question: "What's your favorite lip product?",
    options: ["Lipstick", "Lip Gloss", "Lip Balm", "Lip Stain"],
  },
  {
    question: "Which lip color do you wear most often?",
    options: ["Bright", "Neutral", "Dark", "Natural"],
  },
  {
    question: "How do you like your lip color to feel?",
    options: ["Matte", "Glossy", "Satin", "Velvet"],
  },
  {
    question: "What's your preferred lip finish?",
    options: ["Matte", "Satin", "Glossy", "Metallic"],
  },
  {
    question: "Which lip trend are you most likely to try?",
    options: ["Ombre Lips", "Metallic Lips", "Lip Plumping", "Lip Stains"],
  },
  {
    question: "What lip product do you always carry with you?",
    options: ["Lip Balm", "Lip Gloss", "Lipstick", "Lip Liner"],
  },
  {
    question: "What lip color do you wear for special occasions?",
    options: ["Red", "Bold Berry", "Soft Pink", "Nude"],
  },
  {
    question: "What lip color do you wear for everyday makeup?",
    options: ["Nude", "Soft Pink", "Peach", "Rose"],
  },
  {
    question: "Which lip product do you use to moisturize your lips?",
    options: ["Lip Balm", "Lip Mask", "Lip Oil", "Lip Scrub"],
  },
  // Add more questions here
];

let currentQuestionIndex = 0; // Initialize current question index

// Function to display a question
function displayQuestion() {
  const question = questions[currentQuestionIndex];

  // Display the question
  const questionContainer = document.getElementById("question");
  questionContainer.textContent = question.question;

  // Display the options
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  question.options.forEach((option) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = option;
    optionBtn.classList.add("answer-btn");
    optionBtn.addEventListener("click", () => {
      // Handle answer selection here
      console.log("Selected option:", option);

      // Proceed to the next question if available
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion(); // Display the next question
      } else {
        // Quiz completed, display result
        displayResult();
      }
    });
    optionsContainer.appendChild(optionBtn);
  });
}

// Function to display result
function displayResult() {
  const result = calculateResult(); // Calculate result based on answers

  // Display the result
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  const resultText = document.getElementById("result");
  resultText.textContent = `Your perfect lip shade is: ${result}`;
}

// Function to calculate result based on answers
function calculateResult() {
  // For simplicity, let's say the result is the most selected option for each question
  const answerCounts = {};
  questions.forEach((question) => {
    const selectedOption = question.options[getSelectedOptionIndex(question)];
    answerCounts[selectedOption] = (answerCounts[selectedOption] || 0) + 1;
  });
  return Object.keys(answerCounts).reduce((a, b) =>
    answerCounts[a] > answerCounts[b] ? a : b
  );
}

// Function to get the index of the selected option for the current question
function getSelectedOptionIndex(question) {
  const options = Array.from(document.querySelectorAll(".answer-btn"));
  return options.findIndex((option) => option.textContent === question.options);
}

// Call the function to display the first question when the page loads
displayQuestion();
