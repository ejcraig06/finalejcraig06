async function loadSportsQuote() {
    try {
        const res = await fetch("https://api.quotable.io/random?tags=sports|inspirational");
        const data = await res.json();

        document.getElementById("quote").textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        document.getElementById("quote").textContent = "Could not load a quote right now.";
    }
}

document.getElementById("quote-btn").addEventListener("click", loadSportsQuote);

// Load quote on page load
loadSportsQuote();
