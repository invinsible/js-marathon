const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {    
    let numsFirst = 0;
    let numsSecond = 0;

    for(let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == 'а') {
            numsFirst += 1;
        }
    }

    for(let j = 0; j < secondRow.length; j++) {
        if (secondRow.charAt(j) == 'а') {
            numsSecond += 1;
        }
    }

    if (numsFirst > numsSecond) {
        return firstRow
    } else if (numsFirst === numsSecond) {
        return 'Строки равны'
    } else {
        return secondRow
    }

    
}

console.log(getRow(firstRow, secondRow));