import React, { useState } from "react";
import { Form, ToggleButton, ButtonGroup } from "react-bootstrap"

const SortAlpha = ({ searchTerm, setSearchTerm }) => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
        { name: 'None', value: '1' },
        { name: 'First Name', value: '2' },
        { name: 'Last Name', value: '2' },
    ];


    return (
        <>
        <h3>Sort alphabetically by:</h3>

        <ButtonGroup toggle>
            {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                {radio.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
        </>
    )
}

export default SortAlpha;