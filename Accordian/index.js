const questions = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language commonly used in web development.",
  },
  {
    question: "What is a variable in JavaScript?",
    answer: "A variable is a container for storing data values.",
  },
  {
    question: "What is a function in JavaScript?",
    answer:
      "A function is a block of code designed to perform a particular task.",
  },
  {
    question: "What is an array in JavaScript?",
    answer:
      "An array is a data structure that can hold more than one value at a time.",
  },
  {
    question: "What is an object in JavaScript?",
    answer:
      "An object is a collection of properties, and a property is an association between a name and a value.",
  },
];

const accordion = document.querySelector(".accordion");
const addDataToAccordion = () => {
  accordion.innerHTML = questions
    .map(
      (item) =>
        `<div class="accordion-item">
      <h3 class="question">
      ${item.question}
     <i class="fa-solid fa-arrow-up"></i>
      </h3>
     
      <h5 class="answer">${item.answer}</h5>
    </div>`
    )
    .join(" ");
};
addDataToAccordion();

const allQuestions = document.querySelectorAll(".question");

allQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    let icon = question.childNodes[1];
    let answer = question.nextElementSibling;
    answer.classList.toggle("show");
    icon.classList.toggle("rotate-icon");
  });
});
