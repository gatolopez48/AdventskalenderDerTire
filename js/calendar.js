import { openModal } from './modal.js';

export function initCalendar(config, settings) {
    const grid = document.getElementById('calendar-grid');
    
    const testMode = false; // Testmodus ist nun deaktiviert!
    const today = new Date();

    config.forEach(item => {
        const door = document.createElement('div');
        door.classList.add('door');
        door.textContent = item.day;

        // Eindeutiger Storage-Key mit Jahr und Monat
        const storageKey = `door_${settings.year}_${settings.month}_${item.day}`;
        const isOpened = localStorage.getItem(storageKey) === 'true';
        
        if (isOpened) {
            door.classList.add('opened');
        }

        door.addEventListener('click', () => {
            // JavaScript Date erwartet den Monat 0-basiert (Januar = 0)
            const doorDate = new Date(settings.year, settings.month - 1, item.day);
            
            // Um die Türen erst ab Mitternacht öffnen zu können, setzen wir die Uhrzeit auf 00:00:00
            doorDate.setHours(0, 0, 0, 0);

            const canOpen = testMode || (today >= doorDate);

            if (canOpen) {
                door.classList.add('opened');
                localStorage.setItem(storageKey, 'true');
                openModal(item.image, item.title);
            } else {
                const monthName = doorDate.toLocaleString('de-DE', { month: 'long' });
                alert(`Dieses Türchen lässt sich erst am ${item.day}. ${monthName} öffnen!`);
            }
        });

        grid.appendChild(door);
    });
}
