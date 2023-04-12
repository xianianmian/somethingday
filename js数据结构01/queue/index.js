// import {a ,Queue} from './queue1.js'
import { priorityQueue } from "./queue2.js";
// console.log(a)

// {
//   const duilie = new Queue()
// duilie.enqueue('a')
// duilie.enqueue('b')
// duilie.enqueue('c')
// duilie.enqueue('d')
// console.log(duilie,'1')
// duilie.dequeue()
// duilie.dequeue()
// console.log(duilie,'2')

// console.log(duilie.front())

// console.log(duilie.isEmpty())

// console.log(duilie.size())
// console.log(duilie.toSting(),'ss')
// }

const pQueue = new priorityQueue()
pQueue.enqueue('a',10)
pQueue.enqueue('b',15)
pQueue.enqueue('c',13)
pQueue.enqueue('d',20)
pQueue.enqueue('e',18)

console.log(pQueue.toSting())
console.log(pQueue.items)

