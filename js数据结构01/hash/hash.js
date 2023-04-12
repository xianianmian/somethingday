
import { Node,ListNode }  from '../listnode/listnode1.js'
const listnode = new ListNode()
export class hashTable{
  constructor(){
    this.storage = listnode
    this.count = 0
    this.limit = 7
    this.min_factory = 0.25
    this.max_factory = 0.75
  }

  hashFn(str,limit=7){
    const PRIME = 31;
    let hashCode = 0
    for(let item of str){
      hashCode=PRIME*hashCode + item.charCodeAt()
    }
    return hashCode%limit
  }

  isPrime(number) {
    if (number <= 1 || number === 4) return false;
    const temp = Math.ceil(Math.sqrt(number));
    for (let i = 2; i < temp; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  getPrime(num){
    while(!this.isPrime(num)){num++}
    return num
  }

  put(value,key){
    const index = this.hashFn(key,this.limit)
    let bucket = this.storage.get(index)
    console.log(typeof bucket)
    // if(bucket == undefined){
    //   bucket = new ListNode()
    //   this.storage.insert(index,bucket)
    // }
    // for(let i=0;i<bucket.size();i++){
    //   let tuple = bucket.get(i)
    //   if(tuple.key == key){
    //     tuple.value = value
    //     return ;
    //   }
    // }
    // bucket.append({"key":key,"value":value})
    // this.count++
  }
}