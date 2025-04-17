const players = [];

// Oyuncu ekleme fonksiyonu
function addPlayer() {
    const name = document.getElementById('name').value.trim();
    const position = document.getElementById('position').value;

    if (!name || !position) {
        alert("Lütfen tüm alanları doldurunuz.");
        return;
    }

    // Oyuncuyu listeye ekle
    players.push({ name, position });
    displayPlayers();

    // Formu temizle
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
}

// Oyuncuları listeleme fonksiyonu
function displayPlayers() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';

    players.forEach((player, index) => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            ${index + 1}. ${player.name} (${player.position})
            <button onclick="removePlayer(${index})">Sil</button>
        `;
        playerList.appendChild(playerItem);
    });
}

// Oyuncu silme fonksiyonu
function removePlayer(index) {
    players.splice(index, 1);
    displayPlayers();
}

// Takımları oluşturma fonksiyonu
function createTeams() {
    if (players.length < 2) {
        alert("Takımları oluşturmak için en az 2 oyuncu gereklidir.");
        return;
    }

    const team1 = [];
    const team2 = [];

    players.forEach((player, index) => {
        if (index % 2 === 0) {
            team1.push(player);
        } else {
            team2.push(player);
        }
    });

    displayTeams(team1, team2);
}

// Takımları ekranda gösterme fonksiyonu
function displayTeams(team1, team2) {
    const teamsDiv = document.getElementById('teams');
    teamsDiv.innerHTML = `
        <div class="team">
            <h3>Takım 1</h3>
            ${team1.map(player => `<p>${player.name} (${player.position})</p>`).join('')}
        </div>
        <div class="team">
            <h3>Takım 2</h3>
            ${team2.map(player => `<p>${player.name} (${player.position})</p>`).join('')}
        </div>
    `;
}