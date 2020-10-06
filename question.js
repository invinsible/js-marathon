const $checkAnswer = document.getElementById('checkAnswer');
const $answer = document.getElementById('answer');
const $nextQuestion = document.getElementById('nextQuestion');
const $quetion = document.getElementById('question');
const $form = document.getElementById('form');
const $start = document.getElementById('start');
const $gameWrap = document.getElementById('gameWrap');
const $roll = document.getElementById('roll');

// support functions
function random(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Unit {
    constructor (name, elementId) {
        this.name = name,
        this.elHp = document.getElementById(elementId),
        this.defaultHp = 15,
        this.currentHp = 15        
    }

    renderHp = function() {        
        this.elHp.innerText = this.currentHp + ' / ' + this.defaultHp;       
    }

    dmg = function(num) {        
        this.currentHp -= num;
    }
}

const questionsArr = [
    {
        questionText: 'How are you, man?',
        answer      : ['nice', 'отлично'],       
        difficult   : 3,
        isDisable   : false,
        isActive    : false 
    },    
    {
        questionText: 'What is your cat name?',
        answer      : ['arbuzik', 'арбузик'],        
        difficult   : 8,
        isDisable   : false,
        isActive    : false
    },
    {
        questionText: 'What is your name?',
        answer      : ['igor', 'игорь'],       
        difficult   : 5,
        isDisable   : false,
        isActive    : false
    },
]


function init() {
    const boss = new Unit('Valerik', 'enemyHp');   
    const player = new Unit('Igor', 'playerHp');  
    boss.renderHp();
    player.renderHp();

    function renderQuestion() {
        let activeQuestions = questionsArr.filter(item => item.isDisable != true);

        if(activeQuestions.length === 0) {
            $quetion.innerText = 'Конец вопросов';
            return false
        }

        let randNum = random(activeQuestions.length - 1);
        activeQuestions[randNum].isDisable = true;
        activeQuestions[randNum].isActive = true;

        $quetion.innerText = activeQuestions[randNum].questionText;
    }

    $start.addEventListener('click', function(){
        $gameWrap.style.opacity = 1;
        this.disabled = true;
        renderQuestion();        
    });       

    $form.addEventListener('submit', questionHandler);

    $nextQuestion.addEventListener('click', function(){
        $nextQuestion.disabled = true;
        $checkAnswer.disabled = false;
        renderQuestion();               
    });

    $roll.addEventListener('click', function(){        
        renderQuestion();                
    });


    function questionHandler(evt) {
        evt.preventDefault();

        let currentQ = questionsArr.find(item => item.isActive == true);
        let currentA = document.getElementById('answer').value.toLowerCase();
    
        if(currentQ.answer.find(item => item == currentA)) {            
            boss.dmg(currentQ.difficult);
        } else {            
            player.dmg(currentQ.difficult);
        }
    
        boss.renderHp();
        player.renderHp();

        currentQ.isActive = false;

        $nextQuestion.disabled = false;
        $checkAnswer.disabled = true;

    }
}
init();
