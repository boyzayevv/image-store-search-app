const container = document.getElementById("container");
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

fetch(`https://fakestoreapi.com/products/${postId}`)
  .then(response => response.json())
  .then(posts => {
      const card = document.createElement("div");
      card.innerHTML = `
      <img style='width: 100%;  height: 70%;' src="${posts.image}" alt="">
        <h2>${posts.title}</h2>
        <h2>${posts.price}</h2>
        <a href="index.html" class='btn btn-primary '
                    style='text-decoration: none; color: white;'>Back to Home</a>
      `;
      container.appendChild(card);
  });
