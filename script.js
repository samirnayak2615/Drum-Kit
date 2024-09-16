const drumSounds = [
    'Guitar.mp3',
    'Tabla.mp3',
    'Piano.mp3',
    'Drum.mp3'
];

function playSound(soundFile) {
    console.log("Playing sound: " + soundFile);

    const audio = new Audio(soundFile);
    audio.play().catch(error => {
        console.error("Error playing sound: ", error);
    });
}

document.getElementById('drum1').addEventListener('click', () => playSound(drumSounds[0]));
document.getElementById('drum2').addEventListener('click', () => playSound(drumSounds[1]));
document.getElementById('drum3').addEventListener('click', () => playSound(drumSounds[2]));
document.getElementById('drum4').addEventListener('click', () => playSound(drumSounds[3]));

document.addEventListener('keydown', function(event) {
    switch(event.key.toLowerCase()) {
        case 'g':
            playSound(drumSounds[0]); // Guitar
            break;
        case 't':
            playSound(drumSounds[1]); // Tabla
            break;
        case 'v':
            playSound(drumSounds[2]); // Violin
            break;
        case 'd':
            playSound(drumSounds[3]); // Drum
            break;
    }
});