import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [modifier, setModifier] = useState<number>(0);
    
    return (
        <div>
            <h3>Give Attempts</h3>
            <h1>Remaining Attempts: {attempts}</h1>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={modifier}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                    const value = parseInt(event.target.value);
                    if (!isNaN(value)) {
                        setModifier(value);
                    }}}
                />
                <Button aria-label="Use" disabled={!attempts} onClick={()=> {setAttempts(attempts-1)}}>Use</Button>
                <Button aria-label="Gain" onClick={()=> {setAttempts((attempts+modifier))}}>gain</Button>
            </Form.Group>
                
        </div>
    );
}
