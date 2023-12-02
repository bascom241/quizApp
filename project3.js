const questions = [
    {
        question:"The deep investing fascia can be divided into how many layers ",
        answers:[
            {text:9,correct:false},
            {text:4,correct:true},
            {text:2,correct:false},
            {text:7,correct:false},
        ]
    },

    {
        question:"The neurocranium encloses the following except?",
        answers:[
            {text:'brain',correct:false},
            {text:'labyrinth',correct:false},
            {text:'calvaria',correct:true},
            {text:'middle-ear',correct:false},

        ]
    },

    {
        question:"neurocranium contains the following foramen except",
        answers:[
            {text:'foramen-rotundum',correct:false},
            {text:'foramen-ovale',correct:false},
            {text:'frontal-foramen',correct:true},
            {text:'foramen-magnum',correct:false},

        ] 
    }
];
const questionElement = document.querySelector('#question');
const answers  = document.querySelector('#answer-button'); 
const nextButton  = document.querySelector('#nextButton'); 

let currentQuestionIndex =0;
score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = 'Next';
    displayQuestion();
}
function displayQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion)
    console.log(currentQuestionIndex)
    let  questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question

currentQuestion.answers.forEach(answer=>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    console.log(button )
    button.classList.add('btn');
    answers.appendChild(button);
   if(answer.correct){
        button.dataset.correct = answer.correct;
        
    }
    button.addEventListener('click',selectAnswer);
})
};
function resetState(){
    nextButton.style.display='none';
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    console.log(selectedBtn)
    const isCorrect = selectedBtn.dataset.correct ==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answers.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display ='block'
}
let total = 100;
function showScore(){
    resetState();
    questionElement.innerHTML=` You scored ${Math.floor((score/questions.length)*100)}% out of ${total}`
    nextButton.innerHTML='Start Again';
    nextButton.style.display = 'block'
    
}
function handleNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        displayQuestion()
    }else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextQuestion();
    }
})
    startQuiz();

    

