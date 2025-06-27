/**
 * Security tips component with NIST 2024 guidelines
 */
function SecurityTips() {
    return (
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">🔒 NIST 2024 Password Security Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">✅ Best Practices</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li>
                            • <strong>Length matters most:</strong> Aim for 15+ characters
                        </li>
                        <li>
                            • <strong>Use passphrases:</strong> "Coffee!Morning!Sunshine!" is stronger than "P@ssw0rd!"
                        </li>
                        <li>
                            • <strong>Unique passwords:</strong> Never reuse passwords across accounts
                        </li>
                        <li>
                            • <strong>Password managers:</strong> Use them to generate and store strong passwords
                        </li>
                        <li>
                            • <strong>Multi-factor authentication:</strong> Enable MFA whenever possible
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">❌ Avoid These</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li>
                            • <strong>Personal information:</strong> Names, birthdays, addresses
                        </li>
                        <li>
                            • <strong>Common patterns:</strong> "123456", "password", "qwerty"
                        </li>
                        <li>
                            • <strong>Simple substitutions:</strong> "@" for "a", "3" for "e"
                        </li>
                        <li>
                            • <strong>Frequent changes:</strong> Only change if compromised
                        </li>
                        <li>
                            • <strong>Password hints:</strong> They make passwords easier to guess
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                    <strong>💡 Pro Tip:</strong> This generator follows NIST SP 800-63B guidelines, focusing on length over complexity. A 20-character password
                    with mixed characters is exponentially stronger than an 8-character complex password.
                </p>
            </div>
        </div>
    );
}

export default SecurityTips;
