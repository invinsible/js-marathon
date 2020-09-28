class Unit {
    constructor(name, elementId, heal = true, superStrike = true) {
        this.name = name,
        this.defaultHp = 15,
        this.currentHp = 15,
        this.superStrike = superStrike,
        this.heal = heal,
        this.elHp = document.getElementById(elementId),
        this.damageNum = 6,
        this.healNum = 8
    }

    // methods
    die = function() {
        this.elHp.innerText = 0;
        console.log(this.name + ' ПОГИБАЕТ');
        $btn.disabled = true;
        $superBtn.disabled = true;
        $heal.disabled = true;
    }

    missHit = function(count) {
        if (count === 0) {
            console.log(this.name + ' промахнулся');
            return false
        }
        return true
    }

    criticalHit = function(count) {
        if (count === this.damageNum) {            
            console.log('КРИТИЧЕСКИЙ УДАР');            
            count += this.damageNum/2;            
        }
        return count
    }

    renderHp = function() {
        if(this.currentHp <= 0) {            
            this.die();
            return false
        }

        this.elHp.innerText = this.currentHp + ' / ' + this.defaultHp;
    }

    kick = function(target) {

        if (this.currentHp === 0 || target.currentHp === 0) {
            console.log('Бой закончился');            
            return false
        }

        let count = random(this.damageNum);        
        if(!this.missHit(count)) {return false}
        count = this.criticalHit(count);
        target.currentHp -= count;

        console.log(this.name + replics[random(replics.length - 1)] + target.name + ' и нанёс ' + count + ' урона');
    }

    superKick = function(target) {

        if(!this.superStrike) {
            console.log('Нет СУПЕРУДАРА');
            return false
        }

        let count = random(this.damageNum);  
        if(!this.missHit(count)) {return false}
        target.currentHp -= count * 2;
        this.superStrike = false;

        console.log(this.name + ' заряжает свой СУПЕРУДАР и наносит ' + count * 2 + ' урона!');        
    }

    healing = function() {

        if(!this.heal) {
            console.log('Нет Лечебного эликсира');
            return false
        }

        let count = random(this.healNum);
        this.currentHp += count; 
        this.heal = false;

        console.log(this.name + ' восстанавливает ' + count + ' здоровья');
    }
};