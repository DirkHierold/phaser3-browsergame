import LocalStorage from "./LocalStorage";

export default class DataHandler {
  static localStorage: LocalStorage = new LocalStorage();

  static localHighscore: number =
    DataHandler.localStorage.getHighscoreIfAvailable();

  static handleNewLocalScore(newScore: number) {
    if (newScore > this.localHighscore) {
      this.setNewLocalHighscore(newScore);
    }
  }

  private static setNewLocalHighscore(newLocalHighscore: number) {
    this.localHighscore = newLocalHighscore;
    this.localStorage.setHighscore(newLocalHighscore);
  }
}
