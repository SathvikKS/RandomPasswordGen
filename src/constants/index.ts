import type { CharacterSets, PasswordOptions, ToastConfig } from '../types';

export const CHARACTER_SETS: CharacterSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

export const DEFAULT_PASSWORD_OPTIONS: PasswordOptions = {
    length: 15,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
};

export const TOAST_CONFIG: {
    success: ToastConfig;
    error: ToastConfig;
    warning: ToastConfig;
} = {
    success: {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    },
    error: {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    },
    warning: {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    },
};

export const PASSWORD_LENGTH_LIMITS = {
    MIN: 4,
    MAX: 128,
    RECOMMENDED_MIN: 15,
} as const;
