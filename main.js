
const mangaData = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.mangaupdates.com/v1/releases/days/').then(response => response.json())
    .then(data => console.log(data))

    const body = document.querySelector('body');
    const div = document.createElement('div');
    document.body.appendChild(div);

})

test

console.log(mangaData);