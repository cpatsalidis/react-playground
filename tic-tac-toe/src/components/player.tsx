import { useState } from 'react'

type X = {
    initialName: string
    symbol: string
    active: boolean
}

function Player({ initialName, symbol, active }: X) {
    let [isEditing, setIsEditing] = useState(false);
    let [name, setname] = useState(initialName)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setname(n => n = e.target.value)
    }

    function handleEditClick() {
        if (!name) {
            setname(n => n = initialName);
        }
        setIsEditing(editing => !editing)
    }

    let playerName = <span className="player-name">{name}</span>


    if (isEditing) {
        playerName = <input type="text" onChange={handleInputChange} value={name} required></input>
    }

    return (
        <li className={active ? 'active' : ''}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player;