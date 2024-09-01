// Sample data
const questions = [
  {
  text: "Which language is primarily used for web app development?",
  options: ["C#", "Python", "JavaScript", "Swift"],
  correct: 2
},
{
  text: "Which of the following is a relational database management system?",
  options: ["Oracle", "Scala", "Perl", "Java"],
  correct: 0
},
{
  text: "In which language is memory management provided by JVM?",
  options: ["Java", "C", "C++", "Python"],
  correct: 0
},
{
  text: "What does HTML stand for?",
  options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
  correct: 2
},
{
  text: "Which of the following is not a valid variable name in Python?",
  options: ["_myVar", "myVar2", "2myVar", "my_var"],
  correct: 2
},
{
  text: "Which of the following is not an object-oriented programming language?",
  options: ["Java", "C#", "Scala", "C"],
  correct: 3
},
{
  text: "Which tool is used to ensure code quality in JavaScript?",
  options: ["JSLint", "TypeScript", "Babel", "Webpack"],
  correct: 0
},
{
  text: "In which data structure, elements are added at one end and removed from the other?",
  options: ["Array", "Stack", "Queue", "LinkedList"],
  correct: 2
},
{
  text: "What is the primary use of the Git command 'clone'?",
  options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
  correct: 1
},
{
  text: "What does API stand for in the context of programming?",
  options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
  correct: 1
}
];


const question=document.querySelector("#question");
const answer_list=document.getElementById("answer-list");
const submitButton=document.getElementById("submit");
const nextButton=document.getElementById("next");

let score=0;
let questionIndex=0;
function loadQuestion(){
  submitButton.hidden=false;
  nextButton.hidden=true;

  question.innerText=questions[questionIndex].text;
  answer_list.innerText="";

  for(let i=0;i<4;i++){
      const liEl=document.createElement("li");
      liEl.innerHTML=`<input type="radio" name="qusetion" value="${i}"> ${questions[questionIndex].options[i]}`;
      answer_list.appendChild(liEl); 
  }
}

loadQuestion();

submitButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Submit button is clicked.
  
  const selectedAnswer=document.querySelector('input[name="qusetion"]:checked');
  if(!selectedAnswer){
      alert('Please select an answer!');
      return;
  }
  if(selectedAnswer.value == questions[questionIndex].correct){
      score++;
  }

  const h=questions[questionIndex].correct
  answer_list.children[h].style.backgroundColor="lightgreen";

  submitButton.hidden=true;
  nextButton.hidden=false;
});

nextButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Next button is clicked.
  questionIndex++;
  if(questionIndex<questions.length){
      loadQuestion();
  }else{
      alert(`Your Score is ${score}/${questions.length}`);
      score=0;
      questionIndex=0;
  }
});
