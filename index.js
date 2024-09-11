fetch("https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
