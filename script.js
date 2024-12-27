const consoleElement = document.getElementById('console');

function getRandomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function getRandomMessage() {
    const messages = [
        "Accessing system files...",
        "Bypassing firewall...",
        "Decrypting passwords...",
        "Establishing secure connection...",
        "Running exploit scripts...",
        "Compiling data logs...",
        "Uploading virus...",
        "Database breach detected...",
        "Disabling security protocols...",
        "Hacking mainframe...",
        "System override successful!",
        "Intrusion detected! Evading...",
        "Scanning network for vulnerabilities...",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function hackerEffect() {
    let output = '';
    const lines = 20;  // Number of lines shown at a time
    for (let i = 0; i < lines; i++) {
        // Mix random characters with fake hacker messages
        const randomMessageChance = Math.random();
        if (randomMessageChance > 0.85) {
            output += getRandomMessage() + '\n';
        } else {
            let randomLine = '';
            const lineLength = Math.floor(Math.random() * 40) + 20;  // Random line length
            for (let j = 0; j < lineLength; j++) {
                randomLine += getRandomChar();
            }
            output += randomLine + '\n';
        }
    }
    consoleElement.innerText += output;
    consoleElement.scrollTop = consoleElement.scrollHeight; // Scroll to the bottom automatically
}

// Simulate typing effect every 500 milliseconds
setInterval(hackerEffect, 500);
