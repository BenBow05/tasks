import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [usersName, setUsersName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            {!editMode && (
                <h1>
                    {usersName} is {isStudent ? "" : "not "}a student
                </h1>
            )}
                <Form.Group>
                    <Form.Label>Edit Mode</Form.Label>
                    <Form.Check
                        type="switch"
                        id="edit-mode-switch"
                        checked={editMode}
                        onChange={() => {setEditMode(!editMode)}}
                    />
                </Form.Group>
            {editMode && (
                <div>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={usersName}
                            onChange={(event) =>{
                                setUsersName(event.target.value)
                                }
                            }
                        />
                        
                        <h4>Is a student?</h4>
                        <input
                            aria-label="student"
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {setIsStudent(!isStudent)}}
                        />
                    </Form.Group>
                </div>
            )}

            
        </div>
    );
}
