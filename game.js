const $btn = document.getElementById('dmg');
const $superBtn = document.getElementById('superDmg');

const replics = [
    'с размаху ударил кулаком.',
    'ударил ногой с разворота.',
    'дотянулся пяткой до лба противника.',
    'дал с локтя'
];


class Unit {
    constructor(name, elementId) {
        this.name = name,
        this.defaultHp = 100,
        this.currentHp = 100,
        this.superStrike = true,
        this.elHp = document.getElementById(elementId)
    }
};

function dealDamage(count, target, combo) {
    
    if (combo) {
        if (target.superStrike) {                        
            target.currentHp -= count * 2;  
            target.superStrike = false;
            console.log('SUPERKICK for ' + target.name + ' by ' + count * 2);
        } else {            
            target.currentHp -= count;
            console.log('Default kick for ' + target.name + ' by ' + count);
        }              
    } else {        
        target.currentHp -= count;  
        console.log('Default kick for ' + target.name + ' by ' + count);      
    }   

    renderHp(target);
}

// Support functions
function renderHp (obj) {
    obj.elHp.innerText = obj.currentHp + ' / ' + obj.defaultHp;
}

function random(num) {
    return Math.ceil(Math.random() * num);   
}


// Start game
function startGame() {
    const player = new Unit('Player', 'playerHp');
    const enemy = new Unit('Enemy', 'enemyHp');
    renderHp(player);
    renderHp(enemy);

    $btn.addEventListener('click', function() {
        dealDamage(random(20), player);
        dealDamage(random(20), enemy);
    });

    $superBtn.addEventListener('click', function() {
        dealDamage(random(20), player, true);
        dealDamage(random(20), enemy, true);
        this.disabled = true;
    });
}

startGame();




