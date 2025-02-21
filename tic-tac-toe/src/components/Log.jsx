function Log({ currentLog }) {
    return (
        <ol>
            {currentLog.map((info, index) => {
                return <li key={index}>{info.square.col}</li>
            })}
        </ol>
    )
}

export default Log;