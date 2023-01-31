import StorageKeys from "../consts/StorageKeys";

export default class LocalStorage {
  storage: Storage;
  constructor(storage: Storage) {
    this.storage = storage;
  }

  setHighscoreIfNew(score: number, highscore: number) {
    if (score > highscore) {
      highscore = score;
      this.storage.setItem(StorageKeys.Highscore, highscore.toString());
    }
    return highscore;
  }

  setAlltime(alltime: number) {
    this.storage.setItem(StorageKeys.Alltime, alltime.toString());
  }

  getHighscoreIfAvailable(): number {
    return this.getItemIfAvailable(StorageKeys.Highscore);
  }

  getAlltimeIfAvailable(): number {
    return this.getItemIfAvailable(StorageKeys.Alltime);
  }

  private getItemIfAvailable(item: StorageKeys): number {
    const storedItem: string | null = this.storage.getItem(item);
    let itemAsNumber: number = 0;
    if (storedItem) {
      itemAsNumber = parseInt(storedItem);
    }
    return itemAsNumber;
  }
}
