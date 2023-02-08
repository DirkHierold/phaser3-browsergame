import faunadb from "faunadb";
import StorageKeys from "../src/consts/StorageKeys";
export default async function handler(req, res) {
  console.log("Get Api\n");
  let returnValue = "0";

  const { body } = req;
  const storageKeyToSave: StorageKeys = body.storeKey;

  const q = faunadb.query;

  const client = new faunadb.Client({
    secret: "fnAE8MKXOoAAVzI4RyIljdQ2UXjDEwzXgc_Npllh",
    // NOTE: Use the correct endpoint for your database's Region Group.
    scheme: "https",
    domain: "db.us.fauna.com",
    endpoint: "https://db.us.fauna.com/",
  });
  let documentId = "";
  switch (storageKeyToSave) {
    case StorageKeys.EasyStorage:
      documentId = "355998936929927254";
      break;
    case StorageKeys.NormalStorage:
      documentId = "355998936929927254";
      break;
    case StorageKeys.HardStorage:
      documentId = "355998936929927254";
      break;
    default:
      break;
  }

  const result: any = await client.query(
    q.Select("data", q.Get(q.Ref(q.Collection("highscores"), documentId)))
  );

  returnValue = result.score.toString();

  res.setHeader("Content-Type", "application/json");
  return res.end(returnValue);
}
