
const form = document.getElementById("disasterForm");
const reports = document.getElementById("reports");
const count = document.getElementById("count");

let disasters = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const disaster = {
    type: document.getElementById("type").value,
    location: document.getElementById("location").value,
    severity: document.getElementById("severity").value,
    description: document.getElementById("description").value
  };

  disasters.push(disaster);
  count.textContent = disasters.length;

  const card = document.createElement("article");
  card.className = "incident";

  const title = document.createElement("h3");
  title.textContent = disaster.type;

  const details = document.createElement("p");
  details.textContent =
    "Location: " + disaster.location +
    " | Severity: " + disaster.severity;

  const description = document.createElement("p");
  description.textContent = disaster.description;

  card.append(title, details, description);
  reports.prepend(card);

  form.reset();
});
