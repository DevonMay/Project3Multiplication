const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const questionTitle = document.getElementById('questiontitle')
const reusultContainer = document.getElementById('reusult-container')
const scoreElement = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex, score, color


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  reusultContainer.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  score = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  score--
  questionTitle.innerText = 'Question ' + (currentQuestionIndex + 1)
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  color = 0;
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    if(color == 1){
      button.classList.add('btn','yel')
      color++
    }
    else if(color == 2) {
      button.classList.add('btn','re')
      color++
    }
    else if(color == 3) {
      button.classList.add('btn', 'pur')
      color++
    }
    else {
      button.classList.add('btn')
      color++
    } 
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    questionContainerElement.classList.add('hide')
    reusultContainer.classList.remove('hide')
    scoreElement.innerHTML  = 'Score:     ' + score + '/10'
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    score++
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    //1
  {
    question: '10 X 2 =',
    answers: [
      { text: '28', correct: false },
      { text: '30', correct: false },
      { text: '25', correct: false },
      { text: '20', correct: true }
    ]
  },
  //2
  {
    question: '9 X 1 =',
    answers: [
      { text: '10', correct: false },
      { text: '12', correct: false },
      { text: '9', correct: true },
      { text: '15', correct: false }
    ]
  },
  //3
  {
    question: '2 X 5 =',
    answers: [
      { text: '8', correct: false },
      { text: '9', correct: false },
      { text: '10', correct: true },
      { text: '6', correct: false }
    ]
  },
  //4
  {
    question: '4 X 4 =',
    answers: [
        { text: '12', correct: false },
        { text: '14', correct: false },
        { text: '16', correct: true },
        { text: '10', correct: false }
    ]
  },
  //5
  {
    question: '20 X 4 =',
    answers: [
        { text: '80', correct: true },
        { text: '60', correct: false },
        { text: '40', correct: false },
        { text: '100', correct: false }
    ]
  },
  //6
  {
    question: '3 X 6 =',
    answers: [
        { text: '15', correct: false },
        { text: '24', correct: false },
        { text: '12', correct: false },
        { text: '18', correct: true }
    ]
  },
  //7
  {
    question: '1 X 3 =',
    answers: [
        { text: '6', correct: false },
        { text: '5', correct: false },
        { text: '4', correct: false },
        { text: '3', correct: true }
    ]
  },
  //8
  {
    question: '5 X 1 =',
    answers: [
        { text: '5', correct: true },
        { text: '4', correct: false },
        { text: '1', correct: false },
        { text: '3', correct: false }
    ]
  },
  //9
  {
    question: '6 X 0 =',
    answers: [
        { text: '5', correct: false },
        { text: '0', correct: true },
        { text: '6', correct: false },
        { text: '3', correct: false }
    ]
  },
  //10
  {
    question: '4 X 3 =',
    answers: [
        { text: '16', correct: false },
        { text: '10', correct: false },
        { text: '12', correct: true },
        { text: '15', correct: false }
    ]
  }
]
