const players = [];

// Oyuncu ekleme fonksiyonu
function addPlayer() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;

    // Giriş doğrulama
    if (!name || !position) {
        alert("Lütfen oyuncu adını ve mevkiyi doldurun.");
        return;
    }

    // Yeni oyuncu ekleme
    const player = { name, position };
    players.push(player);

    // Listeyi güncelle
    displayPlayers();

    // Form alanlarını temizle
    document.getElementById('name').value = "";
    document.getElementById('position').value = "";
}

// Oyuncu listesini ekranda göster
function displayPlayers() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = "";

    players.forEach((player, index) => {
        const playerItem = document.createElement('div');
        playerItem.className = "list-group-item";
        playerItem.innerHTML = `
            ${index + 1}. ${player.name} (${player.position})
            <button class="btn btn-danger float-end" onclick="removePlayer(${index})">Sil</button>
        `;
        playerList.appendChild(playerItem);
    });
}

// Oyuncu silme fonksiyonu
function removePlayer(index) {
    players.splice(index, 1);
    displayPlayers();
}