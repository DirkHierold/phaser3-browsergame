import { readFileSync } from "fs";

export default function handler(req, res) {
  console.log("Save Api");
  const stringified = readFileSync("/data/highscores.json", "utf8");

  res.setHeader("Content-Type", "application/json");
  console.log(stringified);
  return res.end(stringified);
}
