document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("message");
    const surpriseBtn = document.getElementById("surpriseBtn");

    surpriseBtn.addEventListener("click", () => {
        // Simple array of surprise messages
        const surprises = [
            "🎉 Surprise! You’re the best!",
            "🎈 Hope your day is filled with joy and laughter!",
            "🎁 Here’s a virtual gift just for you!",
            "🎂 May your year be as awesome as you are!"
        ];

        // Randomly select a surprise message
        const randomIndex = Math.floor(Math.random() * surprises.length);
        messageElement.textContent = surprises[randomIndex];
    });
});