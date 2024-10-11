import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container d-flex align-items-center">
                <div className="logo">
                    <img
                        src="/logo.webp"
                        alt="Logo"
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
                <div className="header-text flex-grow-1 text-center">
                    <p className="m-0 fs-1">Тестове завдання</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
