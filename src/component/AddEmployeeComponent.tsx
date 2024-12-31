import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeeComponent: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
};

const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
};

const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ firstName, lastName, email });
    navigate('/');
};

return (
<div className="container mt-3">
    <h3 className="text-primary text-center">Add Employee</h3>
    <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="firstName"
            className="form-control"
            value={firstName}
            onChange={handleChangeFirstName}
            required/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="lastName"
            className="form-control"
            value={lastName}
            onChange={handleChangeLastName}
            required/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleChangeEmail}
            required/>
        </div>
        <button type="submit" className="btn btn-primary">
            Add Employee
        </button>
    </form>
</div>
);
};

export default AddEmployeeComponent;