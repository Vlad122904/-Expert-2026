const slotsDiv = document.getElementById("slots");
let selectedSlot = null;

// створення слотів 9:00 - 17:00
for(let h=9; h<=17; h++){
    let div = document.createElement("div");
    div.classList.add("slot");
    div.textContent = h + ":00";

    div.onclick = () => {
        document.querySelectorAll(".slot").forEach(s => s.classList.remove("active"));
        div.classList.add("active");
        selectedSlot = div.textContent;
    };

    slotsDiv.appendChild(div);
}

function book(){
    const service = document.getElementById("service").value;

    if(!selectedSlot){
        alert("Оберіть час!");
        return;
    }

    alert(
        "✅ Бронювання підтверджено!\n\n" +
        "Послуга: " + service + "\n" +
        "Час: " + selectedSlot
    );
}
