import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 'current-time';

const onPlay = function (e) {
  localStorage.setItem(currentTime, e.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(currentTime);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
