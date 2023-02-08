import faunadb from "faunadb";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("Save Api\n");

  console.log("Request\n\n " + req.body);
  console.log("Request body\n\n " + req.body);
  let scoreToSet: number = req.body.score;
  console.log("scoreToSet\n\n " + scoreToSet);

  let q = faunadb.query;
  console.log("Query = \n\n" + q);
  let client = new faunadb.Client({
    secret: "fnAE8MKXOoAAVzI4RyIljdQ2UXjDEwzXgc_Npllh",
    // NOTE: Use the correct endpoint for your database's Region Group.
    scheme: "https",
    domain: "db.us.fauna.com",
    endpoint: "https://db.us.fauna.com/",
  });
  console.log("Client = \n\n" + client);
  const result: any = await client.query(
    q.Update(q.Ref(q.Collection("highscores"), "355998936929927254"), {
      data: { score: scoreToSet },
    })
  );
  console.log("return scoreToSet = \n\n" + scoreToSet, typeof scoreToSet);

  res.setHeader("Content-Type", "application/json");
  return res.end(scoreToSet);
}
