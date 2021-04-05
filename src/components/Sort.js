import React, { useState } from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"

const SortAlpha = ({ searchTerm, setSearchTerm }) => {
    const [value, setValue] = useState();

    const handleChange = (val) => setValue(val);
  
    return (
        <>
            <h3>Sort alphabetically by:</h3>

            <ToggleButtonGroup type="radio" name="sortAlpha" value={value} onChange={handleChange} defaultValue={["none"]}>
                <ToggleButton value={"none"}>None</ToggleButton>
                <ToggleButton value={"first"}>First Name</ToggleButton>
                <ToggleButton value={"last"}>Last Name</ToggleButton>
            </ToggleButtonGroup>
      </>
    );
}

export default SortAlpha;