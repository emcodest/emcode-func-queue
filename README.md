# emcode-func-queue

> A lightweight function queue for Node.js to run tasks with controlled concurrency and timing.

## ✨ Features
- 📦 Lightweight and dependency-free  
- 🕒 Concurrency control  
- 🔄 Promise-based API  
- ⚡ Easy to integrate into existing apps  

## 📦 Installation

```bash
npm install emcode-func-queue

```
 ### USAGE
const Add = (a, b) => +a + +b

const Queue = require("emcode-func-queue")

const q =  new Queue()

const fxn = Add // your function to call on queue

const fxn_arguments = [10, 20] // Add(a, b) pass arguments as array

const delay_per_next_call = 3 // seconds

q.RunJobInQueue(fxn, fxn_arguments, delay_per_next_call, (result) => { console.log("fxn result", result) })

```
