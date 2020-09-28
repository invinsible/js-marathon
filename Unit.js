class Unit {
    constructor(name, elementId, heal = false, superStrike = true) {
        this.name = name,
        this.defaultHp = 100,
        this.currentHp = 100,
        this.superStrike = superStrike,
        this.heal = heal,
        this.elHp = document.getElementById(elementId),
        this.damageNum = 20,
        this.healNum = 30
    }

    // methods
    renderHp = function() {
        if(this.currentHp <= 0) {
            this.elHp.innerText = 0;
            console.log(this.name + ' DIE!');
            return false
        }    
        this.elHp.innerText = this.currentHp + ' / ' + this.defaultHp;
    }

    kick = function(target) {
        let count = random(this.damageNum);
        target.currentHp -= count;
        
        console.log(this.name + replics[random(replics.length - 1)] + target.name + ' и нанёс ' + count + ' урона');
              
    }

    superKick = function(target) {
        if(!this.superStrike) {
            console.log('Can\'t deal SUPERKICK');
            return false
        }
        let count = random(this.damageNum);      
        target.currentHp -= count * 2;  
        this.superStrike = false;
        console.log('SUPERKICK for ' + target.name + ' by ' + count * 2);        
    }

    healing = function() {
        if(!this.heal) {
            console.log('Can\'t HEAL ' + this.name);
            return false
        }
        let count = random(this.healNum);
        this.currentHp += count; 
        this.heal = false;
        console.log('HEAL for ' + this.name + ' by ' + count);          
    }
};