import React, { useState, useEffect } from 'react';
import { getEmployee } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}


const ListEmployeeComponent: React.FC = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployee();
                setEmployees(data);
            } catch (error) {
                console.error('Failed to fetch employees:',error);
            } };
        fetchEmployees();}, []);


const navigate = useNavigate();

const handleAddEmployee = () => {
    navigate('/add-employee');
};

    return (
    <div className="container mt-3">
        <h3 className="text-primary">Employee List</h3>
        <button className="btn btn-primary mb-3" onClick={handleAddEmployee}>
            Add Employee
        </button>
        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default ListEmployeeComponent;
