import faunadb from "faunadb";

export default async function handler(req: any, res: any) {
  console.log("Get Api\n");
  let returnValue = "0";

  const { body } = req;
  const storageKeyToSave: number = body.storeKey;

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
    case 0:
      documentId = "355998936929927254";
      break;
    case 1:
      documentId = "356127674838548566";
      break;
    case 2:
      documentId = "356127717388714070";
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
