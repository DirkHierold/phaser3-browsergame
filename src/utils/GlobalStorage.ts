export default class GlobalStorage {
  getGlobalEasyHighscore(): Promise<any> {
    return this.getGlobalHighscore(0);
  }

  getGlobalNormalHighscore(): Promise<any> {
    return this.getGlobalHighscore(1);
  }

  getGlobalHardHighscore(): Promise<any> {
    return this.getGlobalHighscore(2);
  }

  private async getGlobalHighscore(storageKey: number): Promise<any> {
    console.log("getGlobalHighscore");
    let returnValue = ["1", "Dino"];

    const bodyInit = JSON.stringify({ storeKey: storageKey });
    const resp = await fetch("/api/get", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: bodyInit,
    });
    returnValue = await resp.json();
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     returnValue = data;
    //     console.log("getGlobalHighscore then = ", returnValue);
    //   });
    // console.log("getGlobalHighscore = ", returnValue);
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
