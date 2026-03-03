import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dieOne, setDieOne] = useState<number>(4);
    const [dieTwo, setDieTwo] = useState<number>(2);
    return (
        <div>
            <span data-testid={"left-die"}>{dieOne}</span>
            <span data-testid={"right-die"}>{dieTwo}</span>
            <Button aria-label="Roll Left" onClick={() => {setDieOne(d6)}}>Roll Left</Button>
            <Button aria-label="Roll Right" onClick={() => {setDieTwo(d6)}}>Roll Right</Button>
            <h1>{dieOne == 1 && dieTwo == 1 ? "Lose" : dieOne == dieTwo ? "Win" : ""}</h1>
        </div>
    );
}
