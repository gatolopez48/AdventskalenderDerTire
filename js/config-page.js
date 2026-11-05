document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('config-form');
    const output = document.getElementById('output');

    // 24 Zeilen generieren
    for (let i = 1; i <= 24; i++) {
        const row = document.createElement('div');
        row.classList.add('config-row');
        row.innerHTML = `
            <label style="width:50px; line-height:28px;">Tag ${i}:</label>
            <input type="text" id="img-${i}" placeholder="img/bild${i}.jpg" value="img/bild${i}.jpg">
            <input type="text" id="title-${i}" placeholder="Titel für Tag ${i}" value="Titel ${i}">
        `;
        form.appendChild(row);
    }

    document.getElementById('generate-btn').addEventListener('click', () => {
        const configArray = [];
        for (let i = 1; i <= 24; i++) {
            configArray.push({
                day: i,
                image: document.getElementById(`img-${i}`).value,
                title: document.getElementById(`title-${i}`).value
            });
        }
        output.value = `export const calendarConfig = ${JSON.stringify(configArray, null, 4)};`;
        output.select();
    });
});
