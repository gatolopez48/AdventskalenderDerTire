export function openModal(imageSrc, titleText) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    const title = document.getElementById('modal-title');

    // 1. Bild sofort unsichtbar machen, um den "Blitzer" des alten Bildes zu verhindern
    img.style.opacity = '0';
    
    // Weicher Fade-In Effekt
    img.style.transition = 'opacity 0.4s ease';

    // 2. Event-Listener: Erst wenn das NEUE Bild komplett geladen ist, wird es sichtbar
    img.onload = () => {
        img.style.opacity = '1';
    };

    // 3. Neue Daten zuweisen
    img.src = imageSrc;
    title.textContent = titleText;
    
    // 4. Modal öffnen (das Bild blendet sich dann automatisch ein, sobald es bereit ist)
    modal.classList.remove('hidden');
}

export function initModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Hilfsfunktion zum Schließen
    const closeModal = () => {
        modal.classList.add('hidden');
    };

    closeBtn.addEventListener('click', closeModal);

    // Schließen durch Klick auf den abgedunkelten Hintergrund
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
