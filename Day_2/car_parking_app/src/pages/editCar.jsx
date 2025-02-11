import React from "react";


const EditCar = () => {
    return (
        <div className="container mt-4">
            <h2>Edit Car Details</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Car Brand</label>
                    <input type="text" className="form-control" value="Toyota" required />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};


export default EditCar;