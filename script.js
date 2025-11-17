async function loadAnimeQuote() {
    try {
        const response = await fetch("https://animechan.xyz/api/random");
        const data = await response.json();

        document.getElementById("quote").textContent = 
            `"${data.quote}" — ${data.character} (${data.anime})`;
    } catch (error) {
        document.getElementById("quote").textContent =
            "Could not load a quote right now 😢";
    }
}

document.getElementById("quote-btn").addEventListener("click", loadAnimeQuote);

// Load one on first visit
loadAnimeQuote();
