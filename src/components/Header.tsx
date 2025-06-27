import React from 'react';

/**
 * Header component with title and description
 */
function Header() {
    return (
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Random Password Generator</h1>
            <p className="text-lg text-gray-600">Create strong and secure passwords to keep your account safe online.</p>
        </div>
    );
}

export default Header;
