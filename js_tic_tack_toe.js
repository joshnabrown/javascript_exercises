let filledMatrix = [['A', 'D', 'G'], ['B', 'E', 'H'], ['C', 'F', 'I']]; 

function displayBoard(matrix) {
 console.log(
   '\n' + matrix[0][0] + ' | ' + matrix[0][1] + ' | ' + matrix[0][2] + 
   '\n' + matrix[1][0] + ' | ' + matrix[1][1] + ' | ' + matrix[1][2] + 
   '\n' + matrix[2][0] + ' | ' + matrix[2][1] + ' | ' + matrix[2][2] + '\n');
}

function userInput() {
  return prompt('Pick Your Spot A thru I');
}

function compInput() {
  return 'H';
}

function selector(pick, matrix) {
  console.log(pick)
  if(pick == matrix[0][0]) {
    filledMatrix[0][0] = 'X';
  } else if(pick == matrix[1][0]) {
    filledMatrix[1][0] = 'X';
  } else if(pick == matrix[2][0]) {
    filledMatrix[2][0] = 'X';
  } else if(pick == matrix[0][1]) {
    filledMatrix[0][1] = 'X';
  } else if(pick == matrix[1][1]) {
    filledMatrix[1][1] = 'X';
  } else if(pick == matrix[2][1]) {
    filledMatrix[2][1] = 'X';
  } else if(pick == matrix[0][2]) {
    filledMatrix[0][2] = 'X';
  } else if(pick == matrix[1][2]) {
    filledMatrix[1][2] = 'X';
  } else if(pick == matrix[2][2]) {
    filledMatrix[2][2] = 'X';
  } else{}
}



displayBoard(filledMatrix);
let userPick = userInput();
selector(userPick, filledMatrix);
displayBoard(filledMatrix);
let compPick = compInput();


