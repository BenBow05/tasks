import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button aria-label="Reveal Answer" onClick={() => {setVisible(!visible)}}>Reveal Answer</Button>
            {visible ? <h1>42</h1> : ""}
        </div>
    );
}
