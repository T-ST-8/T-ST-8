const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const encoded = encodeURIComponent(category);
console.log(encoded);

fetch(`https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL?category=eq.${encoded}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const uniqueProducts = new Set();
    const filteredData = data.filter((item) => {
      if (uniqueProducts.has(item.produktnavn)) {
        return false;
      } else {
        uniqueProducts.add(item.produktnavn);
        return true;
      }
    });
    vis(filteredData.slice(0, 8));
  });

function vis(data) {
  console.table(data); // Dette viser dataene i konsollen

  data.forEach((item) => {
    document.querySelector("h1").textContent = item.category;
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = item.produktnavn;
    copy.querySelector("a").href = `produkt.html?id=${item.asset_id}`;
    copy.querySelector("img").src = "pimgs/" + item.asset_id + ".webp";
    document.querySelector("main").appendChild(copy);
  });
}

/* billeder?
function showData(items) {
  items.forEach(showImage);
}
function showImage(item) {
  console.log("data item", item);

  const template = document.querySelector("template").content;
  console.log("template", template);
  const clone = template.cloneNode(true);

  const image = clone.querySelector("img");
  image.alt = "image of" + item.name;
  image.src = `imgs/${item.img}`;
  document.querySelector("body").appendChild(image);
}
*/

/*  Gamle js
 showProduct);
}

function showProduct(product) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.produktnavn;

  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  document.querySelector(".produktliste-h1").appendChild(copy);
}
  .then((res) => res.json())
  .then(showProducts);

function showProducts(data) {
  data.forEach((element) => {
    const link = document.createElement("a");
    link.href = `produkt.html?id=${element.asset_id}`;
    link.textContent = element.produktnavn;
    document.querySelector("main").appendChild(link);
  });
}

*/
