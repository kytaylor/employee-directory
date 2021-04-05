import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap"

const SortAlpha = () => {
    const [sortAlpha, setSortAlpha] = useState();

    const handleChange = (val) => setSortAlpha(val);
  
    return (
        <>
            <h3>Sort alphabetically by:</h3>

            <ToggleButtonGroup type="radio" name="sortAlpha" value={sortAlpha} onChange={handleChange} defaultValue={["none"]}>
                <ToggleButton value={"none"}>None</ToggleButton>
                <ToggleButton value={"first"}>First Name</ToggleButton>
                <ToggleButton value={"last"}>Last Name</ToggleButton>
            </ToggleButtonGroup>
      </>
    );
}

export default SortAlpha;