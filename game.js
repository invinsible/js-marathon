const $btn = document.getElementById('dmg');
const $superBtn = document.getElementById('superDmg');
const $heal = document.getElementById('heal');

const replics = [
    ' с размаху ударил кулаком ',
    ' ударил ногой с разворота ',
    ' дотянулся пяткой до лба ',
    ' дал с локтя ',
    ' скрутил в бараний рог ',
    ' засадил промеж ушей '
];

function random(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Start game
function startGame() {
    const player = new Unit('Player', 'playerHp');
    const enemy = new Unit('Enemy', 'enemyHp');
    player.renderHp();
    enemy.renderHp();

    //console.log(player);
    //console.log(enemy);

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




