document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('config-form');
    const output = document.getElementById('output');

    // Felder für Jahr und Monat
    const settingsHtml = `
        <div style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #ccc;">
            <label>Jahr: <input type="number" id="config-year" value="2026"></label>
            <label style="margin-left: 15px;">Monat (1-12): <input type="number" id="config-month" value="12" min="1" max="12"></label>
        </div>
    `;
    form.insertAdjacentHTML('beforeend', settingsHtml);

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
        const year = parseInt(document.getElementById('config-year').value, 10);
        const month = parseInt(document.getElementById('config-month').value, 10);

        const configArray = [];
        for (let i = 1; i <= 24; i++) {
            configArray.push({
                day: i,
                image: document.getElementById(`img-${i}`).value,
                title: document.getElementById(`title-${i}`).value
            });
        }
        
        output.value = `export const calendarSettings = {\n    year: ${year},\n    month: ${month}\n};\n\n`;
        output.value += `export const calendarConfig = ${JSON.stringify(configArray, null, 4)};`;
        output.select();
    });
});
