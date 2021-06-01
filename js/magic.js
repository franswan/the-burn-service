const query = `
  query{
  bitcoin{
    blocks{
      count
    }
   }
}
`;
const url = "https://graphql.bitquery.io/";
const opts = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      "X-API-KEY": ""
    },
    body: JSON.stringify({
        query
    })
};
fetch(url, opts)
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);


    