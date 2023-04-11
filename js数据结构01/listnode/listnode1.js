class Node {
  constructor(element){
    this.element = element
    this.next=null
  }
}

class ListNode {
  constructor(){
    this.head = null
    this.length = 0
  }

  // append 
  append(element){
    const newnode = new Node(element)

    if(!this.head)this.head = newnode
    else{
      let current = this.head
      while(current.next){
        current=current.next
      }
      current.next = newnode
    }
    this.length++
  }
  // insert
  insert(positon,element){
    if(positon<0 || positon>this.length){  return;}
    const newnode = new Node(element)

    if(positon == 0){
      newnode.next = this.head
      this.head = newnode
    }else{
      let index=0
      let current = this.head
      let previous =null
      while(index++ < positon){
        previous = current
        current = current.next
        // console.log(current,'ss')
      }
      previous.next = newnode
      newnode.next = current
    }
    this.length++
  }
  // get
  get(positon){
    if(positon<0 || positon>this.length-1){  return -1;}
    let index=0
    let current = this.head
    while(index++<positon){
      current = current.next
    }
    return current.element
  }
  // indexOf
  indexOf(element){
    let current = this.head
    let index=0
    while(current){
      if(current.element == element){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  //update1 我写的
  update(element,positon){
    if(positon<0 || positon>this.length-1){  return ;}
    let current = this.head
    let index=0
    while(index++ < positon){
      current =current.next
    }
    current.element = element
  }
  //remove1 位置
  remove1(positon){
    // console.log('我被调用了')
    if(positon<0 || positon>this.length-1){  return ;}
    let index=0
    let current = this.head
    let previous = null
    if(positon == 0){
      this.head = current.next
    }else{
      while(index++<positon){
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.element
  }
  //update2 视频的
  update2(positon,element){
    const result = this.remove1(positon)
    this.insert(positon,element)
    return result
  }
  //remove2 元素
  remove2(element){
    let index = this.indexOf(element)
    return index ==-1 ? null:this.remove1(index)
  }
  //isempty
  isempty(){
    return this.length >0 ? false :true
  }
  //size
  size(){return this.length}
  
}

export {
  Node,
  ListNode
}