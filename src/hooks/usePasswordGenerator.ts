import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import type { PasswordOptions } from '../types';
import { generateSecurePassword, validatePasswordOptions } from '../utils/passwordGenerator';
import { assessPasswordStrength } from '../utils/passwordStrength';
import { copyToClipboard } from '../utils/clipboard';
import { TOAST_CONFIG } from '../constants';

export function usePasswordGenerator(initialOptions: PasswordOptions) {
    const [password, setPassword] = useState<string>('');
    const [options, setOptions] = useState<PasswordOptions>(initialOptions);

    /**
     * Generates a new password based on current options
     */
    const generatePassword = useCallback(
        (showSuccessToast = false) => {
            try {
                const validationError = validatePasswordOptions(options);
                if (validationError) {
                    toast.error(validationError, TOAST_CONFIG.error);
                    return;
                }

                const newPassword = generateSecurePassword(options);
                setPassword(newPassword);

                if (showSuccessToast) {
                    toast.success('Password generated successfully!', TOAST_CONFIG.success);
                }
            } catch (error) {
                console.error('Error generating password:', error);
                const errorMessage = error instanceof Error ? error.message : 'Failed to generate password. Please try again.';
                toast.error(errorMessage, TOAST_CONFIG.error);
            }
        },
        [options],
    );

    /**
     * Copies the current password to clipboard
     */
    const handleCopyPassword = useCallback(async () => {
        if (!password) {
            toast.warning('Generate a password first!', TOAST_CONFIG.warning);
            return;
        }

        try {
            await copyToClipboard(password);
            toast.success('Password copied to clipboard!', TOAST_CONFIG.success);
        } catch (error) {
            console.error('Error copying password:', error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to copy password';
            toast.error(errorMessage, TOAST_CONFIG.error);
        }
    }, [password]);

    /**
     * Updates password length
     */
    const updateLength = useCallback((length: number) => {
        setOptions((prev) => ({ ...prev, length }));
    }, []);

    /**
     * Updates character type options
     */
    const updateOption = useCallback((option: keyof Omit<PasswordOptions, 'length'>) => {
        setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
    }, []);

    /**
     * Gets current password strength
     */
    const passwordStrength = assessPasswordStrength(password, options);

    // Generate initial password on mount
    useEffect(() => {
        generatePassword();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Generate password in real-time when options change
    useEffect(() => {
        generatePassword();
    }, [options, generatePassword]);

    return {
        password,
        options,
        passwordStrength,
        generatePassword,
        handleCopyPassword,
        updateLength,
        updateOption,
    };
}
