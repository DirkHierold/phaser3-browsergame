import faunadb from "faunadb";

export default async function handler(req, res) {
  console.log("Save Api\n");
  let returnValue = "777";

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
  const result = await client.query(q.Paginate(q.Collections()));
  console.log("Result = \n\n" + result);
  returnValue = JSON.stringify(result);
  console.log("ReturnValue = \n\n" + returnValue);

  // let createP = client.query(
  //   q.Create(q.Collection("test"), { data: { testField: "testValue" } })
  // );
  // createP.then((response: any) => {
  //   console.log(response.ref); // Logs the ref to the console.
  // });

  res.setHeader("Content-Type", "application/json");
  return res.end(returnValue);
}
