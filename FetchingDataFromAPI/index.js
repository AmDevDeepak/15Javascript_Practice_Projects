const URI = "https://jsonplaceholder.typicode.com/posts";
const postsList = document.querySelector(".posts");

function displayResults(posts) {
  postsList.innerHTML = posts
    .map(
      (post) =>
        `<div class="post">
        <h3>${post.title}</h3>
        <h4>${post.body}</h4>
        </div>`
    )
    .join("");
}
// Fetching using XHR
function fetchUsingPromise() {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", URI);
    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}

fetchUsingPromise()
  .then((response) => {
    console.log(response);
    displayResults(response);
  })
  .catch((err) => alert(err));
