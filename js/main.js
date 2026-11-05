import { calendarConfig, calendarSettings } from './config.js';
import { initCalendar } from './calendar.js';
import { initModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initCalendar(calendarConfig, calendarSettings);
});
