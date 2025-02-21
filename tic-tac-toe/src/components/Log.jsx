function Log({ currentLog }) {
    return (
        <ol id="log">
            {currentLog.map((info, index) => {
                return <li className="highlighted" key={index}>{info.square.col}</li>
            })}
        </ol>
    )
}

export default Log;