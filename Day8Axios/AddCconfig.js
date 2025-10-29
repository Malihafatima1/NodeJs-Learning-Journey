const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    params: { userId: 1 },
    headers: { Accept: "application/json" },
    timeout: 5000,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
