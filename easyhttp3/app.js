const http = new EasyHTTP;
const users = http.get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.error(err));

const data = {
  name: "Bhanu Prakash",
  username: "bhanu_3",
  email: "prakashbhanu019@gmail.com",
};

// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// http
//   .delete("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
