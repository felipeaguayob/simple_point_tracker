let score1 = 50;
let score2 = 50;

function changeLife(player, amount) {
    if (player === 1) {
        score1 += amount;
        document.getElementById('life-1').innerText = score1;
    } else {
        score2 += amount;
        document.getElementById('life-2').innerText = score2;
    }
}