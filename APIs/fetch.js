import fetch from "node-fetch";

//Then & Catch response
fetch("https://fakestoreapi.com/products?limit=5")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Shorter Version

fetch("https://fakestoreapi.com/products?limit=5")
  .then((res) => res.json())
  .then((json) => console.log(json));
