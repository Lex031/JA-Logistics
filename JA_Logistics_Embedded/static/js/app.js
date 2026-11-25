// State of the 5 turnouts (false = default/0, true = diverging/1)
const switches = { 1: false, 2: false, 3: false, 4: false, 5: false };

// Extra 360°-rotaties per wissel zodat de pijl bij elke klik een heel rondje maakt
const spinTurns = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

// Hoek in graden voor pijlrichting (0 = rechts, 180 = links, negatief = omhoog, positief = omlaag)
const switchAngles = {
  1: { straight: 180, diverging: 137  }, // Links <-> Onder (diagonaal)
  2: { straight: 0,   diverging: 137  }, // Rechts <-> Onder (diagonaal)
  3: { straight: 0,   diverging: -43  }, // Rechts <-> Boven (diagonaal)
  4: { straight: 180, diverging: 137  }, // Links <-> Onder (spur)
  5: { straight: 180, diverging: -137 }  // Links <-> Boven (midden-spoor)
};

// Coordinates for sensor feedback ("POS:TOP_LEFT", "POS:MID_1", etc.)
const zoneCoords = {
  "TOP_LEFT":  [220, 65],
  "TOP_RIGHT": [640, 65],
  "MID_1":     [475, 145],
  "BOT_LEFT":  [140, 225],
  "BOT_MID":   [510, 225],
  "BOT_RIGHT": [780, 225],
  "BOT_SPUR":  [200, 290]
};

function renderSwitchRoute(id, spinFullCircle = false) {
  const isDiverging = switches[id];
  const activeState = isDiverging ? 1 : 0;

  const line0 = document.getElementById(`route-sw${id}-0`);
  const line1 = document.getElementById(`route-sw${id}-1`);

  line0.classList.toggle("active", activeState === 0);
  line1.classList.toggle("active", activeState === 1);

  if (spinFullCircle) {
    spinTurns[id] += 1;
  }

  const baseAngle = isDiverging ? switchAngles[id].diverging : switchAngles[id].straight;
  const totalAngle = baseAngle + spinTurns[id] * 360;

  const arrow = document.getElementById(`arrow-sw${id}`);
  arrow.setAttribute("transform", `rotate(${totalAngle})`);
}

function toggleSwitch(id) {
  switches[id] = !switches[id];
  const isDiverging = switches[id];

  // Geef `true` mee zodat de pijl een extra 360°-ronde maakt naar de nieuwe stand
  renderSwitchRoute(id, true);

  const stateStr = `SW${id}:${isDiverging ? 1 : 0}`;
  document.getElementById("status").innerText =
    `Turnout ${id} set to ${isDiverging ? "DIVERGING" : "DEFAULT"} (${stateStr})`;

  sendRaw(`${id}:${isDiverging ? 1 : 0}\n`);
}

function setTrainPos(name, x, y) {
  const token = document.getElementById("train-token");
  token.setAttribute("transform", `translate(${x}, ${y})`);
  document.getElementById("status").innerText = `Train position: ${name}`;
}

function newPuzzle() {
  const cars = ["Car 1 (Red)", "Car 2 (Blue)", "Car 3 (Yellow)", "Car 4 (Green)", "Car 5 (White)"];
  const spots = [
    "TOP LEFT (Cap 3)",
    "TOP RIGHT (Cap 3)",
    "MID SIDING (Cap 1)",
    "BOT CENTER (Cap 2)",
    "BOT SPUR (Cap 2)"
  ];

  const shuffled = spots.sort(() => Math.random() - 0.5);
  const container = document.getElementById("puzzleGoals");

  container.innerHTML = cars.map((car, i) => `
    <div class="goal-card">
      <span>${car}</span>
      <strong>${shuffled[i]}</strong>
    </div>
  `).join("");
}

// Bij het laden geen extra rondje draaien, direct op de startstand zetten
[1, 2, 3, 4, 5].forEach((id) => renderSwitchRoute(id, false));
newPuzzle();