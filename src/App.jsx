import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
  
}
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [hasWinner, setHasWinner] = useState(false) No need app function refreshes eveytime a box has been selected.
  // const [activePlayer, setActivePlayer] = useState('X'); no need to use two states need to add some derived state
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initalGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    //this whole thing is called deriving state
  }

  for (const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol
  const secondSquareSymbol
  const thirdSquareSymbol

}

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer)=>curActivePlayer ==='X' ? 'O' : 'X' );
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initalName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initalName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
