import type { PasswordOptions } from '../types';

interface CharacterOptionsProps {
    options: PasswordOptions;
    onOptionChange: (option: keyof Omit<PasswordOptions, 'length'>) => void;
}

/**
 * Character options component with checkboxes for different character types
 */
function CharacterOptions({ options, onOptionChange }: CharacterOptionsProps) {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Characters used:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={options.includeUppercase}
                        onChange={() => onOptionChange('includeUppercase')}
                        aria-label="Include uppercase letters"
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">ABC</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={options.includeLowercase}
                        onChange={() => onOptionChange('includeLowercase')}
                        aria-label="Include lowercase letters"
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">abc</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={options.includeNumbers}
                        onChange={() => onOptionChange('includeNumbers')}
                        aria-label="Include numbers"
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">123</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={options.includeSymbols}
                        onChange={() => onOptionChange('includeSymbols')}
                        aria-label="Include symbols"
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">#$&</span>
                </label>
            </div>
        </div>
    );
}

export default CharacterOptions;
