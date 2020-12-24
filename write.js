const data = {
  id: "1",
  name: 'Arya',
  age: 13,
  level: 12
}
let { id, name, level: rank } = data
const data2 = { id, name, rank }
console.log(rank)
console.log(data2)