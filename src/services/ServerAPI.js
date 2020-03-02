function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const requestNewTweet = e => {
  var tweet;
  //e.preventDefault();
  fetch("http://localhost:3001/user", {
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
      tweet = data;
      console.log(tweet);
    })
    .catch(error => console.log(error));

  return tweet;
};

export default { requestNewTweet };
