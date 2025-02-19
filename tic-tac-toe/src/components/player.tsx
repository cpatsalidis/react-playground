type X = {
    player: String
    symbol: String
}

function Player({ player, symbol }: X) {
    return (
        <li>
            <span id="player">
                <span className="player-name">{player}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    )
}

export default Player;