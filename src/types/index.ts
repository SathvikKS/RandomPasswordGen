export interface PasswordOptions {
    length: number;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
}

export interface PasswordStrengthDetails {
    lengthScore: number;
    diversityScore: number;
    patternPenalty: number;
    totalScore: number;
    hasRepeatingChars: boolean;
    hasSequentialChars: boolean;
    detectedPatterns: string[];
}

export interface PasswordStrength {
    text: string;
    color: string;
    details: PasswordStrengthDetails;
}

export interface CharacterSets {
    uppercase: string;
    lowercase: string;
    numbers: string;
    symbols: string;
}

export interface ToastConfig {
    position: 'top-right';
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
}
