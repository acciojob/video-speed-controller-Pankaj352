const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('input[name="volume"]');
const speedSlider = document.querySelector('input[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Function to toggle play/pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Play symbol
    }
}

// Function to update volume
function updateVolume() {
    video.volume = this.value;
}

// Function to update playback speed
function updateSpeed() {
    video.playbackRate = this.value;
}

// Function to skip forward or backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Function to update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Function to seek video position
function setProgress(e) {
    const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

// Event Listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
speedSlider.addEventListener('input', updateSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
