const services = [
    { id: 1, name: "Комп'ютерна діагностика", price: "800 грн" },
    { id: 2, name: "Заміна масла", price: "1200 грн" },
    { id: 3, name: "Гальмівна система", price: "2500 грн" }
];

let selectedService = null;
let selectedSlot = null;

function renderServices() {
    const grid = document.getElementById('services-grid');

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.price}</p>
        `;
        card.onclick = () => selectService(service);
        grid.appendChild(card);
    });
}

function selectService(service) {
    selectedService = service;

    document.getElementById('selected-service').innerHTML =
        service.name;

    document.getElementById('booking').classList.remove('hidden');

    generateSlots();
}

function generateSlots() {
    const times = ["10:00", "11:00", "12:00", "13:00"];
    const grid = document.getElementById('slots-grid');
    grid.innerHTML = '';

    times.forEach(time => {
        const div = document.createElement('div');
        div.className = 'slot';
        div.innerText = time;

        div.onclick = () => {
            document.querySelectorAll('.slot')
                .forEach(s => s.classList.remove('selected'));

            div.classList.add('selected');
            selectedSlot = time;

            document.getElementById('confirm-booking').disabled = false;
        };

        grid.appendChild(div);
    });
}

document.getElementById('confirm-booking').onclick = () => {
    alert(`Заброньовано: ${selectedService.name} о ${selectedSlot}`);
};

document.getElementById('open-booking').onclick = () => {
    document.getElementById('booking').classList.remove('hidden');
};

renderServices();