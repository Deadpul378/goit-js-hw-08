import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const CURRENT_TIME = 'current-time';

const onPlay = function (e) {
  localStorage.setItem(CURRENT_TIME, e.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
