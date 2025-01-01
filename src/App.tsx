import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import Header from './component/Header';
import Footer from './component/Footer';

const App: React.FC = () => {
  return (
  <div>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/update-employee/:id" element={<AddEmployeeComponent />} />
      </Routes>
    </Router>
    <Footer />
  </div>
  );
};

export default App;