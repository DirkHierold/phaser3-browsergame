import faunadb from "faunadb";

export default async function handler(req, res) {
  console.log("Save Api");
  let returnValue = "777";

  let q = faunadb.query;
  console.log(q);
  let client = new faunadb.Client({
    secret: "fnAE8JSkkZACWlVtkt77Y10Ru2KOsK3DXHyoDIn",
    // NOTE: Use the correct endpoint for your database's Region Group.
    scheme: "https",
    domain: "db.us.fauna.com",
    endpoint: "https://db.us.fauna.com/",
    keepAlive: true,
  });
  console.log(client);
  const result = await client.query(q.Paginate(q.Collections()));
  console.log(result);
  returnValue = JSON.stringify(result);
  console.log(returnValue);

  // let createP = client.query(
  //   q.Create(q.Collection("test"), { data: { testField: "testValue" } })
  // );
  // createP.then((response: any) => {
  //   console.log(response.ref); // Logs the ref to the console.
  // });

  res.setHeader("Content-Type", "application/json");
  console.log(returnValue);
  return res.end(returnValue);
}
