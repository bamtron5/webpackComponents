export default class EmojiList {
  public emojis;
  constructor (
    $stateParams,
    EMOJIS
  ) {
    this.emojis = EMOJIS;
  }
}

EmojiList.$inject = ['$stateParams', 'EMOJIS'];
