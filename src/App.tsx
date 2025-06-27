import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PasswordGenerator } from './components';

/**
 * Main App component
 */
function App() {
    // Ensure page always starts at top on load/refresh
    useEffect(() => {
        // Disable automatic scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Force scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PasswordGenerator />

            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
