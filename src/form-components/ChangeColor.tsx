import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors: string[] = ["red", "blue", "green", "orange", "purple", "cyan", "yellow", "black"]
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string) => (
                <Form.Check
                key={c}
                inline={true}
                type="radio"
                name="colors"
                onChange={()=> {setColor(c)}}
                id={"colors-check-"+c}
                label={c}
                value={c}
                checked={color === c}
                />
            ))
            }
            <p> You have chosen{" "}
                <span data-testid="colored-box" style={{ backgroundColor: color }}>
                    {color}
                </span>.
            </p>
        </div>
    );
}
