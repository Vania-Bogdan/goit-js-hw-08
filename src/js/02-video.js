import throttle from 'lodash.throttle';
import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
console.log(savedTime);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};
player.setCurrentTime(savedTime);