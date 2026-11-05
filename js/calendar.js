import { openModal } from './modal.js';

export function initCalendar(config) {
    const grid = document.getElementById('calendar-grid');
    
    // WICHTIG: Setze testMode = false für den echten Einsatz!
    const testMode = true; 
    const targetYear = 2026; // Das Jahr des Kalenders
    const today = new Date();

    config.forEach(item => {
        const door = document.createElement('div');
        door.classList.add('door');
        door.textContent = item.day;

        // Zustand aus localStorage lesen
        const storageKey = `door_${targetYear}_${item.day}`;
        const isOpened = localStorage.getItem(storageKey) === 'true';
        
        if (isOpened) {
            door.classList.add('opened');
        }

        door.addEventListener('click', () => {
            const doorDate = new Date(targetYear, 11, item.day); // 11 = Dezember (0-basiert)
            const canOpen = testMode || (today >= doorDate);

            if (canOpen) {
                // Optisch als geöffnet markieren und speichern
                door.classList.add('opened');
                localStorage.setItem(storageKey, 'true');
                
                // Bild im Vollbild öffnen (auch wenn es schon offen war)
                openModal(item.image, item.title);
            } else {
                alert(`Dieses Türchen lässt sich erst am ${item.day}. Dezember öffnen!`);
            }
        });

        grid.appendChild(door);
    });
}
