const first = JSON.stringify({ a: 1, b: 2 });
const second = JSON.stringify({ b: 2, a: 1 });


console.log(first); // "{"a":1,"b":2}"

console.log(second); // "{"b":2,"a":1}"

console.log(first === second); // false
