const user = { name: 'John Doe', age: 34};
const { name, age:age1} = user;
console.log(age1)
const [, a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

  