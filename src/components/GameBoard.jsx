const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard() {
    return (
            <ol id="game-board" >
            {initalGameBoard.map((row, rowIndex)=><li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) =><li key={colIndex}><button>{col} </button> </li>) }
                </ol>
            </li> )}
            </ol>

    )
}