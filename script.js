const services = [
    { name: "Діагностика" },
    { name: "Заміна масла" },
    { name: "Гальмівна система" }
];

let selectedService = null;
let selectedSlot = null;

function renderServices() {
    const grid = document.getElementById("services-grid");

    services.forEach(s => {
        const div = document.createElement("div");
        div.className = "service-card";
        div.innerHTML = `<h3>${s.name}</h3>`;
        div.onclick = () => selectService(s);
        grid.appendChild(div);
    });
}

function selectService(s) {
    selectedService = s;
    document.getElementById("booking").classList.remove("hidden");
    document.getElementById("selected-service").innerText = s.name;
    generateSlots();
}

function generateSlots() {
    const times = ["10:00","11:00","12:00","13:00","14:00"];
    const grid = document.getElementById("slots-grid");

    grid.innerHTML = "";

    times.forEach(t => {
        const div = document.createElement("div");
        div.className = "slot";
        div.innerText = t;

        div.onclick = () => {
            document.querySelectorAll(".slot")
                .forEach(el => el.classList.remove("selected"));

            div.classList.add("selected");
            selectedSlot = t;

            document.getElementById("confirm-booking").disabled = false;
        };

        grid.appendChild(div);
    });
}

document.getElementById("open-booking").onclick = () => {
    document.getElementById("booking").classList.remove("hidden");
};

document.getElementById("confirm-booking").onclick = () => {
    alert(`${selectedService.name} о ${selectedSlot}`);
};

renderServices();
