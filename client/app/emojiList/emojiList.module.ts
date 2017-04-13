import * as angular from 'angular';
import emojiConst from './emojiList.const';
import config from './emojiList.config';

export default angular.module('app.emojiList', [emojiConst])
  .config(config)
  .name;
