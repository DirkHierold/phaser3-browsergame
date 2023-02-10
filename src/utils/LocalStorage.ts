import StorageItemKeys from "../consts/StorageItemKeys";
import StorageKeys from "../consts/StorageKeys";

export default class LocalStorage {
  storage: Storage = window.localStorage;

  setHighscore(score: number, storageKey: StorageKeys) {
    this.storage.setItem(
      storageKey + StorageItemKeys.Highscore,
      score.toString()
    );
  }

  setAlltime(alltime: number, storageKey: StorageKeys) {
    this.storage.setItem(
      storageKey + StorageItemKeys.Alltime,
      alltime.toString()
    );
  }

  getHighscoreIfAvailable(storageKey: StorageKeys): number {
    return this.getItemIfAvailable(StorageItemKeys.Highscore, storageKey);
  }

  getAlltimeIfAvailable(storageKey: StorageKeys): number {
    return this.getItemIfAvailable(StorageItemKeys.Alltime, storageKey);
  }

  private getItemIfAvailable(
    item: StorageItemKeys,
    storageKey: StorageKeys
  ): number {
    const storedItem: string | null = this.storage.getItem(storageKey + item);
    let itemAsNumber: number = 0;
    if (storedItem) {
      itemAsNumber = parseInt(storedItem);
    }

    return itemAsNumber;
  }
}
