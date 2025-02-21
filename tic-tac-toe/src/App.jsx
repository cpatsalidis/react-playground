import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'


function activePlayerHelper(log) {
  let player = 'X'

  if (log.length > 0 && log[0].active === 'X') player = 'O'

  return player
}

function App() {
  let [log, setLog] = useState([]);

  let activePlayer = activePlayerHelper(log)

  function handleTurn(rowIndex, colIndex) {
    setLog(prevLog => {
      let player = activePlayerHelper(prevLog)

      if (prevLog.length > 0 && prevLog[0].active === 'X') player = 'O'

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

        <GameBoard onSelectSquare={handleTurn} turns={log} />
      </div>
      <Log currentLog={log} />
    </main>
  )
}

export default App
