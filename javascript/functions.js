// Arrow Functions with multiple parameters
const sum = (num1, num2, num3) => {
  return num1 + num2 * num3
}

console.log(sum(1, 2, 9))

// No Parameter
const message = () => {
  console.log("Hello")
}

message()

// Single Parameter
const checkWeight = weight => {
  console.log(`my weight is: ${weight}`)
}

checkWeight(25)

// Normal functions
function name(num1, num2) {
  return num1 + num2
}

const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3
}
console.log(multiply(1, 2, 3))
