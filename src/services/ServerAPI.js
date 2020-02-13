function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

var requestNewTweet = e => {
  e.preventDefault();
  fetch("http://localhost:3001/user2", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default"
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
};

export default { requestNewTweet };
