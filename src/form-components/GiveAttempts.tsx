import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [modifier, setModifier] = useState<number>(0);
    
    return (
        <div>
            <h3>Give Attempts</h3>
            <h1>Remaining Attempts: {attempts}</h1>
                <input
                    type="number"
                    value={modifier}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                    const value = parseInt(event.target.value);
                    if (!isNaN(value)) {
                        setModifier(value);
                    }}}
                />
                <button aria-label="Use" disabled={!attempts} onClick={()=> {setAttempts(attempts-1)}}>Use</button>
                <button aria-label="Gain" onClick={()=> {setAttempts((attempts+modifier))}}>gain</button>
        </div>
    );
}
