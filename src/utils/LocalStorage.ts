import StorageItemKeys from "../consts/StorageItemKeys";
import StorageKeys from "../consts/StorageKeys";
// import fs from "fs";

export default class LocalStorage {
  storage: Storage;
  storageKey: StorageKeys;
  constructor(storage: Storage, storageKey: StorageKeys) {
    this.storage = storage;
    this.storageKey = storageKey;
  }

  setHighscoreIfNew(score: number, highscore: number) {
    if (score > highscore) {
      highscore = score;
      this.storage.setItem(
        this.storageKey + StorageItemKeys.Highscore,
        highscore.toString()
      );

      // fs.writeFileSync("/public/highscoreList.txt", "New Highscore!");
    }
    // fs.writeFileSync("/public/highscoreList.txt", "New Highscore?");
    return highscore;
  }

  setAlltime(alltime: number) {
    this.storage.setItem(
      this.storageKey + StorageItemKeys.Alltime,
      alltime.toString()
    );
  }

  getHighscoreIfAvailable(): number {
    return this.getItemIfAvailable(StorageItemKeys.Highscore);
  }

  getAlltimeIfAvailable(): number {
    return this.getItemIfAvailable(StorageItemKeys.Alltime);
  }

  private getItemIfAvailable(item: StorageItemKeys): number {
    const storedItem: string | null = this.storage.getItem(
      this.storageKey + item
    );
    let itemAsNumber: number = 0;
    if (storedItem) {
      itemAsNumber = parseInt(storedItem);
    }

    return itemAsNumber;
  }

  getGlobalHighscore(): number {
    let returnValue = 333;
    fetch("/api/save")
      .then((response) => response.json() as Promise<number>)
      .then((json /*: Todo[]*/) => {
        console.log(json);
        const returnAsString = JSON.stringify(json);
        console.log(returnAsString);
        returnValue = parseInt(returnAsString);
        console.log(returnValue);
        return returnValue;
      });
    return returnValue;
  }
}
