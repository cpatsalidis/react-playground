import { useState } from "react";

type X = {
    onSelectSquare: () => void
    activePlayer: string
}

function GameBoard({ onSelectSquare, activePlayer }: X) {
    const initialGameBoard = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({ symbol: '', isPressed: false })))
    let [Board, setBoard] = useState(initialGameBoard)

    function handleBtnClick(rowIndex: number, colIndex: number) {
        setBoard(s => {
            let updatedState = [...s.map(i => [...i])]

            updatedState[rowIndex][colIndex].symbol = activePlayer
            updatedState[rowIndex][colIndex].isPressed = true

            return updatedState;
        })

        onSelectSquare()
    }

    return (
        <ol id="game-board">
            {Board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((buttonInfo, colIndex) => <li key={colIndex}><button onClick={() => handleBtnClick(rowIndex, colIndex)} disabled={buttonInfo.isPressed}>{buttonInfo.symbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;