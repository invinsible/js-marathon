const $checkAnswer = document.getElementById('checkAnswer');
const $answer = document.getElementById('answer');
const $quetion = document.getElementById('question');
const $form = document.getElementById('form');

// support functions
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const questionsArr = [
    {
        questionText: 'How are you, man?',
        answer      : ['nice', 'отлично'],
        answer2     : 'nice',
        difficult   : 1,
        isDisable   : false 
    },
    {
        questionText: 'What is your name?',
        answer      : ['igor', 'игорь'],
        answer2     : 'igor',
        difficult   : 1,
        isDisable   : false
    },
    {
        questionText: 'What is your cat name?',
        answer      : ['arbuzik', 'арбузик'],
        answer2     : 'cat',
        difficult   : 2,
        isDisable   : false
    },
]


function init() {
    let randomQuestion = random(0, questionsArr.length - 1);
    $quetion.innerText = questionsArr[randomQuestion].questionText;
    questionsArr[randomQuestion].isDisable = true;


    $form.addEventListener('submit', function(evt) {
        evt.preventDefault();

        let currentQ =  questionsArr[randomQuestion];
        let currentA = document.getElementById('answer').value.toLowerCase();

        if(currentQ.answer.find(item => item == currentA)) {
            console.log('bingo');
        } else {
            console.log('fail');
        }

        //console.log(user);

        // if(currentA === currentQ.answer2) {
        //     console.log('bingo');
        // } else {
        //     console.log('fail');
        // }     
        
        
       
    })
}

init();