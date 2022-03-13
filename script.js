const simpleFunc = () => {
  console.log("Hello Code Nation")
}

const higherOrderFunc = (fn) => {
  for (let i = 0; i < 5; i++){
    fn()
  }
}

higherOrderFunc(simpleFunc)

mapFunc = (num) => {
  return num * 3
}

const arr = [1, 2, 3, 4, 5]
console.log(arr)
const newArr = arr.map(mapFunc)
console.log(newArr)

const add = (a,b) => {
  return a+b;
}
const subtract = (a,b) => {
  return a - b;
}
const multiply = (a,b) => {
  return a*b;
}
const divide = (a,b) => {
  return a/b;
}
const doMaths = (num1) => {
  return (num2, fn) => {
      return fn(num1, num2);
  }
}

result = doMaths(10)(20, divide)
console.log(result)
