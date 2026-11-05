export function openModal(imageSrc, titleText) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    const title = document.getElementById('modal-title');

    img.src = imageSrc;
    title.textContent = titleText;
    modal.classList.remove('hidden');
}

export function initModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
}
