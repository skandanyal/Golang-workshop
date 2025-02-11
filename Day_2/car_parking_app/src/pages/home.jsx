import React, { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [cars, setCars] = useState([
        { id: 1, brand: "Toyota", number: "AB-1234", type: "SUV", incoming: "10:00 AM", outgoing: "2:00 PM", slot: "P-12" },
    ]);


    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-end">
                <Link to="/create" className="btn btn-success">Add New Car</Link>
            </div>
            <h2 className="mb-4">Car Parking List</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Car Brand</th>
                    <th>Car Number</th>
                    <th>Car Type</th>
                    <th>Incoming Time</th>
                    <th>Outgoing Time</th>
                    <th>Parking Slot</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car, index) => (
                    <tr key={car.id}>
                        <td>{index + 1}</td>
                        <td>{car.brand}</td>
                        <td>{car.number}</td>
                        <td>{car.type}</td>
                        <td>{car.incoming}</td>
                        <td>{car.outgoing}</td>
                        <td>{car.slot}</td>
                        <td>
                            <Link to={`/view/${car.id}`} className="btn btn-info btn-sm">View</Link>
                            <Link to={`/edit/${car.id}`} className="btn btn-warning btn-sm mx-2">Edit</Link>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default Home;