import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'



function App() {
  let [turn, setTurn] = useState('X')
  let [log, setLog] = useState([]);

  function handleTurn(rowIndex, colIndex) {
    setTurn(t => t === 'X' ? 'O' : 'X')
    setLog(prevLog => {
      let player = 'X'

      if (prevLog.length > 0 && prevLog[0].active === 'X') player = 'O'

      let newLog = [{ square: { row: rowIndex, col: colIndex }, active: player, isPressed: true }, ...prevLog]

      return newLog
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" active={turn === 'X'} />
          <Player initialName="Player 2" symbol="O" active={turn === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleTurn} turns={log} />
      </div>
      <Log currentLog={log} />
    </main>
  )
}

export default App
