// NBA player API (LeBron James example)
fetch("https://www.balldontlie.io/api/v1/players/237")
    .then(res => res.json())
    .then(player => {
        document.getElementById("fact").textContent =
            `${player.first_name} ${player.last_name} currently plays for the ${player.team.full_name}.`;
    })
    .catch(() => {
        document.getElementById("fact").textContent =
            "Unable to load NBA data.";
    });
