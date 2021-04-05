import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap"

const SortGender = () => {
    const [sortGender, setSortGender] = useState();

    const handleChange = (val) => setSortGender(val);
  
    return (
        <>
            <h3>Filter by:</h3>

            <ToggleButtonGroup type="radio" name="sortGender" value={sortGender} onChange={handleChange} defaultValue={['none']}>
                <ToggleButton value={"none"}>None</ToggleButton>
                <ToggleButton value={"male"}>Male</ToggleButton>
                <ToggleButton value={"female"}>Female</ToggleButton>
            </ToggleButtonGroup>
      </>
    );
}

export default SortGender;