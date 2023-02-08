export default class GlobalStorage {
  getGlobalEasyHighscore(): Promise<number> {
    return this.getGlobalHighscore(0);
  }

  getGlobalNormalHighscore(): Promise<number> {
    return this.getGlobalHighscore(1);
  }

  getGlobalHardHighscore(): Promise<number> {
    return this.getGlobalHighscore(2);
  }

  private async getGlobalHighscore(storageKey: number): Promise<number> {
    console.log("getGlobalHighscore");
    let returnValue = 1;

    const bodyInit = JSON.stringify({ storeKey: storageKey });
    returnValue = await fetch("/api/get", {
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
    this.setGlobalHighscore(newHigh, 0);
  }

  async setGlobalNormalHighscore(newHigh: number): Promise<void> {
    this.setGlobalHighscore(newHigh, 1);
  }

  async setGlobalHardHighscore(newHigh: number): Promise<void> {
    this.setGlobalHighscore(newHigh, 2);
  }

  private async setGlobalHighscore(
    newHigh: number,
    storageKey: number
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
