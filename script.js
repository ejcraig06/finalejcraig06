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
// Array of sports facts
const sportsFacts = [
    "Basketball was invented in 1891 by Dr. James Naismith.",
    "The fastest recorded tennis serve was 263 km/h (163 mph).",
    "The longest professional baseball game lasted 33 innings.",
    "Michael Jordan won 6 NBA championships with the Chicago Bulls.",
    "Soccer is the most popular sport in the world, played in over 200 countries.",
    "The Olympic Games were first held in 776 BC in Greece."
];

// Select button and display paragraph
const factBtn = document.getElementById("factBtn");
const factDisplay = document.getElementById("factDisplay");

// Function to show random fact
factBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * sportsFacts.length);
    factDisplay.textContent = sportsFacts[randomIndex];
});
// Array of sample world records
const worldRecords = [
  "Fastest 100m sprint: 9.58 seconds by Usain Bolt",
  "Tallest man ever recorded: 8 ft 11 in (2.72 m) Robert Wadlow",
  "Longest fingernails ever on a pair of hands: 28 ft 4.5 in (8.65 m)",
  "Most push-ups in one hour: 2,806 by Charles Servizio",
  "Largest pizza ever made: 13,580 sq ft in Italy",
  "Longest marathon playing video games: 35 hours 35 minutes",
  "Most basketball free throws in one hour: 1,090 by Bob Fisher",
  "Heaviest aircraft pulled by a human: 188.83 tons by Kevin Fast"
];

// Function to get a random record
function getRandomRecord() {
  const index = Math.floor(Math.random() * worldRecords.length);
  return worldRecords[index];
}

// Button click event
document.getElementById("recordBtn").addEventListener("click", () => {
  const record = getRandomRecord();
  document.getElementById("recordDisplay").textContent = record;
});
