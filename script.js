const services = ["Діагностика", "Масло", "Гальма"];

let selected = null;

const servicesDiv = document.getElementById("services");

services.forEach(s => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = s;
    div.onclick = () => {
        selected = s;
        document.getElementById("selected").innerText = s;
    };
    servicesDiv.appendChild(div);
});

const slots = ["09:00","10:00","11:00","12:00"];

const slotsDiv = document.getElementById("slots");

slots.forEach(t => {
    const div = document.createElement("div");
    div.className = "slot";
    div.innerText = t;

    div.onclick = () => {
        document.querySelectorAll(".slot")
            .forEach(x => x.classList.remove("active"));

        div.classList.add("active");
    };

    slotsDiv.appendChild(div);
});

document.getElementById("open").onclick = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
};
