fetch("https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL?limit=6", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
  },
})
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  console.log(cats);
  cats.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector("template").content;

  const clone = template.cloneNode(true);

  clone.querySelector("h3").textContent = cat.type;
  clone.querySelector("a").href = `produktliste.html?type=${cat.type}`;

  document.querySelector(".kategori_grid").appendChild(clone);
}
