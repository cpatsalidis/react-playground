import { useState } from "react";
import "./styles.css";

const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
    ],
    [
        "Vanilla JavaScript requires imperative programming",
        "Imperative Programming: You define all the steps needed to achieve a result",
        "React on the other hand embraces declarative programming",
        "With React, you define the goal and React figures out how to get there"
    ]
];

function but() {
    let [num, setNum] = useState(0);

    return (
        <>
            <div id="tabs">
                <menu>
                    <button onClick={() => setNum(0)} className={num === 0 ? "active" : ""}>
                        Why React?
                    </button>

                    <button onClick={() => setNum(1)} className={num === 1 ? "active" : ""}>
                        Why React?
                    </button>

                    <button onClick={() => setNum(2)} className={num === 2 ? "active" : ""}>
                        Why React?
                    </button>
                    <button onClick={() => setNum(3)} className={num === 3 ? "active" : ""}>
                        Why React?
                    </button>
                </menu>
                <div id="tab-content">

                </div>
            </div>
        </>
    )
}

export default but;