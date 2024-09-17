const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL?limit=9", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.produktnavn;

  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  document.querySelector(".produktliste-h1").appendChild(copy);
}
