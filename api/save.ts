let faunadb = require("faunadb");
let q = faunadb.query;

let client = new faunadb.Client({
  secret: "fnAE8JSkkZACWlVtkt77Y10Ru2KOsK3DXHyoDIn",
  // NOTE: Use the correct endpoint for your database's Region Group.
  endpoint: "https://db.fauna.com/",
});

export default function handler(req, res) {
  console.log("Save Api");

  let createP = client.query(
    q.Create(q.Collection("test"), { data: { testField: "testValue" } })
  );
  createP.then(function (response) {
    console.log(response.ref); // Logs the ref to the console.
  });

  res.setHeader("Content-Type", "application/json");
  return res.end("666");
}
