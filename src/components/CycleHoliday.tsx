import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🐰");
    const alpha:  Record<string, string> = {"🎄": "🐰", "🐰":"🎃", "🎃":"🦃", "🦃":"🎆", "🎆":"🎄"};
    const year:  Record<string, string> = {"🐰": "🎆", "🎆": "🎃", "🎃": "🦃", "🦃": "🎄", "🎄":"🐰"};

    return (
        <div>
            <h1>Holiday: {holiday}</h1>
            <Button aria-label="Advance by Alphabet" onClick={() => {setHoliday(alpha[holiday])}}>Advance by Alphabet</Button>
            <Button aria-label="Advance by Year"onClick={() => {setHoliday(year[holiday])}}>Advance by Year</Button>
        </div>
    );
}
