import { useState } from "react";
import "./styles.css";

const content = [
    [
        "Basketball: Five players per team on the court",
        "Games consist of four quarters, each lasting 12 minutes (NBA rules)",
        "A shot made inside the arc is worth 2 points, beyond the arc is worth 3 points",
        "A team has 24 seconds to attempt a shot"
    ],
    [
        "Football: Each team has 11 players, including a goalkeeper",
        "Matches are 90 minutes long, split into two 45-minute halves",
        "Offside rule prevents attackers from receiving the ball too close to the goal",
        "A goal is scored when the entire ball crosses the goal line"
    ],
    [
        "Tennis: Matches can be singles (1v1) or doubles (2v2)",
        "A set is won by the first player to win 6 games with a 2-game lead",
        "Scoring: 15, 30, 40, and then game point",
        "A ball is in play until it bounces twice or goes out of bounds"
    ],
    [
        "Baseball: Each team has 9 players on the field",
        "A game consists of 9 innings, with each team batting once per inning",
        "Batters advance by hitting the ball and running bases before being tagged out",
        "A home run is scored when the ball is hit out of the field of play"
    ]
];

function but() {
    let [num, setNum] = useState(0);

    return (
        <>
            <div id="tabs">
                <menu>
                    <button onClick={() => setNum(0)} className={num === 0 ? "active" : ""}>
                        Basketball
                    </button>
                    <button onClick={() => setNum(1)} className={num === 1 ? "active" : ""}>
                        Football
                    </button>
                    <button onClick={() => setNum(2)} className={num === 2 ? "active" : ""}>
                        Tennis
                    </button>
                    <button onClick={() => setNum(3)} className={num === 3 ? "active" : ""}>
                        Baseball
                    </button>
                </menu>
                <div id="tab-content">
                    <ul>
                        {content[num].map((arr, index) => (
                            <li key={index}>{arr}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default but;