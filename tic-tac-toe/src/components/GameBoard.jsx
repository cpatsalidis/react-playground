function GameBoard({ onSelectSquare, board }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((buttonInfo, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={buttonInfo.isPressed}>{buttonInfo.symbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;