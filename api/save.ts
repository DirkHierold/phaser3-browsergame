import faunadb from "faunadb";

export default function handler(req: any, res: any) {
  console.log("Save Api\n");
  const { body } = req;

  const scoreToSet: number = body.score;
  const storageKeyToSave: number = body.storeKey;
  const nameToSave: string = body.name;

  const q = faunadb.query;

  const client = new faunadb.Client({
    secret: "fnAE9FQQHjACWWXFwbdtaIAH4eyW6_XRdJ75kjQ_",
    // NOTE: Use the correct endpoint for your database's Region Group.
    scheme: "https",
    domain: "db.fauna.com",
    endpoint: "https://db.fauna.com/",
  });
  let documentId = "";
  switch (storageKeyToSave) {
    case 0:
      documentId = "357002542602781274";
      break;
    case 1:
      documentId = "357002584934842970";
      break;
    case 2:
      documentId = "357002592516047450";
      break;
    default:
      break;
  }
  client.query(
    q.Update(q.Ref(q.Collection("highscores"), documentId), {
      data: { score: scoreToSet, name: nameToSave },
    })
  );

  res.setHeader("Content-Type", "application/json");
  return res.end(scoreToSet.toString());
}
