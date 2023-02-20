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
    let returnValue = [1, "Dino"];

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
    console.log("getGlobalHighscore = ", returnValue);
    return returnValue;
  }

  setGlobalEasyHighscore(
    newHigh: number,
    nameForHighscore: string
  ): Promise<Response> {
    return this.setGlobalHighscore(newHigh, 0, nameForHighscore);
  }

  setGlobalNormalHighscore(
    newHigh: number,
    nameForHighscore: string
  ): Promise<Response> {
    return this.setGlobalHighscore(newHigh, 1, nameForHighscore);
  }

  setGlobalHardHighscore(
    newHigh: number,
    nameForHighscore: string
  ): Promise<Response> {
    return this.setGlobalHighscore(newHigh, 2, nameForHighscore);
  }

  private setGlobalHighscore(
    newHigh: number,
    storageKey: number,
    nameForHighscore: string
  ): Promise<Response> {
    console.log("setGlobalHighscore");
    const bodyInit = JSON.stringify({
      score: newHigh,
      storeKey: storageKey,
      name: nameForHighscore,
    });
    return fetch("/api/save", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: bodyInit,
    });
  }
}
