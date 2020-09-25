//const firstRow = prompt('Введите первую строку');
//const secondRow =  prompt('Введите вторую строку');
//const marker = prompt('Какую букву будем считать?');

function getRow(firstRow, secondRow) {    
    let numsFirst = letterCount(firstRow, marker);
    let numsSecond = letterCount(secondRow, marker);

    if (numsFirst != numsSecond) {
        return numsFirst > numsSecond ? containStroke(firstRow, marker) : containStroke(secondRow, marker);
    } else {
        return 'Строки равны по букве "' + marker + '"';
    }    
}

// Count same letters in stroke
function letterCount(stroke, letter) {
    let counter = 0;

    for(let i = 0; i < stroke.length; i++) {
        if (stroke.charAt(i) == letter) {
            counter += 1;
        }
    }
    return counter;
}

// Make stroke to return in condition
function containStroke(part, letter) {
 return 'В слове "' + part + '" больше букв "' + letter + '"'
}

//console.log(getRow(firstRow, secondRow));