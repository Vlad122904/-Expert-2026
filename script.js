const slotsDiv = document.getElementById("slots");
let selected = null;

if(slotsDiv){
  for(let h=9; h<=17; h++){
    let s = document.createElement("div");
    s.className = "slot";
    s.textContent = h + ":00";

    s.onclick = () => {
      document.querySelectorAll(".slot").forEach(el => el.classList.remove("active"));
      s.classList.add("active");
      selected = s.textContent;
    };

    slotsDiv.appendChild(s);
  }
}

function book(){
  const service = document.getElementById("service").value;

  if(!selected){
    alert("Оберіть час!");
    return;
  }

  window.location.href =
  `confirm.html?service=${service}&time=${selected}`;
}
