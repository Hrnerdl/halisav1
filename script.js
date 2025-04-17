const players = [];
const savedData = [];
let editingPlayerIndex = null;
let selectedDataIndex = null;

// Oyuncu ekleme veya düzenleme fonksiyonu
function addOrUpdatePlayer() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const goalkeeperSkill = parseInt(document.getElementById('goalkeeperSkill').value);
    const defenderSkill = parseInt(document.getElementById('defenderSkill').value);
    const midfielderSkill = parseInt(document.getElementById('midfielderSkill').value);
    const forwardSkill = parseInt(document.getElementById('forwardSkill').value);

    if (!name || !position || isNaN(goalkeeperSkill) || isNaN(defenderSkill) || isNaN(midfielderSkill) || isNaN(forwardSkill)) {
        alert("Tüm alanları doldurunuz.");
        return;
    }

    const player = { name, position, goalkeeperSkill, defenderSkill, midfielderSkill, forwardSkill };

    if (editingPlayerIndex !== null) {
        players[editingPlayerIndex] = player;
        editingPlayerIndex = null;
    } else {
        players.push(player);
    }

    clearForm();
    displayPlayers();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('goalkeeperSkill').value = '';
    document.getElementById('defenderSkill').value = '';
    document.getElementById('midfielderSkill').value = '';
    document.getElementById('forwardSkill').value = '';
}

function displayPlayers() {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = '';
    players.forEach((player, index) => {
        playersDiv.innerHTML += `
            <div class="list-group-item player-card">
                ${index + 1}. ${player.name} (${player.position}) - Kalecilik: ${player.goalkeeperSkill}, Stoper: ${player.defenderSkill}, Orta Saha: ${player.midfielderSkill}, Forvet: ${player.forwardSkill}
                <button class="btn btn-sm btn-warning float-end ms-2" onclick="editPlayer(${index})">Düzenle</button>
                <button class="btn btn-sm btn-danger float-end" onclick="deletePlayer(${index})">Sil</button>
            </div>`;
    });
}

// Diğer fonksiyonlar yukarıdaki HTML dosyasında olduğu gibi devam eder.