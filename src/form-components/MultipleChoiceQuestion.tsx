import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    
    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="multiChoice">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={selected} onChange={(event)=> {setSelected(event.target.value)}}>
                  { options.map((option: string) =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Form.Select>
            </Form.Group>

            <h1>{selected == expectedAnswer ? "✔️" : "❌"}</h1>
        </div>
    );
}
