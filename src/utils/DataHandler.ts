import StorageKeys from "../consts/StorageKeys";
import GlobalStorage from "./GlobalStorage";
import LocalStorage from "./LocalStorage";

export default class DataHandler {
  localStorage: LocalStorage = new LocalStorage();
  globalStorage: GlobalStorage = new GlobalStorage();

  easyLocalHighscore: number = 0;
  easyGlobalHighscore: number = 0;

  normalLocalHighscore: number = 0;
  normalGlobalHighscore: number = 0;

  hardLocalHighscore: number = 0;
  hardGlobalHighscore: number = 0;

  constructor() {
    this.init();
  }

  async init() {
    this.easyLocalHighscore = this.localStorage.getHighscoreIfAvailable(
      StorageKeys.EasyStorage
    );
    this.easyGlobalHighscore =
      await this.globalStorage.getGlobalEasyHighscore();

    this.normalLocalHighscore = this.localStorage.getHighscoreIfAvailable(
      StorageKeys.NormalStorage
    );
    this.normalGlobalHighscore =
      await this.globalStorage.getGlobalNormalHighscore();

    this.hardLocalHighscore = this.localStorage.getHighscoreIfAvailable(
      StorageKeys.HardStorage
    );
    this.hardGlobalHighscore =
      await this.globalStorage.getGlobalHardHighscore();
  }

  handleNewEasyScore(newScore: number) {
    if (newScore > this.easyLocalHighscore) {
      this.setNewEasyLocalHighscore(newScore);
    }
    if (newScore > this.easyGlobalHighscore) {
      this.setNewEasyGlobalHighscore(newScore);
    }
  }

  handleNewNormalScore(newScore: number) {
    if (newScore > this.normalLocalHighscore) {
      this.setNewNormalLocalHighscore(newScore);
    }
    if (newScore > this.normalGlobalHighscore) {
      this.setNewNormalGlobalHighscore(newScore);
    }
  }

  handleNewHardScore(newScore: number) {
    if (newScore > this.hardLocalHighscore) {
      this.setNewHardLocalHighscore(newScore);
    }
    if (newScore > this.hardGlobalHighscore) {
      this.setNewHardGlobalHighscore(newScore);
    }
  }

  private setNewEasyLocalHighscore(newLocalHighscore: number) {
    this.easyLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore, StorageKeys.EasyStorage);
  }

  private setNewEasyGlobalHighscore(newGlobalHighscore: number) {
    this.easyGlobalHighscore = newGlobalHighscore;
    this.globalStorage.setGlobalEasyHighscore(newGlobalHighscore);
  }

  private setNewNormalLocalHighscore(newLocalHighscore: number) {
    this.normalLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(
      newLocalHighscore,
      StorageKeys.NormalStorage
    );
  }

  private setNewNormalGlobalHighscore(newGlobalHighscore: number) {
    this.normalGlobalHighscore = newGlobalHighscore;
    this.globalStorage.setGlobalNormalHighscore(newGlobalHighscore);
  }

  private setNewHardLocalHighscore(newLocalHighscore: number) {
    this.hardLocalHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore, StorageKeys.HardStorage);
  }

  private setNewHardGlobalHighscore(newGlobalHighscore: number) {
    this.hardGlobalHighscore = newGlobalHighscore;
    this.globalStorage.setGlobalHardHighscore(newGlobalHighscore);
  }
}
