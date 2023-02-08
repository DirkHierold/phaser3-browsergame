import StorageItemKeys from "../consts/StorageItemKeys";
import StorageKeys from "../consts/StorageKeys";
// import fs from "fs";

export default class LocalStorage {
  storage: Storage;
  storageKey: StorageKeys;
  highscore: number;

  constructor(storage: Storage, storageKey: StorageKeys) {
    this.storage = storage;
    this.storageKey = storageKey;
    this.highscore = this.getHighscoreIfAvailable();
  }

  setHighscoreIfNew(score: number) {
    if (score > this.highscore) {
      this.highscore = score;
      this.storage.setItem(
        this.storageKey + StorageItemKeys.Highscore,
        this.highscore.toString()
      );
    }
    return this.highscore;
  }

  setAlltime(alltime: number) {
    this.storage.setItem(
      this.storageKey + StorageItemKeys.Alltime,
      alltime.toString()
    );
  }

  private getHighscoreIfAvailable(): number {
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

  async getGlobalHighscore(): Promise<number> {
    let returnValue = 1;
    returnValue = await fetch("/api/get").then(
      (response) => response.json() as Promise<number>
    );
    return returnValue;
  }

  async setGlobalHighscore(newHigh: number): Promise<void> {
    console.log("setGlobalHighscore");
    const bodyInit = JSON.stringify({ score: newHigh });
    console.log("bodyInit ", bodyInit);
    await fetch("/api/save", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: bodyInit,
    });
  }
}
