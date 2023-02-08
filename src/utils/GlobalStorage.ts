import StorageKeys from "../consts/StorageKeys";

export default class GlobalStorage {
  getGlobalEasyHighscore(): Promise<number> {
    return this.getGlobalHighscore(StorageKeys.EasyStorage);
  }

  getGlobalNormalHighscore(): Promise<number> {
    return this.getGlobalHighscore(StorageKeys.NormalStorage);
  }

  getGlobalHardHighscore(): Promise<number> {
    return this.getGlobalHighscore(StorageKeys.HardStorage);
  }

  private async getGlobalHighscore(storageKey: StorageKeys): Promise<number> {
    console.log("getGlobalHighscore");
    let returnValue = 1;

    const bodyInit = JSON.stringify({ storeKey: storageKey });
    returnValue = await fetch("/api/save", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: bodyInit,
    }).then((response) => response.json() as Promise<number>);

    // returnValue = await fetch("/api/get").then(
    //   (response) => response.json() as Promise<number>
    // );
    return returnValue;
  }

  async setGlobalEasyHighscore(newHigh: number): Promise<void> {
    this.setGlobalHighscore(newHigh, StorageKeys.EasyStorage);
  }

  async setGlobalNormalHighscore(newHigh: number): Promise<void> {
    this.setGlobalHighscore(newHigh, StorageKeys.NormalStorage);
  }

  async setGlobalHardHighscore(newHigh: number): Promise<void> {
    this.setGlobalHighscore(newHigh, StorageKeys.HardStorage);
  }

  private async setGlobalHighscore(
    newHigh: number,
    storageKey: StorageKeys
  ): Promise<void> {
    console.log("setGlobalHighscore");
    const bodyInit = JSON.stringify({ score: newHigh, storeKey: storageKey });
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
