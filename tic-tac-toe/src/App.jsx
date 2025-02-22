import { useState } from 'react'
import Player from './components/Player'
import Log from './components/Log'
import GameBoard from './components/GameBoard'
import { WINNING_COMBINATIONS } from './WinningCominations'

let initialGameBoard = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({ symbol: '', isPressed: false })))

function activePlayerHelper(log) {
  let player = 'X'

  if (log.length > 0 && log[0].active === 'X') player = 'O'

  return player
}

function App() {
  let [log, setLog] = useState([]);
  let gameBoard = initialGameBoard
  let activePlayer = activePlayerHelper(log)

  for (let turn of log) {
    let { square, active, isPressed } = turn
    let { row, col } = square

    gameBoard[row][col].symbol = active
    gameBoard[row][col].isPressed = isPressed
  }

  let winner = null;

  for (let combination of WINNING_COMBINATIONS) {
    let firstSymbol = gameBoard[combination[0].row][combination[0].column].symbol
    let secondSymbol = gameBoard[combination[1].row][combination[1].column].symbol
    let thirdSymbol = gameBoard[combination[2].row][combination[2].column].symbol

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = firstSymbol
    }
  }

  function handleTurn(rowIndex, colIndex) {
    setLog(prevLog => {
      let player = activePlayerHelper(prevLog)
      let newLog = [{ square: { row: rowIndex, col: colIndex }, active: player, isPressed: true }, ...prevLog]

      return newLog
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" active={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" active={activePlayer === 'O'} />
        </ol>

        {winner && <p>{winner} is the Winner!!</p>}
        <GameBoard onSelectSquare={handleTurn} board={gameBoard} />
      </div>
      <Log currentLog={log} />
    </main>
  )
}

export default App
