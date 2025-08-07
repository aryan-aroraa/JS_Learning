# 🧠 What is Execution Context?
## It’s the environment in which JavaScript code is evaluated and executed.

# 🔄 Steps of Execution Context
### Every time a function runs, JS creates an execution context in two phases:
## 1. Creation Phase
- Memory is allocated.
- Variables are set to undefined.
- Functions are stored in memory.
- this is set.
## 2. Execution Phase
- Code is executed line by line.
- Variables are assigned values.
- Functions are invoked.

## Example:
```js
function greet() {
  var name = "Aryan";
  console.log("Hello " + name);
}
greet();
```

### 1. Global Execution Context is created
- JS engine creates the first context to run global code.
- Memory is allocated:
    - greet → function
    - this → global object

## 2. Execution Phase (Global)
- greet() is called

## 3. Function Execution Context (greet) is created
- Creation Phase:
    - `name` → `undefined`
- Execution Phase:
    - `name` = `"Aryan"`
    - `console.log("Hello " + name)` → logs "Hello Aryan"