const textElement = document.getElementById('typing-text');
const texts = ["Websites", "Back-end"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[currentTextIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        textElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();