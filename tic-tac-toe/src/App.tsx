import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'

function App() {
  let [turn, setTurn] = useState('X')

  function handleTurn() {
    setTurn(t => t === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" active={turn === 'X'} />
          <Player initialName="Player 2" symbol="O" active={turn === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleTurn} activePlayer={turn} />
      </div>
    </main>
  )
}

export default App
