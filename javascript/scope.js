var pizzaType = "Volvo"

// Global variable example
function message() {
  console.log(pizzaType)
}
message()

console.log(pizzaType)

// local variable example
function message2() {
  var greetings = "Hi There!"
  console.log(greetings)
}
message2()

console.log(pizzaType)

// Trying to call global variable inside a function
function message3() {
  var greetings = "Hi There!"
  console.log(greetings)
  console.log(pizzaType)
}
message3()
console.log(pizzaType)

// Trying to call local variable outside its scope
function message4() {
  var greetings = "Hi There!"
  console.log(greetings)
}
message4()

console.log(greetings) // It will fail here
