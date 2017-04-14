export default class EmojiModal {
  public emoji;
  public resolve;
  public modalInstance;
  public close;
  constructor (
  ) {
  }

  public $onInit() {
    this.emoji = this.resolve.emoji;
  }

  public closeModal () {
    this.close({$value: 'because'});
  }
}

EmojiModal.$inject = [];
