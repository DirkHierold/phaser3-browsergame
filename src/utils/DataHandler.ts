import StorageKeys from "../consts/StorageKeys";
import GlobalStorage from "./GlobalStorage";
import LocalStorage from "./LocalStorage";

export default class DataHandler {
  static localStorage: LocalStorage = new LocalStorage();
  static globalStorage: GlobalStorage = new GlobalStorage();

  static easyLocalHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable(StorageKeys.EasyStorage);
  static easyGlobalHighscore: number = 0;

  static normalLocalHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable(StorageKeys.NormalStorage);
  static normalGlobalHighscore: number = 0;

  static hardLocalHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable(StorageKeys.HardStorage);
  static hardGlobalHighscore: number = 0;

  static async update() {
    DataHandler.easyGlobalHighscore =
      await DataHandler.globalStorage.getGlobalEasyHighscore();

    DataHandler.normalGlobalHighscore =
      await DataHandler.globalStorage.getGlobalNormalHighscore();

    DataHandler.hardGlobalHighscore =
      await DataHandler.globalStorage.getGlobalHardHighscore();
  }

  static handleNewEasyScore(newScore: number) {
    if (newScore > this.easyLocalHighscore) {
      this.setNewEasyLocalHighscore(newScore);
    }
    if (newScore > this.easyGlobalHighscore) {
      this.setNewEasyGlobalHighscore(newScore);
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

  private static setNewEasyGlobalHighscore(newGlobalHighscore: number) {
    this.easyGlobalHighscore = newGlobalHighscore;
    const nameForHighscore = "Dino"; //InputHandler.getNameForHighscore(scene);
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
