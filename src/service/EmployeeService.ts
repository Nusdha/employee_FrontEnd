import axios from 'axios';
const API_URL = 'http://localhost:8082/api/employee'; // Replace with your backend API URL

export const getEmployee = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addEmployee = async (employee: {id:string; firstName: string; lastName: string; email: string }) => {
    const response = await axios.post(API_URL, employee);
    return response.data;
};