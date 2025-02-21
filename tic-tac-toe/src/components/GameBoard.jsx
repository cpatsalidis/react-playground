function GameBoard({ onSelectSquare, turns }) {
    let initialGameBoard = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({ symbol: '', isPressed: false })))
    let GameBoard = initialGameBoard

    for (let turn of turns) {
        let { square, active, isPressed } = turn
        let { row, col } = square

        GameBoard[row][col].symbol = active
        GameBoard[row][col].isPressed = isPressed
    }

    return (
        <ol id="game-board">
            {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((buttonInfo, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={buttonInfo.isPressed}>{buttonInfo.symbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;