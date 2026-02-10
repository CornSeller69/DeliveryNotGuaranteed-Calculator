const playerweight = 13;
let playeramt = 1;
let cargoweight = 0;
let cargoamt = 0;
let shipweight = 0;
let addit = 0;

function plusonecargo() {
      let a = Number(document.getElementById("cargoamt").value);
      document.getElementById("cargoamt").value = a + 1;
}

function calcul() {
      playeramt = Number(document.getElementById("crewamt").value);
      let totalplayer = playeramt * playerweight;
      shipweight = Number(document.getElementById("shipwgt").value);
      cargoweight = Number(document.getElementById("cargowgt").value);
      cargoamt = Number(document.getElementById("cargoamt").value);
      let totalcargo = cargoamt * cargoweight;
      addit = Number(document.getElementById("addit").value);

      let spaceleft = shipweight - totalplayer - totalcargo - addit;
      let spaceused = totalplayer + totalcargo + addit;
      document.getElementById("wynik").innerHTML = spaceused + "/" + shipweight + ".<br>" + spaceleft + "kg left.";
      if (spaceused > shipweight) {document.getElementById("wynik").style.color = "red";} else if (spaceused == shipweight) {document.getElementById("wynik").style.color = "chocolate";} else {document.getElementById("wynik").style.color = "black";}
}

function resetvals() {
      document.getElementById("crewamt").value = 1;
      document.getElementById("shipwgt").value = 0;
      document.getElementById("cargowgt").value = 0;
      document.getElementById("cargoamt").value = 0;
      document.getElementById("addit").value = 0;
}