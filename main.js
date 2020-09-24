const firstRow = prompt('Введите первую строку');
const secondRow =  prompt('Введите вторую строку');
const marker = prompt('Какую букву будем считать?');

function getRow(firstRow, secondRow) {    
    let numsFirst = 0;
    let numsSecond = 0;

    for(let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == marker) {
            numsFirst += 1;
        }
    }

    for(let j = 0; j < secondRow.length; j++) {
        if (secondRow.charAt(j) == marker) {
            numsSecond += 1;
        }
    }

    if (numsFirst > numsSecond) {
        return 'В слове "' + firstRow + '" больше букв ' + marker;
    } else if (numsFirst === numsSecond) {
        return 'Строки равны по букве ' + marker;
    } else {
        return 'В слове "' + secondRow + '" больше букв ' + marker;
    }    
}

console.log(getRow(firstRow, secondRow));