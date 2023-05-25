function gamerBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push("hej");
    }
  }
  //console.log("this is ", board);
  return board;
}
gamerBoard();
const getBoard = () => board;

////row = 3
////Col = 3

//Player one
////Name:
////Score:

//Player two
////Name:
////Score:

//Game logic
////Player turn
////Legal move
////Player 1 placements
////Player 2 placements
////Win condition
