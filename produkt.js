const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("asset_id");

window.addEventListener("load", getProduct);

function getProduct() {
  fetch("https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL?limit=9", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
    },
  })
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(product) {
  document.querySelector("h2").textContent = product.produktnavn;
}
