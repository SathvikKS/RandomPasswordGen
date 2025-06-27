import type { PasswordStrength, PasswordOptions } from '../types';

/**
 * Assesses password strength based on NIST 2024 guidelines
 * Focus on length over complexity, with practical security considerations
 */
export function assessPasswordStrength(password: string, options: PasswordOptions): PasswordStrength {
    if (!password)
        return {
            text: '',
            color: '',
            details: {
                lengthScore: 0,
                diversityScore: 0,
                patternPenalty: 0,
                totalScore: 0,
                hasRepeatingChars: false,
                hasSequentialChars: false,
                detectedPatterns: [],
            },
        };

    const length = password.length;
    let lengthScore = 0;

    // Length is the primary factor (NIST 2024 guidelines)
    if (length >= 8) lengthScore += 2; // Minimum acceptable
    if (length >= 12) lengthScore += 2; // Good length
    if (length >= 15) lengthScore += 2; // NIST recommended minimum
    if (length >= 20) lengthScore += 1; // Excellent length

    // Character diversity adds security (but less weight than length)
    let charTypes = 0;
    if (options.includeUppercase) charTypes++;
    if (options.includeLowercase) charTypes++;
    if (options.includeNumbers) charTypes++;
    if (options.includeSymbols) charTypes++;

    const diversityScore = charTypes;

    // Check for common weak patterns
    const hasRepeatingChars = /(.)\1{2,}/.test(password);
    const hasSequentialChars =
        /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(password);

    // Detect specific patterns for detailed explanation
    const detectedPatterns: string[] = [];
    if (hasRepeatingChars) {
        const repeatingMatch = password.match(/(.)\1{2,}/);
        if (repeatingMatch) {
            detectedPatterns.push(`Repeating characters: "${repeatingMatch[0]}"`);
        }
    }
    if (hasSequentialChars) {
        const sequentialPatterns = [
            '012',
            '123',
            '234',
            '345',
            '456',
            '567',
            '678',
            '789',
            '890',
            'abc',
            'bcd',
            'cde',
            'def',
            'efg',
            'fgh',
            'ghi',
            'hij',
            'ijk',
            'jkl',
            'klm',
            'lmn',
            'mno',
            'nop',
            'opq',
            'pqr',
            'qrs',
            'rst',
            'stu',
            'tuv',
            'uvw',
            'vwx',
            'wxy',
            'xyz',
        ];

        for (const pattern of sequentialPatterns) {
            if (password.toLowerCase().includes(pattern)) {
                const actualMatch = password.match(new RegExp(pattern, 'i'));
                if (actualMatch) {
                    detectedPatterns.push(`Sequential characters: "${actualMatch[0]}"`);
                    break; // Only report the first match to avoid clutter
                }
            }
        }
    }

    let patternPenalty = 0;
    if (hasRepeatingChars) patternPenalty += 1;
    if (hasSequentialChars) patternPenalty += 1;

    const totalScore = lengthScore + diversityScore - patternPenalty;

    const details = {
        lengthScore,
        diversityScore,
        patternPenalty,
        totalScore,
        hasRepeatingChars,
        hasSequentialChars,
        detectedPatterns,
    };

    // Strength categories based on NIST guidance and practical security
    if (length < 8 || totalScore <= 3) {
        return { text: 'Very Weak', color: 'text-red-800 bg-red-100 border-red-300', details };
    } else if (length < 12 || totalScore <= 5) {
        return { text: 'Weak', color: 'text-orange-800 bg-orange-100 border-orange-300', details };
    } else if (length < 15 || totalScore <= 7) {
        return { text: 'Fair', color: 'text-yellow-800 bg-yellow-100 border-yellow-300', details };
    } else if (length < 20 || totalScore <= 9) {
        return { text: 'Good', color: 'text-blue-800 bg-blue-100 border-blue-300', details };
    } else {
        return { text: 'Excellent', color: 'text-green-800 bg-green-100 border-green-300', details };
    }
}
