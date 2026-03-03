import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    return (
        <div>
            <h1>Attempts Remaining: {attempts}</h1>
            <Button aria-label="Start Quiz" disabled={inProgress || !attempts} onClick={() => {setAttempts(attempts-1); setInProgress(true)}}>Start Quiz</Button>
            <Button aria-label="Stop Quiz" disabled={!inProgress} onClick={() => {setInProgress(false)}}>Stop Quiz</Button>
            <Button aria-label="Mulligan" disabled={inProgress} onClick={() => {setAttempts(attempts+1)}}>Mulligan</Button>
        </div>
    );
}
