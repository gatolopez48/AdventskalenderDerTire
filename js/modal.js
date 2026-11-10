export function openModal(imageSrc, titleText) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    const title = document.getElementById('modal-title');

    // 1. Animationen temporär komplett deaktivieren
    img.style.transition = 'none';
    title.style.transition = 'none';
    
    // 2. Bild UND Titel sofort hart unsichtbar machen
    img.style.opacity = '0';
    title.style.opacity = '0';
    
    // 3. Reflow erzwingen (zwingt den Browser zur sofortigen Umsetzung)
    void img.offsetWidth; 
    void title.offsetWidth;

    // 4. Animationen für das spätere Einblenden wieder aktivieren
    img.style.transition = 'opacity 0.4s ease';
    title.style.transition = 'opacity 0.4s ease';

    // 5. Erst wenn das neue Bild geladen ist, werden Bild UND Titel sanft eingeblendet
    img.onload = () => {
        img.style.opacity = '1';
        title.style.opacity = '1';
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
    const title = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close-btn');

    // Hilfsfunktion zum Schließen
    const closeModal = () => {
        modal.classList.add('hidden');
        
        // Löscht das alte Bild und den Titel physisch, sobald das Modal zu ist
        setTimeout(() => {
            img.src = '';
            title.textContent = '';
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);

    // Schließen durch Klick auf den abgedunkelten Hintergrund
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
