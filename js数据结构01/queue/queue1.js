import {  Node,ListNode} from '../listnode/listnode1.js'

let a='s'
const listnode = new ListNode()

class Queue{
  constructor(){
    this.items = listnode
  }
  enqueue(item){
    this.items.append(item)
  }
  dequeue(){//出队列 删除头元素
    let result = this.items.get(0)
    this.items.remove1(0)
    return result
  }
  front(){
    return this.items.get(0)
  }
  isEmpty(){
    return this.items.isempty()
  }
  size(){
    return this.items.size()
  }
  toSting(){
    let str=''
    for(let i=0;i<this.size();i++){
      str+=this.items.get(i)
    }
    return str
  }
}
export{
a,
Queue
}