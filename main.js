const firstRow = prompt('Введите первую строку');
const secondRow =  prompt('Введите вторую строку');
const marker = prompt('Какую букву будем считать?');

function getRow(firstRow, secondRow) {    
    let numsFirst = letterCount(firstRow, marker);
    let numsSecond = letterCount(secondRow, marker);       

    if (numsFirst > numsSecond) {
        return 'В слове "' + firstRow + '" больше букв ' + marker;
    } else if (numsFirst === numsSecond) {
        return 'Строки равны по букве ' + marker;
    } else {
        return 'В слове "' + secondRow + '" больше букв ' + marker;
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

console.log(getRow(firstRow, secondRow));