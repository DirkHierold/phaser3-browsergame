import StorageKeys from "../consts/StorageKeys";
import GlobalStorage from "./GlobalStorage";
import LocalStorage from "./LocalStorage";

export default class DataHandler {
  static localStorage: LocalStorage = new LocalStorage();
  static globalStorage: GlobalStorage = new GlobalStorage();

  static easyLocalHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable(StorageKeys.EasyStorage);
  static easyGlobalHighscore: number = 0;
  static easyHighscoreName: string = "";

  static normalLocalHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable(StorageKeys.NormalStorage);
  static normalGlobalHighscore: number = 0;
  static normalHighscoreName: string = "";

  static hardLocalHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable(StorageKeys.HardStorage);
  static hardGlobalHighscore: number = 0;
  static hardHighscoreName: string = "";
  static setGlobalEasyHighscorePromise: Promise<Response>;
  static setGlobalNormalHighscorePromise: Promise<Response>;
  static setGlobalHardHighscorePromise: Promise<Response>;

  static async update() {
    await this.setGlobalEasyHighscorePromise;
    const easyGlobalData =
      await DataHandler.globalStorage.getGlobalEasyHighscore();
    console.log("update = ", easyGlobalData);
    DataHandler.easyGlobalHighscore = easyGlobalData.score;
    DataHandler.easyHighscoreName = easyGlobalData.name;

    await this.setGlobalNormalHighscorePromise;
    const normalGlobalData =
      await DataHandler.globalStorage.getGlobalNormalHighscore();
    DataHandler.normalGlobalHighscore = normalGlobalData.score;
    DataHandler.normalHighscoreName = normalGlobalData.name;

    await this.setGlobalHardHighscorePromise;
    const hardGlobalData =
      await DataHandler.globalStorage.getGlobalHardHighscore();
    DataHandler.hardGlobalHighscore = hardGlobalData.score;
    DataHandler.hardHighscoreName = hardGlobalData.name;
  }

  static isNewEasyGlobalScore(newScore: number): boolean {
    return newScore > this.easyGlobalHighscore;
  }
  static isNewNormalGlobalScore(newScore: number): boolean {
    return newScore > this.normalGlobalHighscore;
  }
  static isNewHardGlobalScore(newScore: number): boolean {
    return newScore > this.hardGlobalHighscore;
  }

  static handleNewEasyLocalScore(newScore: number) {
    if (newScore > this.easyLocalHighscore) {
      this.setNewEasyLocalHighscore(newScore);
    }
  }

  static handleNewNormalLocalScore(newScore: number) {
    if (newScore > this.normalLocalHighscore) {
      this.setNewNormalLocalHighscore(newScore);
    }
  }

  static handleNewHardLocalScore(newScore: number) {
    if (newScore > this.hardLocalHighscore) {
      this.setNewHardLocalHighscore(newScore);
    }
  }

  private static setNewEasyLocalHighscore(newLocalHighscore: number) {
    this.easyLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore, StorageKeys.EasyStorage);
  }

  static setNewEasyGlobalHighscore(
    newGlobalHighscore: number,
    nameForHighscore: string
  ) {
    this.easyGlobalHighscore = newGlobalHighscore;
    this.setGlobalEasyHighscorePromise =
      this.globalStorage.setGlobalEasyHighscore(
        newGlobalHighscore,
        nameForHighscore
      );
  }

  private static setNewNormalLocalHighscore(newLocalHighscore: number) {
    this.normalLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(
      newLocalHighscore,
      StorageKeys.NormalStorage
    );
  }

  static setNewNormalGlobalHighscore(
    newGlobalHighscore: number,
    nameForHighscore: string
  ) {
    this.normalGlobalHighscore = newGlobalHighscore;
    this.setGlobalNormalHighscorePromise =
      this.globalStorage.setGlobalNormalHighscore(
        newGlobalHighscore,
        nameForHighscore
      );
  }

  private static setNewHardLocalHighscore(newLocalHighscore: number) {
    this.hardLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore, StorageKeys.HardStorage);
  }

  static setNewHardGlobalHighscore(
    newGlobalHighscore: number,
    nameForHighscore: string
  ) {
    this.hardGlobalHighscore = newGlobalHighscore;
    this.setGlobalHardHighscorePromise =
      this.globalStorage.setGlobalHardHighscore(
        newGlobalHighscore,
        nameForHighscore
      );
  }
}
