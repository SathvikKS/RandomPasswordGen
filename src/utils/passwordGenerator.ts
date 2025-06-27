import type { PasswordOptions } from '../types';
import { CHARACTER_SETS, PASSWORD_LENGTH_LIMITS } from '../constants';

/**
 * Generates a cryptographically secure random password based on options
 */
export function generateSecurePassword(options: PasswordOptions): string {
    let charset = '';

    if (options.includeUppercase) charset += CHARACTER_SETS.uppercase;
    if (options.includeLowercase) charset += CHARACTER_SETS.lowercase;
    if (options.includeNumbers) charset += CHARACTER_SETS.numbers;
    if (options.includeSymbols) charset += CHARACTER_SETS.symbols;

    if (charset === '') {
        throw new Error('At least one character type must be selected');
    }

    if (options.length < PASSWORD_LENGTH_LIMITS.MIN) {
        throw new Error(`Password length must be at least ${PASSWORD_LENGTH_LIMITS.MIN} characters`);
    }

    if (options.length > PASSWORD_LENGTH_LIMITS.MAX) {
        throw new Error(`Password length cannot exceed ${PASSWORD_LENGTH_LIMITS.MAX} characters`);
    }

    // Use crypto.getRandomValues for better randomness
    const randomValues = new Uint32Array(options.length);
    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(randomValues);
    } else {
        // Fallback for older browsers
        for (let i = 0; i < options.length; i++) {
            randomValues[i] = Math.floor(Math.random() * 4294967295);
        }
    }

    let generatedPassword = '';
    for (let i = 0; i < options.length; i++) {
        const randomIndex = randomValues[i] % charset.length;
        generatedPassword += charset[randomIndex];
    }

    return generatedPassword;
}

/**
 * Validates password generation options
 */
export function validatePasswordOptions(options: PasswordOptions): string | null {
    if (!options.includeUppercase && !options.includeLowercase && !options.includeNumbers && !options.includeSymbols) {
        return 'Please select at least one character type!';
    }

    if (options.length < PASSWORD_LENGTH_LIMITS.MIN) {
        return `Password length must be at least ${PASSWORD_LENGTH_LIMITS.MIN} characters!`;
    }

    if (options.length > PASSWORD_LENGTH_LIMITS.MAX) {
        return `Password length cannot exceed ${PASSWORD_LENGTH_LIMITS.MAX} characters!`;
    }

    return null;
}
