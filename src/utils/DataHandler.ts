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

  static async update() {
    const easyGlobalData =
      await DataHandler.globalStorage.getGlobalEasyHighscore();
    console.log("update = ", easyGlobalData);
    DataHandler.easyGlobalHighscore = easyGlobalData.score;
    DataHandler.easyHighscoreName = easyGlobalData.name;

    const normalGlobalData =
      await DataHandler.globalStorage.getGlobalNormalHighscore();
    DataHandler.normalGlobalHighscore = normalGlobalData.score;
    DataHandler.normalHighscoreName = normalGlobalData.name;

    const hardGlobalData =
      await DataHandler.globalStorage.getGlobalHardHighscore();
    DataHandler.hardGlobalHighscore = hardGlobalData.score;
    DataHandler.hardHighscoreName = hardGlobalData.name;
  }

  static isNewEasyGlobalScore(newScore: number): boolean {
    return newScore > this.easyGlobalHighscore;
  }

  static handleNewEasyLocalScore(newScore: number) {
    if (newScore > this.easyLocalHighscore) {
      this.setNewEasyLocalHighscore(newScore);
    }
  }

  static handleNewNormalScore(newScore: number) {
    if (newScore > this.normalLocalHighscore) {
      this.setNewNormalLocalHighscore(newScore);
    }
    if (newScore > this.normalGlobalHighscore) {
      this.setNewNormalGlobalHighscore(newScore);
    }
  }

  static handleNewHardScore(newScore: number) {
    if (newScore > this.hardLocalHighscore) {
      this.setNewHardLocalHighscore(newScore);
    }
    if (newScore > this.hardGlobalHighscore) {
      this.setNewHardGlobalHighscore(newScore);
    }
  }

  private static setNewEasyLocalHighscore(newLocalHighscore: number) {
    this.easyLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore, StorageKeys.EasyStorage);
  }

  static async setNewEasyGlobalHighscore(
    newGlobalHighscore: number,
    nameForHighscore: string
  ) {
    this.easyGlobalHighscore = newGlobalHighscore;
    await this.globalStorage.setGlobalEasyHighscore(
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

  private static setNewNormalGlobalHighscore(newGlobalHighscore: number) {
    this.normalGlobalHighscore = newGlobalHighscore;
    const nameForHighscore = "Dino"; //InputHandler.getNameForHighscore(scene);
    this.globalStorage.setGlobalNormalHighscore(
      newGlobalHighscore,
      nameForHighscore
    );
  }

  private static setNewHardLocalHighscore(newLocalHighscore: number) {
    this.hardLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore, StorageKeys.HardStorage);
  }

  private static setNewHardGlobalHighscore(newGlobalHighscore: number) {
    this.hardGlobalHighscore = newGlobalHighscore;
    const nameForHighscore = "Dino"; //InputHandler.getNameForHighscore(scene);
    this.globalStorage.setGlobalHardHighscore(
      newGlobalHighscore,
      nameForHighscore
    );
  }
}
