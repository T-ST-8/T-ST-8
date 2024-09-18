const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("load", getProduct);

function getProduct() {
  fetch(`https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL?asset_id=eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
    },
  })
    .then((res) => res.json())
    .then(visProdukt);
}
function visProdukt(data) {
  console.log(data);
  if (data && data.length > 0) {
    const singleProduct = data[0];
    document.querySelector("h1").textContent = singleProduct.produktnavn;
  } else {
    console.error("No product found.");
  }
}
/*function visProdukt(data) {
  console.log(data);
  const singleProduct = data[0];
  document.querySelector("h1").textContent = singleProduct.name;
}*/
