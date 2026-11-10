import { openModal } from './modal.js';

export function initCalendar(config, settings) {
    const grid = document.getElementById('calendar-grid');
    
    const testMode = false;
    
    // Aktuelles Datum holen und die Uhrzeit auf 00:00 setzen,
    // damit wir saubere Tages-Vergleiche machen können.
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    config.forEach(item => {
        const door = document.createElement('div');
        door.classList.add('door');
        door.textContent = item.day;

        // Eindeutiger Storage-Key mit Jahr und Monat
        const storageKey = `door_${settings.year}_${settings.month}_${item.day}`;
        const isOpened = localStorage.getItem(storageKey) === 'true';
        
        // Zieldatum des Türchens berechnen (Monat ist 0-basiert)
        const doorDate = new Date(settings.year, settings.month - 1, item.day);
        doorDate.setHours(0, 0, 0, 0);

        // Initiale Farbe basierend auf Datum und Status setzen
        if (isOpened) {
            door.classList.add('opened');
        } else if (doorDate > today) {
            door.classList.add('future');
        } else if (doorDate < today) {
            door.classList.add('past');
        } else {
            door.classList.add('today');
        }

        door.addEventListener('click', () => {
            const canOpen = testMode || (today >= doorDate);

            // Es passiert nur noch etwas, wenn das Türchen geöffnet werden darf
            if (canOpen) {
                door.classList.remove('past', 'today');
                door.classList.add('opened');
                
                localStorage.setItem(storageKey, 'true');
                openModal(item.image, item.title);
            }
        });

        grid.appendChild(door);
    });
}
