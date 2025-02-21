function Log({ currentLog }) {
    return (
        <ol id="log">
            {currentLog.map((info, index) => {
                return <li className={!index ? "highlighted" : ''} key={index}>{info.active}: ({info.square.row}x{info.square.col})</li>
            })}
        </ol>
    )
}

export default Log;