import './App.css';
import React, { useState } from "react";
import Employees from "./components/Employees"
import SortAlpha from "./components/Sort"
import SortGender from "./components/SortGender"

function App() {
  return (
    <>
    <SortAlpha />
    <SortGender />
    <Employees />
    </>
  );
}

export default App;
