import {a ,Queue} from './queue1.js'
console.log(a)

const duilie = new Queue()
duilie.enqueue('a')
duilie.enqueue('b')
duilie.enqueue('c')
duilie.enqueue('d')
console.log(duilie,'1')
duilie.dequeue()
duilie.dequeue()
console.log(duilie,'2')

console.log(duilie.front())

console.log(duilie.isEmpty())

console.log(duilie.size())
console.log(duilie.toSting(),'ss')


