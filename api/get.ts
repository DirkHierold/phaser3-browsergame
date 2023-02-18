import faunadb from "faunadb";
import { Http2ServerResponse } from "http2";

export default async function handler(req: any, res: Http2ServerResponse) {
  console.log("Get Api\n");
  let returnValue = "0";
  let returnName = "Dirk";

  const { body } = req;
  const storageKeyToSave: number = body.storeKey;

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

  const result: any = await client.query(
    q.Select("data", q.Get(q.Ref(q.Collection("highscores"), documentId)))
  );

  returnValue = result.score.toString();
  returnName = result.name;
  console.log("get API = ", storageKeyToSave, " = ", returnName);
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify({ score: returnValue, name: returnName }));
}
