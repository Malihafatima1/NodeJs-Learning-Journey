function userDataSubmit(req, res) {
  let body = "";

  //Listen for data chunks from the POST request
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  //When all data is received
  req.on("end", () => {
    //Parse the form data
    const formData = new URLSearchParams(body);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    //send data
    res.write(`<h1>Form Submitted Successfully!</h1>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
   
`);
    res.end();
  });
}

module.exports = userDataSubmit;
