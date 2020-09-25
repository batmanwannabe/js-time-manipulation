// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const time = new Date(null).getTime()
const diff = Math.abs(time - Date.now()) / 36e5;
appDiv.innerHTML = `<h1>${time}</h1>`;
appDiv.innerHTML = `<h2>${diff}</h2>`;