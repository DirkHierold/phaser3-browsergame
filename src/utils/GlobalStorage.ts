export default class GlobalStorage {
  getGlobalEasyHighscore(): Promise<string[]> {
    return this.getGlobalHighscore(0);
  }

  getGlobalNormalHighscore(): Promise<string[]> {
    return this.getGlobalHighscore(1);
  }

  getGlobalHardHighscore(): Promise<string[]> {
    return this.getGlobalHighscore(2);
  }

  private async getGlobalHighscore(storageKey: number): Promise<string[]> {
    console.log("getGlobalHighscore");
    let returnValue = ["1", "Dino"];

    const bodyInit = JSON.stringify({ storeKey: storageKey });
    await fetch("/api/get", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: bodyInit,
    })
      .then((response) => response.json() as Promise<string[]>)
      .then((data) => {
        returnValue = data;
      });
    console.log(returnValue);
    // returnValue = await fetch("/api/get").then(
    //   (response) => response.json() as Promise<number>
    // );
    return returnValue;
  }

  async setGlobalEasyHighscore(
    newHigh: number,
    nameForHighscore: string
  ): Promise<void> {
    this.setGlobalHighscore(newHigh, 0, nameForHighscore);
  }

  async setGlobalNormalHighscore(
    newHigh: number,
    nameForHighscore: string
  ): Promise<void> {
    this.setGlobalHighscore(newHigh, 1, nameForHighscore);
  }

  async setGlobalHardHighscore(
    newHigh: number,
    nameForHighscore: string
  ): Promise<void> {
    this.setGlobalHighscore(newHigh, 2, nameForHighscore);
  }

  private async setGlobalHighscore(
    newHigh: number,
    storageKey: number,
    nameForHighscore: string
  ): Promise<void> {
    console.log("setGlobalHighscore");
    const bodyInit = JSON.stringify({
      score: newHigh,
      storeKey: storageKey,
      name: nameForHighscore,
    });
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
