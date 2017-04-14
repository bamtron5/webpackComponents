import * as angular from 'angular';

// NPM Angular Dependencies
import 'angular-ui-router';
import 'angular-ui-bootstrap';

// High Level Pages
import emojiList from './emojiList/emojiList.module';

// Low Level Components
import emojiModal from './emojiModal/emojiModal.module';

// Config
import {Config} from './app.config';

const dependencies = [
  'ui.router',
  'ui.bootstrap',
  emojiList,
  emojiModal
];

angular.module('app', dependencies)
  .config(Config);

angular.bootstrap(document.body, ['app'], { strictDi: true });
