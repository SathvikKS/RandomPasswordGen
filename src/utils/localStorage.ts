import type { PasswordOptions } from '../types';
import { DEFAULT_PASSWORD_OPTIONS } from '../constants';

const STORAGE_KEY = 'passwordGeneratorPreferences';

/**
 * Checks if localStorage is available in the current environment
 */
export function isLocalStorageAvailable(): boolean {
    try {
        return typeof Storage !== 'undefined' && !!localStorage;
    } catch {
        return false;
    }
}

/**
 * Saves password preferences to localStorage
 */
export function savePasswordPreferences(options: PasswordOptions): void {
    try {
        if (!isLocalStorageAvailable()) {
            return;
        }

        const preferencesData = JSON.stringify(options);
        localStorage.setItem(STORAGE_KEY, preferencesData);
    } catch (error) {
        console.warn('Failed to save password preferences to localStorage:', error);
    }
}

/**
 * Loads password preferences from localStorage
 * Returns default options if no preferences are found or if there's an error
 */
export function loadPasswordPreferences(): PasswordOptions {
    try {
        if (!isLocalStorageAvailable()) {
            return DEFAULT_PASSWORD_OPTIONS;
        }

        const storedPreferences = localStorage.getItem(STORAGE_KEY);

        if (!storedPreferences) {
            return DEFAULT_PASSWORD_OPTIONS;
        }

        const parsedPreferences = JSON.parse(storedPreferences) as PasswordOptions;

        // Validate that all required properties exist
        const isValidPreferences =
            typeof parsedPreferences === 'object' &&
            typeof parsedPreferences.length === 'number' &&
            typeof parsedPreferences.includeUppercase === 'boolean' &&
            typeof parsedPreferences.includeLowercase === 'boolean' &&
            typeof parsedPreferences.includeNumbers === 'boolean' &&
            typeof parsedPreferences.includeSymbols === 'boolean';

        if (!isValidPreferences) {
            console.warn('Invalid password preferences found in localStorage, using defaults');
            return DEFAULT_PASSWORD_OPTIONS;
        }

        // Ensure length is within reasonable bounds
        if (parsedPreferences.length < 4 || parsedPreferences.length > 128) {
            parsedPreferences.length = DEFAULT_PASSWORD_OPTIONS.length;
        }

        return parsedPreferences;
    } catch (error) {
        console.warn('Failed to load password preferences from localStorage:', error);
        return DEFAULT_PASSWORD_OPTIONS;
    }
}

/**
 * Clears password preferences from localStorage
 */
export function clearPasswordPreferences(): void {
    try {
        if (!isLocalStorageAvailable()) {
            return;
        }

        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.warn('Failed to clear password preferences from localStorage:', error);
    }
}
