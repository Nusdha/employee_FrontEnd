import React from 'react';

const Header: React.FC = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">
                Employee Management System
            </a>
        </div>
    </nav>
    );
};

export default Header;