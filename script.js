// 1. Создайте список ваших треков. Имена должны совпадать с файлами в папке /music/
const playlist = [
    { title: "BUTCHER VANITY (RUS)", file: "music/Zephyr - BUTCHER VANITY (на русском).mp3" },
    {title: "BUTCHER VANITY", file: "music/Vane Lily - Butcher Vanity.mp3" },
    { title: "Compass (RUS)", file: "music/riguruma - Compass.mp3" },
    { title: "Gone Angels (RUS)", file: "music/Gone Angels.mp3" },
    { title: "Светает", file: "music/Субтитры - Светает.mp3" },
    // Добавьте все ваши треки здесь
];

let currentTrackIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const trackTitle = document.getElementById('track-title');
const playlistEl = document.getElementById('playlist');

// Функция для загрузки и отображения текущего трека
function loadTrack(index) {
    const track = playlist[index];
    audioPlayer.src = track.file;
    trackTitle.textContent = `🐾 Сейчас играет: ${track.title}`;
    audioPlayer.load(); // Загружаем трек
    // Обновляем выделение в плейлисте (если есть)
}

// Управление воспроизведением
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️'; // Символ паузы
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️'; // Символ воспроизведения
    }
});

// Кнопка Далее
document.getElementById('next-btn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
});

// Кнопка Назад
document.getElementById('prev-btn').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
});

// Инициализация
loadTrack(currentTrackIndex); 

// Заполняем список на странице
playlist.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${track.title}`;
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    });
    playlistEl.appendChild(li);
});

