async function loadQuote() {
    try {
        const res = await fetch("https://api.quotable.io/random?tags=sports|inspirational");
        const data = await res.json();

        const quoteBox = document.getElementById("quote");

        // Fade-in effect for each new quote
        quoteBox.style.opacity = 0;
        setTimeout(() => {
            quoteBox.textContent = `"${data.content}" — ${data.author}`;
            quoteBox.style.transition = "opacity 1s";
            quoteBox.style.opacity = 1;
        }, 150);

    } catch (error) {
        document.getElementById("quote").textContent = "Error loading quote. Try again!";
    }
}

document.getElementById("quote-btn").addEventListener("click", loadQuote);

// Load first quote
loadQuote();
