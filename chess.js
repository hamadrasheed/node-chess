const size = 8;
let hash = ''
let number = 1;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        hash += `${number}`.length > 1 ? ` ${number}` : ` 0${number}`;
        number++;
    }
    hash += '\n'
} 

console.log(hash);

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);
  
readline.question(`Please select a position from above numeric chessboard for knigth: `, position => {

    if (typeof Number(position) == 'number' && Number(position) && isOnChess(position)) {
        console.log(findPossibleMoves(position));
        readline.close();

    } else {
        
        console.log('Unkown segments were passed!');
        
        readline.question(`Only 1-64 are allowed as per numeric chessboard above, Please select accordingly: `, position => {
            if (typeof Number(position) == 'number' && Number(position)) {
                console.log(findPossibleMoves(position));
            } else {
                console.log('Again wrong segments are passed in input!');
            }
        
            readline.close();
        });
    }

});


function findPossibleMoves(currentPosition) {

    if (!isOnChess(currentPosition)) {
        return {
            countOfPostionToMove: 0,
            postionsRange: []
        }
    }

    const upsidePositionOne = sum(currentPosition, 6, true);
    const upsidePositionTwo = sum(currentPosition, 10, true);
    const upsidePositionThree = sum(currentPosition, 15, true);
    const upsidePositionFour = sum(currentPosition, 17, true);

    const downPositionOne = sum(currentPosition, 6);
    const downPositionTwo = sum(currentPosition, 10);
    const downPositionThree = sum(currentPosition, 15);
    const downPositionFour = sum(currentPosition, 17);

    const positionsToMove = [];

    isOnChess(upsidePositionOne) ? positionsToMove.push(upsidePositionOne) : null;
    isOnChess(upsidePositionTwo) ? positionsToMove.push(upsidePositionTwo) : null;
    isOnChess(upsidePositionThree) ? positionsToMove.push(upsidePositionThree) : null;
    isOnChess(upsidePositionFour) ? positionsToMove.push(upsidePositionFour) : null;
    isOnChess(downPositionOne) ? positionsToMove.push(downPositionOne) : null;
    isOnChess(downPositionTwo) ? positionsToMove.push(downPositionTwo) : null;
    isOnChess(downPositionThree) ? positionsToMove.push(downPositionThree) : null;
    isOnChess(downPositionFour) ? positionsToMove.push(downPositionFour) : null;

    return {
        countOfPostionToMove: positionsToMove.length,
        allowedPostions: positionsToMove
    };

    console.log({
        upsidePositionOne,
        upsidePositionTwo,
        upsidePositionThree,
        upsidePositionFour,
        downPositionOne,
        downPositionTwo,
        downPositionThree,
        downPositionFour,
    });
}

// Function that return boolean on the basis of values if they exist on chessboard or not
function isOnChess(postion) {

    if (postion > 64 || postion < 0) {
        return false;
    }

    return true;

    

}

// Function to sum/minus on the basis of "add" parameter
function sum(val1, val2, add) {

    if (add) {
        return val1 + val2;
    }

    return val1 - val2;

}
