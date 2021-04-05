import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";

const Employees = ({ sortAlpha, sortGender }) => {
    const [employees, setEmployees] = useState ([]);

    useEffect (() => {
        fetch("https://randomuser.me/api/?results=100&nat=us")
        .then((res) => res.json ())
        .then((res) => {
            setEmployees(res.results);
        });
    }, []);

    return (
        <CardDeck style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            {employees.map(({ dob, name, email, phone, picture }, i) => (
                <EmployeeCard 
                name={name} 
                email={email} 
                dob={dob} 
                phone={phone} 
                picture={picture}
                i={i} />
            ))}
        </CardDeck>
      );
}

const EmployeeCard = ({ name, email, dob, phone, picture }) => (
    <Card style={{ minWidth: "18rem", flex: 1 }}>
        <Card.Body>
            <Card.Img src={picture.thumbnail} />
            <Card.Title>{name.first} {name.last}</Card.Title>
            <Card.Text>
            Age: {dob.age}
            </Card.Text>
            <Card.Text>
            Email: {email}
            </Card.Text>
            <Card.Text>
            Phone: {phone}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Employees;