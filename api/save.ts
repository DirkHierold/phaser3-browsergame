import faunadb from "faunadb";

export default async function handler(req: any, res) {
  console.log("Save Api\n");

  console.log("Request\n\n " + req);
  console.log("Request body\n\n " + req.body);
  let scoreToSet: number = JSON.parse(req.body);
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
