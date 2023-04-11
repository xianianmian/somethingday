import { ListNode ,Node} from "./listnode1.js";

class dbNode extends Node{
  constructor(element){
    super(element)
    this.prev = null

  }
}

class dbListNode extends ListNode{
  constructor(){
    super()
    this.tail = null
    this.length = 0
  }

  //append
  append(element){
    const newnode=new dbNode(element)

    if(this.head == null){
      this.head = newnode
      this.tail = newnode
    }else{
      this.tail.next = newnode
      newnode.prev = this.tail
      this.tail = newnode
    }
    this.length++
  }
  //insert
  insert(positon ,element){
    console.log('子inset')
    if(positon<0 || positon>this.length)return false;

    const newnode = new dbNode(element)
    if(positon==0){//头
      if(this.head==null){//头为空
        this.head = newnode
        this.tail = newnode
      }else{//头不为空
        newnode.next = this.head
        this.head.prev = newnode
        this.head = newnode
      }
    }else if(positon == this.length){//尾
      this.tail.next = newnode
      newnode.prev = this.tail
      this.tail = newnode
    }else{//中间
      let index=0;
      let current = this.head
      let previous = null
      while(index++<positon){
        previous = current
        current=current.next
      }
      newnode.next = previous.next
      previous.next = newnode
      newnode.prev = current.prev
      current.prev = newnode
    }
    this.length++
    return true
  }
  //get 不用重写
  
  //indexof 不用重写

  //remove1 位置
  remove1(positon){
    console.log('子remove被调用了')
    if(positon<0 || positon>this.length-1)return null;

    let current = this.head //写在这，current 才能返回
    if(positon == 0){
      if(this.length==1){
        this.head = null
        this.tail = null
      }else{
        this.head = this.head.next
        this.head.prev = null
      }
    }else if(positon==this.length-1){
      current = this.tail//
      this.tail.prev.next = null
      this.tail = this.tail.prev
    }else{
      let index=0;
      //let current = this.head
      let previous = null
      while(index++<positon){
        previous = current
        current=current.next
      }
      previous.next = current.next
      current.next.prev = previous
      current.next=null
      current.prev = null
    }
    this.length--
    return current.element
  }

  //update2 不用重写

  //remove2 元素 不用重写
  //empty size 不用
}

export{
  dbNode,
  dbListNode
}