function openGame(url) {
    document.getElementById('gameGrid').style.display = 'none';
    document.getElementById('gameWindow').style.display = 'block';
    document.getElementById('gameFrame').src = url;
}

function closeGame() {
    document.getElementById('gameGrid').style.display = 'grid';
    document.getElementById('gameWindow').style.display = 'none';
    document.getElementById('gameFrame').src = '';
}

function panic() {
    window.location.href = "https://google.com";
}

// Search Logic
document.getElementById('gameSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(term) ? "block" : "none";
    });
});
