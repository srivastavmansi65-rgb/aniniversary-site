document.addEventListener('DOMContentLoaded', function() {
    // Handle name form submission
    const nameForm = document.getElementById('name-form');
    const nameInput = document.getElementById('name-input');
    const h1 = document.querySelector('h1');

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            h1.textContent = `Happy Anniversary, ${name}!`;
            nameForm.style.display = 'none';
        }
    });

    // Create floating hearts container
    const floatingHearts = document.createElement('div');
    floatingHearts.className = 'floating-hearts';
    document.body.appendChild(floatingHearts);

    // Function to create a floating heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5-10s
        heart.style.fontSize = (Math.random() * 1 + 1) + 'em'; // 1-2em
        floatingHearts.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    // Create hearts every 500ms
    setInterval(createHeart, 500);

    // Create romantic messages container
    const romanticMessages = document.createElement('div');
    romanticMessages.className = 'romantic-messages';
    document.body.appendChild(romanticMessages);

    // Array of romantic messages
    const messages = [
        "I love you more than words can say",
        "Forever yours",
        "My heart beats for you",
        "You are my everything",
        "Together forever",
        "Eternal love",
        "My soulmate",
        "Always and forever"
    ];

    // Function to create a romantic message
    function createRomanticMessage() {
        const message = document.createElement('div');
        message.className = 'romantic-message';
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        message.style.left = Math.random() * 80 + 'vw'; // Random horizontal position
        message.style.animationDelay = Math.random() * 5 + 's'; // Random delay
        romanticMessages.appendChild(message);

        // Remove message after animation
        setTimeout(() => {
            message.remove();
        }, 8000);
    }

    // Create romantic messages every 3 seconds
    setInterval(createRomanticMessage, 3000);

    // Function to create golden fireworks
    function createGoldenFireworks() {
        const fireworksContainer = document.querySelector('.golden-fireworks');
        if (fireworksContainer) {
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                fireworksContainer.appendChild(particle);
            }
        }
    }

    // Initialize golden fireworks on load
    createGoldenFireworks();
});
