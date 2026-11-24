const PYBRICKS_SERVICE = "c5f50001-8280-46da-89f4-6d8051e4aeef";
const PYBRICKS_COMMAND_EVENT = "c5f50002-8280-46da-89f4-6d8051e4aeef";

let bleDevice = null;
let commandChar = null;

function updateConnectionButtons(isConnected) {
  document.getElementById("btnConnect").disabled = isConnected;
  document.getElementById("btnDisconnect").disabled = !isConnected;
}

async function connectHub() {
  const status = document.getElementById("status");
  const nameQuery = document.getElementById("hubNameInput").value.trim();

  try {
    const filter = { services: [PYBRICKS_SERVICE] };
    if (nameQuery.length > 0) filter.namePrefix = nameQuery;

    bleDevice = await navigator.bluetooth.requestDevice({ filters: [filter] });
    bleDevice.addEventListener("gattserverdisconnected", onDisconnected);

    const server = await bleDevice.gatt.connect();
    const service = await server.getPrimaryService(PYBRICKS_SERVICE);
    commandChar = await service.getCharacteristic(PYBRICKS_COMMAND_EVENT);

    await commandChar.startNotifications();
    commandChar.addEventListener("characteristicvaluechanged", handleHubMessage);

    await commandChar.writeValueWithoutResponse(new Uint8Array([0x01]));
    updateConnectionButtons(true);
    status.innerText = "Connected to " + (bleDevice.name || "Hub") + "!";
  } catch (err) {
    status.innerText = "Error: " + err.message;
  }
}

async function disconnectHub() {
  if (!bleDevice) return;

  try {
    // Stop de trein voor de veiligheid voordat we verbreken
    await sendCmd("s");
  } catch (_) {
    // Negeer fouten als de verbinding al half verbroken was
  }

  if (bleDevice.gatt.connected) {
    bleDevice.gatt.disconnect();
  } else {
    onDisconnected();
  }
}

function onDisconnected() {
  commandChar = null;
  updateConnectionButtons(false);
  document.getElementById("status").innerText = "Status: Disconnected";
}

function handleHubMessage(event) {
  const status = document.getElementById("status");
  const view = new Uint8Array(event.target.value.buffer);

  if (view[0] === 0x01) {
    const msg = new TextDecoder().decode(view.slice(1)).trim();
    if (msg.startsWith("POS:")) {
      const zone = msg.replace("POS:", "").trim();
      if (zoneCoords[zone]) {
        setTrainPos(zone, zoneCoords[zone][0], zoneCoords[zone][1]);
      }
    } else if (msg) {
      status.innerText = "Hub: " + msg;
    }
  }
}

async function sendCmd(letter) {
  await sendRaw(letter);
}

async function sendRaw(text) {
  if (!commandChar) return;
  const bytes = new TextEncoder().encode(text);
  const payload = new Uint8Array(bytes.length + 1);
  payload[0] = 0x06;
  payload.set(bytes, 1);
  await commandChar.writeValueWithoutResponse(payload);
}