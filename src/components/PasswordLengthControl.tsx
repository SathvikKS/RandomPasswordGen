import React from 'react';
import { PASSWORD_LENGTH_LIMITS } from '../constants';

interface PasswordLengthControlProps {
    length: number;
    onLengthChange: (length: number) => void;
}

/**
 * Password length control with slider and increment/decrement buttons
 */
function PasswordLengthControl({ length, onLengthChange }: PasswordLengthControlProps) {
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onLengthChange(parseInt(event.target.value));
    };

    const incrementLength = () => {
        onLengthChange(Math.min(PASSWORD_LENGTH_LIMITS.MAX, length + 1));
    };

    const decrementLength = () => {
        onLengthChange(Math.max(PASSWORD_LENGTH_LIMITS.MIN, length - 1));
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-700">
                    Password length: <span className="text-blue-600">{length}</span>
                </label>
                <div className="flex items-center gap-2">
                    <button
                        onClick={decrementLength}
                        disabled={length <= PASSWORD_LENGTH_LIMITS.MIN}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        −
                    </button>
                    <button
                        onClick={incrementLength}
                        disabled={length >= PASSWORD_LENGTH_LIMITS.MAX}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        +
                    </button>
                </div>
            </div>
            <input
                type="range"
                min={PASSWORD_LENGTH_LIMITS.MIN}
                max={PASSWORD_LENGTH_LIMITS.MAX}
                value={length}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
        </div>
    );
}

export default PasswordLengthControl;
