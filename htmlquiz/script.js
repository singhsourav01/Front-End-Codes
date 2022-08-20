const startButton = document.getElementById('start-btn');

const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question-container');

const answerButtonElements = document.getElementById('answer-buttons');

let shuffledQuestions, currectQuestionIndex;

let quizeScore = 0;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', ()=>{
    currectQuestionIndex ++;
    setnextQuestion();
})


function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=>Math.random() - 0.5);
    currectQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizeScore = 0;

}


function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex]);

}


function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answers)=>{
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('btn');
        if(answers.correct){
            button.dataset.correct = answers.correct
        } 
        button.addEventListener('click', selectAnswer)
        answerButtonElements.appendChild(button);
    })
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonElements.firstChild){
        answerButtonElements.removeChild(answerButtonElements.firstChild); 
    }
}


function selectAnswer(e){
    const selectedButton = e.target;
    const correct= selectedButton.dataset.correct;
    
    setStatusClass(document.body, correct)
    Array.from(answerButtonElements.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct);

    })
    if(shuffledQuestions.length > currectQuestionIndex +1 ){
        nextButton.classList.remove('hide');
    } else{
        startButton.innerText = "restart";
        startButton.classList.remove('hide');
    } 

    if(selectedButton.dataset = correct){
        quizeScore++;
    }
    document.getElementById('right-answers').innerHTML = quizeScore;
}


function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    } else{
        element.classList.add("wrong");
    }
}



function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question: "Which one of these is a JavaScript framework?", 
        answers :[ 
        {text: 'Python', correct: false},
        {text: 'Python', correct: false},
        {text: 'Django', correct: false},
        {text: '', correct: false},
        {text: 'React', correct: true}
        ]
    }, 
    {
        question: "Who is Prime Minister of India", 
        answers :[ 
        {text: 'Narendra Modi', correct: true},
        {text: 'Rahul Gandhi', correct: false}
        ]
    }, 
    {
        question: "Waht is 4 * 3", 
        answers :[ 
        {text: '6', correct: false},
        {text: '12', correct: true}
        ]
    }, 

]