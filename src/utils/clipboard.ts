/**
 * Copies text to clipboard with fallback support for older browsers
 */
export async function copyToClipboard(text: string): Promise<void> {
    if (!text) {
        throw new Error('No text provided to copy');
    }

    try {
        if (!navigator.clipboard) {
            throw new Error('Clipboard API not supported');
        }

        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error('Error copying with Clipboard API:', error);

        // Fallback: try to copy using execCommand
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();

            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);

            if (!successful) {
                throw new Error('execCommand copy failed');
            }
        } catch (fallbackError) {
            console.error('Fallback copy failed:', fallbackError);
            throw new Error('Failed to copy to clipboard. Please copy manually.');
        }
    }
}
