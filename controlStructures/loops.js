//ForEach used for arrays

array.forEach(function (i) {
  console.log(i);
});

//for used for objects

for (i = 0; i <= array.length; i++) {
  console.log(array[i]);
}

const myObj = {
  name: "Alan",
  age: 30,
  city: "New York",
};

for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}
