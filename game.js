const $btn = document.getElementById('dmg');
const $superBtn = document.getElementById('superDmg');
const $heal = document.getElementById('heal');

const replics = [
    ' с размаху ударил кулаком ',
    ' ударил ногой с разворота ',
    ' дотянулся пяткой до лба ',
    ' дал с локтя '
];

// Support functions
function random(num) {
    return Math.ceil(Math.random() * num);   
}

// Start game
function startGame() {
    const player = new Unit('Player', 'playerHp', true, false);
    const enemy = new Unit('Enemy', 'enemyHp');
    player.renderHp();
    enemy.renderHp();

    console.log(player);
    console.log(enemy);

    $btn.addEventListener('click', function() {
        player.kick(enemy);
        enemy.kick(player);
        player.renderHp();
        enemy.renderHp();        
    });

    $superBtn.addEventListener('click', function() {
        player.superKick(enemy);
        enemy.superKick(player);
        player.renderHp();
        enemy.renderHp(); 

        this.disabled = true;
    });

    $heal.addEventListener('click', function() {
        player.healing();
        enemy.healing();
        player.renderHp();
        enemy.renderHp(); 
        this.disabled = true;
    });
}

startGame();




