document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector("#merkliste");
  const emptyMsg = document.getElementById("empty-message");

  const products = await fetch("http://localhost:3000/api/wishlist", {
    credentials: "include"
  }).then(r => r.json());

  if (products.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <button class="remove-btn"><i class="fas fa-times"></i></button>
      <img src="${p.image_url}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
    `;
    grid.appendChild(div);

    div.querySelector(".remove-btn").addEventListener("click", async () => {
      await fetch(`http://localhost:3000/api/wishlist/${p.id}`, {
        method: "DELETE",
        credentials: "include"
      });
      div.remove();
      if (!grid.querySelector(".product")) {
        emptyMsg.style.display = "block";
      }
    });
  });
});
