import * as angular from 'angular';

export default angular.module('app.emojiConst', [])
  .constant('EMOJIS', {
     accept: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f251.png?v7',
     aerial_tramway: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a1.png?v7',
     afghanistan: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v7',
     airplane: 'https://assets-cdn.github.com/images/icons/emoji/unicode/2708.png?v7',
     aland_islands: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fd.png?v7',
     alarm_clock: 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f0.png?v7'
   })
   .name;
