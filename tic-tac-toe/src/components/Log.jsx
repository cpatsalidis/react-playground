function Log({ currentLog }) {
    return (
        <ol id="log">
            {currentLog.map((info, index) => {
                return <li key={`${info.square.row}, ${info.square.col}`} className={!index ? "highlighted" : ''}>{info.active}: ({info.square.row + 1}x{info.square.col + 1})</li>
            })}
        </ol>
    )
}

export default Log;