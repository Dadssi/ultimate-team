async function loadPlayers() {
  try {
    const response = await fetch('players.json');
    const data = await response.json();
    const playerList = document.getElementById('playerList');
      console.log(data)

    data.players.forEach(player => {
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

      const diving = player.diving;
      const handling = player.handling;
      const kicking = player.kicking;
      const reflexes = player.reflexes;
      const speed = player.speed;
      const positioning = player.positioning;

      card.className = 'fut-player-card';

      if (position === "GK"){
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
      card.draggable = true; // Pour effectuer le drag-and-drop des cartes des joeurs vers le terrain
      console.log(card.draggable = true)
      playerList.appendChild(card);
    });
  } catch (error) {
    console.error('Erreur lors du chargement des joueurs :', error);
  }
}
loadPlayers();
//---------------------------------------------------------------------------------------------
// - à régler : 
// - Ajouter le Rating 
// - Ajouter la deuxieme position 
//---------------------------------------------------------------------------------------------

document.querySelectorAll('.grid1 div').forEach(cell => {
  cell.addEventListener('dragover', e => e.preventDefault());
  cell.addEventListener('drop', e => {
    const player = document.querySelector('.dragging');
    if (cell.children.length === 0) { 
      cell.appendChild(player);
    }
  });
});

document.querySelectorAll('.player-card').forEach(card => {
  card.addEventListener('dragstart', () => card.classList.add('dragging'));
  card.addEventListener('dragend', () => card.classList.remove('dragging'));
});


document.getElementById('formationSelect').addEventListener('change', e => {
  const formation = e.target.value;
  updateGridFormation(formation);
});

function updateGridFormation(formation) {
  const grid = document.querySelector('.grid1');
  grid.innerHTML = '';
  if (formation === '4-4-2') {
    grid.innerHTML =`
      <div class="player-card "><div></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
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
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card GK"></div>
        <div class="player-card CB"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card GK"></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
    `
    // Ajouter les div selon la structure du 4-4-2
  } else if (formation === '4-3-3') {
    grid.innerHTML = `
    <div class="player-card "><div>1</div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card "><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card GK"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card "></div>
        <div class="player-card CB"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
        <div class="player-card "></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"><div class="img-holder"><img src="images/empty-card.png" alt=""></div></div>
        <div class="player-card GK"></div>
        <div class="player-card CB"></div>
        <div class="player-card ST"></div>
    `
  }
}

// -----------------------------------------------------------------------
// l'utilisation de la librairie Select2 pour Ajouter les drapeaux avec les noms des pays dans select option 
// -----------------------------------------------------------------------
const API_URL = "https://cdn.simplelocalize.io/public/v1/countries";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
      const options = data.map(country => {
          const flagUrl = `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`;
          return {
              id: country.code, // Code ISO pour la valeur
              text: country.name, // Nom du pays
              flag: flagUrl // URL du drapeau
          };
      });
      $("#nationality").select2({
          data: options,
          templateResult: formatOption, // Format des options dans la liste
          templateSelection: formatSelection // Format de l'option selectionnee
      });
      // Fonction pour formater les options dans la liste
      function formatOption(country) {
          if (!country.id) return country.text; // Option par défaut
          const flag = `<img src="${country.flag}" class="flag-icon" alt="${country.text}" />`;
          return $(`<span>${flag} ${country.text}</span>`);
      }
      // Fonction pour formater l'option sélectionnée
      function formatSelection(country) {
          if (!country.id) return country.text; // Option par défaut
          const flag = `<img src="${country.flag}" class="flag-icon" alt="${country.text}" />`;
          return $(`<span>${flag} ${country.text}</span>`);
      }
  })
  .catch(error => console.error("Erreur lors du chargement des données :", error));
  //------------------------------------------------------------------------------------------------
  
  const position = document.getElementById("position");
  const playersConfigs = document.getElementById("players-performances");
  const gkConfigs = document.getElementById("gk-performances");

  position.addEventListener("change", () => {
    const selectedPosition = position.value;
    console.log(selectedPosition);

    if(selectedPosition === "GK"){
      playersConfigs.classList.add("hidden");
      gkConfigs.classList.remove("hidden");
    } else {
      playersConfigs.classList.remove("hidden");
      gkConfigs.classList.add("hidden");
    }
  });