import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
            <Row>
                <Col>
                    <header className="App-header">
                        <h1>Hello World UD CISC275 with React Hooks and TypeScript By: Benjamin Bowman</h1>
                    </header>
                    <img src="" alt="this is probably a image" />
                    <div style={{color: 'red', width: '10px', height: '5px'}}></div>
                </Col>
                <Col>
                <Button onClick={() => {console.log("Hello World!")}}>Log Hello World</Button>
                    <ul>
                        <li>First thing</li>
                        <li>Another thing</li>
                        <li>A third item</li>
                    </ul>
                    <div style={{backgroundColor: 'red', width: '10px', height: '5px'}}></div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default App;
