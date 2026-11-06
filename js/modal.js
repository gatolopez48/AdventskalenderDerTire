export function openModal(imageSrc, titleText) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    const title = document.getElementById('modal-title');

    // 1. Animation temporär komplett deaktivieren
    img.style.transition = 'none';
    
    // 2. Das (alte) Bild sofort und hart unsichtbar machen
    img.style.opacity = '0';
    
    // 3. Reflow erzwingen: Zwingt den Browser, das Unsichtbar-Machen SOFORT 
    // anzuwenden, bevor der nächste Code-Block ausgeführt wird.
    void img.offsetWidth; 

    // 4. Animation für das spätere Einblenden wieder aktivieren
    img.style.transition = 'opacity 0.4s ease';

    // 5. Erst wenn das neue Bild geladen ist, wird es sanft eingeblendet
    img.onload = () => {
        img.style.opacity = '1';
    };

    // 6. Neue Daten zuweisen
    img.src = imageSrc;
    title.textContent = titleText;
    
    // 7. Modal öffnen
    modal.classList.remove('hidden');
}

export function initModal() {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-btn');

    // Hilfsfunktion zum Schließen
    const closeModal = () => {
        modal.classList.add('hidden');
        
        // Löscht das alte Bild physisch, sobald das Modal zu ist (nach der 0.3s CSS Animation)
        setTimeout(() => {
            img.src = '';
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);

    // Schließen durch Klick auf den abgedunkelten Hintergrund
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
