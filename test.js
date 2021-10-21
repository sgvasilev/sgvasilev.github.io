// function sumNumbers(n) {
//   return function (num) {
//     return n + num
//   }
// }

// const addOne = sumNumbers(1)
// const addTwo = sumNumbers(2)
// console.log(addOne(10))
// console.log(addTwo(10))

// let data = ['banana', 'apple', 'grape', 'banana', 'juice', 'banana']

// function sortedArryWithVlues(data) {
//   let temp = {}
//   for (let index = 0; index < data.length; index++) {
//     temp.push(data[index]:data[index])
//   }
//   return temp
// }
// console.log(sortedArryWithVlues(data))
// const sleep = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, milliseconds)
//   })
// }
// sleep(2000).then(() => console.log('after 2000ms'))

// function add() {
//   let one = 0
//   return function () {
//     return (one += 1)
//   }
// }
// const addOne = add()
// console.log(addOne())
// console.log(addOne())
// console.log(addOne())

// const promise = new Promise((res) => {
//   console.log('foo')
//   setTimeout(() => {
//     console.log('resolved')
//     res()
//   }, 1000)
// })
// console.log('bar')
// promise.then(() => {
//   console.log('end')
// })

// let obj = { a: 42, b: 32, c: 22 }
// console.log(obj)
// Object.defineProperty(obj, 'a', {
//   value: 42,
//   writable: false,
// })
// obj.a = 55
// obj.b = 100
// console.log(obj)
// console.log(obj.a)

// const input1 = 'red.big.apple'
// const input2 = {
//   red: {
//     big: {
//       apple: 2,
//     },
//   },
// }

// const get = (inputPath, inputObject) => {
//   let temp2 = inputPath
//   let temp1 = input1.split('.')

//   function isItemExits(...temp1, temp2) {
//     for(let a in temp1) {
//      if (temp2.a !== undefined || null) return '1'
//  }
//   }
//   isItemExits(temp1)
// }
// get(input1, input2)

const worker = new Worker('./worker.js')
worker.onmessage = ({ data }) => console.log(data)
