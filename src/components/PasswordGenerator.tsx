import { lazy, Suspense } from 'react';
import Header from './Header';
import PasswordDisplay from './PasswordDisplay';
import PasswordLengthControl from './PasswordLengthControl';
import CharacterOptions from './CharacterOptions';
import GenerateButton from './GenerateButton';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import { DEFAULT_PASSWORD_OPTIONS } from '../constants';

// Lazy load SecurityTips for better performance
const SecurityTips = lazy(() => import('./SecurityTips'));

/**
 * Main password generator component that orchestrates all sub-components
 */
function PasswordGenerator() {
    const { password, options, passwordStrength, generatePassword, handleCopyPassword, updateLength, updateOption } =
        usePasswordGenerator(DEFAULT_PASSWORD_OPTIONS);

    const handleGeneratePassword = () => {
        generatePassword();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <Header />

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <PasswordDisplay password={password} passwordStrength={passwordStrength} onCopy={handleCopyPassword} />

                    <PasswordLengthControl length={options.length} onLengthChange={updateLength} />

                    <CharacterOptions options={options} onOptionChange={updateOption} />

                    <GenerateButton onGenerate={handleGeneratePassword} />
                </div>

                <Suspense fallback={<div className="mt-8 h-32 bg-white rounded-xl shadow-lg animate-pulse" />}>
                    <SecurityTips />
                </Suspense>
            </div>
        </div>
    );
}

export default PasswordGenerator;
