import {Queue} from './queue1.js'

class QueueElement{
  constructor(element,priority){
    this.element = element
    this.priority = priority
  }
}

export class priorityQueue extends Queue{
  constructor(){
    super()
  }

  //enqueue()重写
  enqueue(element,priority){
    const queueElement = new QueueElement(element,priority)
    if(this.isEmpty()){
      this.items.append(queueElement)
    }else{
      let added = false
      for(let i=0;i<this.items.length;i++){
        // debugger
        if(queueElement.priority <this.items.get(i).priority){
          this.items.insert(i,queueElement)
          added = true
          break
        }
      }
      if(!added){
        this.items.append(queueElement)
      }
    }
    // console.log(this.items.length,'ss')
  }
  //dequeue() front() isEmpty() size() 不重写
  //tostring 重写
  toSting(){
    let str = ''
    for(let i=0; i<this.size();i++){
      str+=this.items.get(i).element+"-"+this.items.get(i).priority+" "
    }
    return str
  }

}