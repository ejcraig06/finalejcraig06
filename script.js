// SPORTS NEWS API
const newsContainer = document.getElementById("news-container");

fetch("https://newsdata.io/api/1/news?apikey=pub_533658772d16dc923e6f98b19e82b5f5cfc41&category=sports")
    .then(response => response.json())
    .then(data => {
        newsContainer.innerHTML = "";
        
        data.results.slice(0, 5).forEach(article => {
            const div = document.createElement("div");
            div.style.margin = "15px 0";
            div.innerHTML = `<strong>${article.title}</strong><br>${article.description || ""}`;
            newsContainer.appendChild(div);
        });
    })
    .catch(err => {
        newsContainer.innerHTML = "Sorry, cannot load sports news right now.";
    });
