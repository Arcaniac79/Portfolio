const div = document.querySelector(".intro-typewriter");
let currentText = "Hi! I'm Ben."
let currentIndex = 0;
const texts = ["Hi! I'm Ben.", "Hi! I'm a UI/UX Designer.", "Hi! I'm a Game Designer.", "Hi! I'm a Web Developer.", "Hi! I'm a Game Developer."];

function typeText(element, text, i = 0) {
    setTimeout(() => element.textContent += text[i], 50);

    if (i === text.length - 1)
    {
        setTimeout(() => deleteText(element, element.textContent), 3000);
        return;
    }

    setTimeout(() => typeText(element, text, i + 1), 50);
}

function deleteText(element, text, i = 1) {
    element.textContent = text.slice(0, -i);

    if (i === currentText.length - 7)
    {
        currentIndex++;
        if (currentIndex > texts.length - 1)
        {
            currentIndex = 0;
        }
        currentText = texts[currentIndex];
        typeText(div, currentText, 7);
        return;
    }

    setTimeout(() => deleteText(element, text, i + 1), 50)
}

typeText(div, currentText);