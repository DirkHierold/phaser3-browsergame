import StorageItemKeys from "../consts/StorageItemKeys";

export default class LocalStorage {
  storage: Storage = window.localStorage;

  setHighscore(score: number) {
    this.storage.setItem(StorageItemKeys.Highscore, score.toString());
  }

  getHighscoreIfAvailable(): number {
    return this.getItemIfAvailable(StorageItemKeys.Highscore);
  }

  private getItemIfAvailable(item: StorageItemKeys): number {
    const storedItem: string | null = this.storage.getItem(item);
    let itemAsNumber: number = 0;
    if (storedItem) {
      itemAsNumber = parseInt(storedItem);
    }

    return itemAsNumber;
  }
}
