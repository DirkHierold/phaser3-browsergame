import faunadb, { Collections } from "faunadb";
let q = faunadb.query;

let client = new faunadb.Client({
  secret: "fnAE8JSkkZACWlVtkt77Y10Ru2KOsK3DXHyoDIn",
  // NOTE: Use the correct endpoint for your database's Region Group.
  endpoint: "https://db.us.fauna.com/",
});

export default function handler(req, res) {
  console.log("Save Api");
  let returnValue = "777";
  const result = client.paginate(Collections());
  result.each((page: object) => {
    returnValue = JSON.stringify(page);
    console.log(returnValue);
  });
  // let createP = client.query(
  //   q.Create(q.Collection("test"), { data: { testField: "testValue" } })
  // );
  // createP.then((response: any) => {
  //   console.log(response.ref); // Logs the ref to the console.
  // });

  res.setHeader("Content-Type", "application/json");
  return res.end(returnValue);
}
