import React from "react";
import { useParams, Link } from "react-router-dom";


const ViewCar = () => {
    const { id } = useParams();


    // Sample car data (replace this with actual API call or state management)
    const car = {
        id,
        brand: "Toyota",
        number: "AB-1234",
        type: "SUV",
        incoming: "10:00 AM",
        outgoing: "2:00 PM",
        slot: "P-12",
    };


    return (
        <div className="container mt-4">
            <h2>Car Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{car.brand} ({car.type})</h5>
                    <p className="card-text"><strong>Car Number:</strong> {car.number}</p>
                    <p className="card-text"><strong>Incoming Time:</strong> {car.incoming}</p>
                    <p className="card-text"><strong>Outgoing Time:</strong> {car.outgoing}</p>
                    <p className="card-text"><strong>Parking Slot:</strong> {car.slot}</p>
                    <Link to="/" className="btn btn-primary">Back to List</Link>
                </div>
            </div>
        </div>
    );
};


export default ViewCar;
