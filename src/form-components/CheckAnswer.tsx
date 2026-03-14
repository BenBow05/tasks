import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer" as={Row}>
                <Form.Label column sm={2}>Answer:</Form.Label>
                <Col>
                    <Form.Control
                        value={answer}
                        onChange={(event) => {setAnswer(event.target.value)}} />
                </Col>
                
            </Form.Group>
            <h1>{answer == expectedAnswer ? "✔️" : "❌"}</h1>
        </div>
    );
}
