import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import common from './common.json';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.ready().then(onPlay);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onPlay() {
  const time = JSON.parse(localStorage.getItem(common.LS_CURRENTTIME) ?? "0");
  player.setCurrentTime(time);
}
 
function onTimeUpdate() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(common.LS_CURRENTTIME, JSON.stringify(seconds));
  })
}