import React, { useState } from 'react';
import type { PasswordStrength } from '../types';

interface PasswordDisplayProps {
    password: string;
    passwordStrength: PasswordStrength;
    onCopy: () => void;
}

/**
 * Password display component with strength indicator and copy button
 */
function PasswordDisplay({ password, passwordStrength, onCopy }: PasswordDisplayProps) {
    const [showExplanation, setShowExplanation] = useState(false);

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    return (
        <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        placeholder="Generated password will appear here..."
                        className="w-full px-6 py-4 text-lg font-mono bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    {password && (
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${passwordStrength.color}`}>{passwordStrength.text}</span>
                        </div>
                    )}
                </div>
                <button
                    onClick={onCopy}
                    className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                    Copy
                </button>
            </div>

            {password && (
                <div className="mt-4">
                    <button onClick={toggleExplanation} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                        <span>Why is this rated as "{passwordStrength.text}"?</span>
                        <svg
                            className={`w-4 h-4 transition-transform ${showExplanation ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {showExplanation && (
                        <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-800 mb-3">Password Strength Breakdown</h4>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Length Score ({password.length} characters):</span>
                                    <span className="font-semibold text-green-600">+{passwordStrength.details.lengthScore}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Character Diversity Score:</span>
                                    <span className="font-semibold text-green-600">+{passwordStrength.details.diversityScore}</span>
                                </div>

                                {passwordStrength.details.patternPenalty > 0 && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">Pattern Penalties:</span>
                                        <span className="font-semibold text-red-600">-{passwordStrength.details.patternPenalty}</span>
                                    </div>
                                )}

                                <hr className="border-gray-300" />

                                <div className="flex justify-between items-center font-semibold">
                                    <span className="text-gray-800">Total Score:</span>
                                    <span className="text-blue-600">{passwordStrength.details.totalScore}</span>
                                </div>
                            </div>

                            {passwordStrength.details.detectedPatterns.length > 0 && (
                                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Detected Weak Patterns:</h5>
                                    <ul className="text-sm text-yellow-700 space-y-1">
                                        {passwordStrength.details.detectedPatterns.map((pattern, index) => (
                                            <li key={index}>• {pattern}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <h5 className="font-semibold text-blue-800 mb-2">📊 Scoring Guide:</h5>
                                <div className="text-sm text-blue-700 space-y-1">
                                    <div>
                                        <strong>Length:</strong> 8+ chars (+2), 12+ chars (+2), 15+ chars (+2), 20+ chars (+1)
                                    </div>
                                    <div>
                                        <strong>Diversity:</strong> Each character type enabled (+1 each)
                                    </div>
                                    <div>
                                        <strong>Penalties:</strong> Repeating patterns (-1), Sequential patterns (-1)
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-blue-300">
                                        <strong>Ratings:</strong> ≤3 Very Weak, ≤5 Weak, ≤7 Fair, ≤9 Good, 10+ Excellent
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default PasswordDisplay;
