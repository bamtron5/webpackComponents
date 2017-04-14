export default class EmojiList {
  public emojis;
  constructor (
    $stateParams,
    EMOJIS,
    private $uibModal
  ) {
    this.emojis = EMOJIS;
  }

  public openModal(emojiObj: string) {
    this.$uibModal.open({
      component: 'emojiModal',
      resolve: {
        emoji: () => emojiObj
      }
    });
  }
}

EmojiList.$inject = ['$stateParams', 'EMOJIS', '$uibModal'];
