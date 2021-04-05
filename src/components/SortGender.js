import React, { useState } from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"

const SortGender = ({ searchTerm, setSearchTerm }) => {
    const [value, setValue] = useState();

    const handleChange = (val) => setValue(val);
  
    return (
        <>
            <h3>Filter by:</h3>

            <ToggleButtonGroup type="radio" name="sortGender" value={value} onChange={handleChange} defaultValue={['none']}>
                <ToggleButton value={"none"}>None</ToggleButton>
                <ToggleButton value={"male"}>Male</ToggleButton>
                <ToggleButton value={"female"}>Female</ToggleButton>
            </ToggleButtonGroup>
      </>
    );
}

export default SortGender;