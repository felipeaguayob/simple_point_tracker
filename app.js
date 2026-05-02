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

// --- Lógica para mantener la pantalla encendida ---
let wakeLock = null;

async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock activo: La pantalla no se apagará');
        }
    } catch (err) {
        console.error(`Error: ${err.name}, ${err.message}`);
    }
}

// Intentar activar al cargar
requestWakeLock();

// Re-activar cuando la app vuelve a estar visible
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        requestWakeLock();
    }
});