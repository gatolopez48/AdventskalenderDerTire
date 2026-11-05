import { openModal } from './modal.js';

export function initCalendar(config, settings) {
    const grid = document.getElementById('calendar-grid');
    
    const testMode = false;
    
    // Aktuelles Datum holen und die Uhrzeit auf 00:00 setzen,
    // damit wir saubere Tages-Vergleiche machen können (ohne Stunden/Minuten).
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    config.forEach(item => {
        const door = document.createElement('div');
        door.classList.add('door');
        door.textContent = item.day;

        // Eindeutiger Storage-Key mit Jahr und Monat
        const storageKey = `door_${settings.year}_${settings.month}_${item.day}`;
        const isOpened = localStorage.getItem(storageKey) === 'true';
        
        // Zieldatum des Türchens berechnen (Monat ist in JavaScript 0-basiert)
        const doorDate = new Date(settings.year, settings.month - 1, item.day);
        doorDate.setHours(0, 0, 0, 0);

        // Initiale Farbe (CSS Klasse) basierend auf Datum und Status setzen
        if (isOpened) {
            door.classList.add('opened');
        } else if (doorDate > today) {
            door.classList.add('future');
        } else if (doorDate < today) {
            door.classList.add('past');
        } else {
            // doorDate stimmt exakt mit today überein
            door.classList.add('today');
        }

        door.addEventListener('click', () => {
            const canOpen = testMode || (today >= doorDate);

            if (canOpen) {
                // Wenn wir es öffnen, entfernen wir die vorherigen Farben
                door.classList.remove('past', 'today');
                // und setzen es auf grau (geöffnet)
                door.classList.add('opened');
                
                // Status speichern
                localStorage.setItem(storageKey, 'true');
                
                // Bild anzeigen
                openModal(item.image, item.title);
            } else {
                const monthName = doorDate.toLocaleString('de-DE', { month: 'long' });
                alert(`Dieses Türchen lässt sich erst am ${item.day}. ${monthName} öffnen!`);
            }
        });

        grid.appendChild(door);
    });
}
