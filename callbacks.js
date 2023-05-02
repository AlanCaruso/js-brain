// Callback Function
const message = function () {
  console.log("Callback");
};

setTimeout(message, 3000);

//Anonymous function
setTimeout(function () {
  console.log("Funcion anonima");
}, 2000);

//Arrow Function
setTimeout(() => {
  console.log("Arrow Function");
}, 1000);

//Declaration events in callback functions
document.querySelector("#callback-btn").addEventListener("click", function () {
  console.log("El usuario hizo click");
});
