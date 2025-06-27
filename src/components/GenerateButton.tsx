import React from 'react';

interface GenerateButtonProps {
    onGenerate: () => void;
}

/**
 * Generate password button component
 */
function GenerateButton({ onGenerate }: GenerateButtonProps) {
    return (
        <div className="text-center">
            <button
                onClick={onGenerate}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg"
            >
                Generate New Password
            </button>
        </div>
    );
}

export default GenerateButton;
