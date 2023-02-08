import faunadb from "faunadb";

export default async function handler(req: any, res: any) {
  console.log("Save Api\n");
  const { body } = req;

  const scoreToSet: number = body.score;
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
      documentId = "355998936929927254";
      break;
    case 2:
      documentId = "355998936929927254";
      break;
    default:
      break;
  }
  await client.query(
    q.Update(q.Ref(q.Collection("highscores"), documentId), {
      data: { score: scoreToSet },
    })
  );

  res.setHeader("Content-Type", "application/json");
  return res.end(scoreToSet.toString());
}
