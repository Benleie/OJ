
let arr = [
  {
    "id": "1346633917960671234",
    "houseId": "2-1340927832976343041-1340927833269944321-1-2-11",
    "path": "府山一区-1号楼-2单元102",
    "userName": "A先生",
    "checkStatus": "0",
    "type": "2",
    "createTime": "2021-01-06 09:45:19"
  },
  
]
let arrNew = [
  {
    "id": "1344597349032906754",
    "houseId": "2-1340927832976343041-1340927833269944321-1-2-11",
    "path": "府山一区-1号楼-2单元102",
    "userName": "于文",
    "checkStatus": "0",
    "type": "2",
    "createTime": "2020-12-31 18:52:44"
  },
  {
    "id": "1344496809445212162",
    "houseId": "2-1340927832976343041-1340927833269944321-1-2-3",
    "path": "府山一区-1号楼-1单元102",
    "userName": "宁成",
    "checkStatus": "0",
    "type": "2",
    "createTime": "2020-12-31 12:13:13"
  }
]
arr.push(...arrNew)
// console.log(arr)
let obj = {
  "id": "1344496809445212162",
  "houseId": "2-1340927832976343041-1340927833269944321-1-2-3",
  "path": "府山一区-1号楼-1单元102",
  "userName": "宁成",
  "checkStatus": "0",
  "type": "2",
  "createTime": "2020-12-31 12:13:13"
}
for(let key in obj) {
  console.log(key)
}
console.log(Object.keys(obj))