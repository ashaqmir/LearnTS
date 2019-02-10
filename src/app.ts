// const pizza = {
//   name: "Pepperoni",
//   perice: 15,
//   getName() {
//     return this.name;
//   }
// };

// console.log(pizza.getName());
// const toppings = ["pepperoni"];

// const order = { pizza, toppings };

// console.log(order);

// function sumAll(message, ...arr) {
//   console.log(message);
//   return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll("Hello", 1, 2, 3, 4, 5, 6, 7);
// console.log(sum);

// const toppings=['chicken', 'chilli'];
// const newToppings=['pepparoni'];

// const allToppings=[...toppings, ...newToppings];

// console.log(allToppings);

const pizza = {
  name: "Pepparoni",
  toppings: ["perpparoni"]
};

function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}

const { pizzaName } = order(pizza);

console.log(pizzaName);

const toppings = ["pepparoni", "chicken", "chilli",'paneer'];

const [x, y, ...rest] = toppings;
console.log(x,y);

console.log(rest);