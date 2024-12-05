//-------------------------------------------------
//Importation data from JSON file puis les stocker dans une array
//-------------------------------------------------
let dataArray = [];
async function loadPlayers() {
  try {
    const response = await fetch('../assets/JS/players.json');
    const data = await response.json();
    dataArray = data.players
    // console.log(dataArray)
  } catch (error) {
    console.error('Erreur lors du chargement des joueurs :', error);
  }
};
loadPlayers();
// console.log(dataArray);

setTimeout(function () {
  console.log(dataArray);
  showPlayers();
}, 500);

function showPlayers(){
  const playerList = document.getElementById('playerList');
  // console.log(data);
  
  playerList.innerHTML="";
  dataArray.forEach(player => {
    const card = document.createElement('div');
    const name = player.name;
    const photo = player.photo;
    const position = player.position;
    const nationality = player.nationality;
    const flag = player.flag;
    const club = player.club;
    const logo = player.logo;
    const rating = player.rating;
    const pace = player.pace;
    const shooting = player.shooting;
    const passing = player.passing;
    const dribbling = player.dribbling;
    const defending = player.defending;
    const physical = player.physical;
    //performances des GK
    const diving = player.diving;
    const handling = player.handling;
    const kicking = player.kicking;
    const reflexes = player.reflexes;
    const speed = player.speed;
    const positioning = player.positioning;

    card.className = 'fut-player-card dragging';

    if (position === "GK") {
      card.innerHTML = `
          <div class="player-card-top">
            <div class="player-master-info">
              <div class="player-rating">
                <span>${rating}</span>
              </div>
              <div class="player-position">
                <span>${position}</span>
              </div>
              <div class="player-nation">
                <img src="${flag}" alt="${nationality}" draggable="false"/>
              </div>
              <div class="player-club">
                <img src="${logo}" alt="${club}" draggable="false"/>
              </div>
            </div>
            <div class="player-picture">
              <img src="${photo}" alt="Messi" draggable="false"/>
              <div class="player-extra">
                <span>4*SM</span>
                <span>4*WF</span>
              </div>
            </div>
          </div>
          <div class="player-card-bottom">
            <div class="player-info">
              <!-- Player Name-->
              <div class="player-name">
                <span>${name}</span>
              </div>
              <!-- Player Features-->
              <div class="player-features">
                <div class="player-features-col">
                  <span>
                    <div class="player-feature-value">${diving}</div>
                    <div class="player-feature-title">DIV</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${handling}</div>
                    <div class="player-feature-title">HAN</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${kicking}</div>
                    <div class="player-feature-title">HIC</div>
                  </span>
                </div>
                <div class="player-features-col">
                  <span>
                    <div class="player-feature-value">${reflexes}</div>
                    <div class="player-feature-title">REF</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${speed}</div>
                    <div class="player-feature-title">SPE</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${positioning}</div>
                    <div class="player-feature-title">POS</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
    `;
    } else {
      card.innerHTML = `
          <div class="player-card-top">
            <div class="player-master-info">
              <div class="player-rating">
                <span>${rating}</span>
              </div>
              <div class="player-position">
                <span>${position}</span>
              </div>
              <div class="player-nation">
                <img src="${flag}" alt="${nationality}" draggable="false"/>
              </div>
              <div class="player-club">
                <img src="${logo}" alt="${club}" draggable="false"/>
              </div>
            </div>
            <div class="player-picture">
              <img src="${photo}" alt="Messi" draggable="false"/>
              <div class="player-extra">
                <span>4*SM</span>
                <span>4*WF</span>
              </div>
            </div>
          </div>
          <div class="player-card-bottom">
            <div class="player-info">
              <!-- Player Name-->
              <div class="player-name">
                <span>${name}</span>
              </div>
              <!-- Player Features-->
              <div class="player-features">
                <div class="player-features-col">
                  <span>
                    <div class="player-feature-value">${pace}</div>
                    <div class="player-feature-title">PAC</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${shooting}</div>
                    <div class="player-feature-title">SHO</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${passing}</div>
                    <div class="player-feature-title">PAS</div>
                  </span>
                </div>
                <div class="player-features-col">
                  <span>
                    <div class="player-feature-value">${dribbling}</div>
                    <div class="player-feature-title">DRI</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${defending}</div>
                    <div class="player-feature-title">DEF</div>
                  </span>
                  <span>
                    <div class="player-feature-value">${physical}</div>
                    <div class="player-feature-title">PHY</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
    `;
    };
    card.draggable = true;
    card.style.cursor = "grab";
    // card.style.filter = "drop-shadow(0px 0px 10px rgba(3, 201, 169, 2));"
    playerList.appendChild(card);
  });
}
//---------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
const cards = document.querySelectorAll(".fut-player-card");
cards.forEach(card =>{
  card.addEventListener("dragstart", ()=>{
  // card.classList.add("is-dragging")
  // card.style.filter = 
  })

});

//------------------------------------------------------------------------------------
//Affichage des cartes vides selon la formation choisi
//------------------------------------------------------------------------------------

document.getElementById('formationSelect').addEventListener('change', e => {
  const formation = e.target.value;
  updateGridFormation(formation);
});

function updateGridFormation(formation) {
  const grid = document.querySelector('.grid1');
  grid.innerHTML = '';
  if (formation === '4-4-2') {
    grid.innerHTML = `
      <div class="player-card "><div></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card ST"></div>
        <div class="player-card GK"></div>
        <div class="player-card CB"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card GK"></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
    `
  } else if (formation === '4-3-3') {
    grid.innerHTML = `
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
   
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"><div class="img-holder"><img src="../assets/imgs/empty-card-2.png" alt=""><div role="status">
    
</div></div></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
        <div class="player-card"></div>
    `
  }
};
//------------------------------------------------------------------------------------------------

const position = document.getElementById("position");
const playersConfigs = document.getElementById("players-performances");
const gkConfigs = document.getElementById("gk-performances");

position.addEventListener("change", () => {
  const selectedPosition = position.value;

  if (selectedPosition === "GK") {
    playersConfigs.classList.add("hidden");
    gkConfigs.classList.remove("hidden");

    const playerInputs = playersConfigs.querySelectorAll("input");
    playerInputs.forEach(input => {
        input.removeAttribute("required");
    });
  } else {
    playersConfigs.classList.remove("hidden");
    gkConfigs.classList.add("hidden");

    const gkInputs = gkConfigs.querySelectorAll("input");
    gkInputs.forEach(input => {
        input.removeAttribute("required");
    });
  }
});
//----------------------------------------------------------------
//logique du switch entre l'afichage du terrain et du banc des remplaçants
//----------------------------------------------------------------
const benchBtn = document.getElementById("bench-btn");
const fieldBtn = document.getElementById("field-btn");
benchBtn.addEventListener("click", function () {
  const field = document.getElementById("field");
  const bench = document.getElementById("bench");

  field.classList.add("hidden");
  bench.classList.remove("hidden");
});

fieldBtn.addEventListener("click", function () {
  const field = document.getElementById("field");
  const bench = document.getElementById("bench");

  field.classList.remove("hidden");
  bench.classList.add("hidden");
});
//----------------------------------------------------------------
function closeModal() {
  const modal = document.getElementById("crud-modal"); 
  modal.style.display = "none";
}
//----------------------------------------------------------------
// fonction d'ajout d'un nouveau joueur
//----------------------------------------------------------------
function addPlayer(event){ 
  event.preventDefault();

  const form = document.getElementById("add-player-form");
  const formData = new FormData(form);

  const playerName = formData.get("name");
  const playerPhoto = formData.get("photo");
  const playerPosition = formData.get("position");
  const playerNationality = formData.get("nationality");
  const playerFlag = formData.get("flag");
  const playerClub = formData.get("club");
  const playerLogo = formData.get("logo");
  const playerRating = formData.get("rating");
  const playerPace = formData.get("pace");
  const playerPassing = formData.get("passing");
  const playerShooting = formData.get("shooting");
  const playerDribbling = formData.get("dribbling");
  const playerDefending = formData.get("defending");
  const playerPhysical = formData.get("physical");
  //------------------------------------------------------------------------
  const gkDiving = formData.get("diving");
  const gkHandling = formData.get("handling");
  const gkKicking = formData.get("kicking");
  const gkReflexes = formData.get("reflexes");
  const gkSpeed = formData.get("speed");
  const gkPositioning = formData.get("positioning");
  //---------------------------------------------------------

  if (playerPhoto) {
    const reader = new FileReader();

    // Conversion de l'image en base64
    reader.onload = function(e) {
        const photoBase64 = e.target.result;

  // console.log(`Name: ${playerName}, position: ${playerPosition}`);
    }};

  const playerData = {
    name: playerName,
    photo: playerPhoto,
    position: playerPosition,
    nationality: playerNationality,
    flag: playerFlag,
    club: playerClub,
    logo: playerLogo,
    rating: playerRating,
    pace: playerPace,
    shooting: playerShooting,
    passing: playerPassing,
    dribbling: playerDribbling,
    defending: playerDefending,
    physical: playerPhysical,
};
dataArray.unshift(playerData);
// console.log(dataArray);
showPlayers();

localStorage.setItem('playerData', JSON.stringify(playerData));
 showAlert("Joueur ajouté avec succès !");
};
//------------------------------------------------------------------------
const addNewPlayerBtn = document.getElementById("add-new-player-btn");
addNewPlayerBtn.addEventListener("click", addPlayer); 

//-----------------------------------------------------------------------
function showAlert(message) {
  document.getElementById('alertMessage').innerText = message;
  document.getElementById('customAlert').style.display = 'flex';
}

function closeAlert() {
  document.getElementById('customAlert').style.display = 'none';
}
