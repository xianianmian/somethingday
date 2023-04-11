// import { Node,ListNode} from './listnode/listnode1.js'
import {dbNode,dbListNode} from './listnode2.js'
// {
//   const listnode1 = new ListNode() 
// listnode1.append('aa')
// listnode1.append('bb')
// listnode1.append('cc')
// listnode1.append('dd')

// listnode1.insert(3,'woshisb')
// // console.log(listnode1.get(2))
// console.log(listnode1.indexOf('aa'))
// // listnode1.update1('kk',7)
// // console.log(listnode1.remove1(2))
// // console.log(listnode1.remove1(0))
// // listnode1.update2(1,'ll')
// console.log(listnode1.remove2('bb'))
// console.log(listnode1)
// console.log('sss')
// }


const newdbListNode1 = new dbListNode()
newdbListNode1.append('a')
newdbListNode1.append('b')
newdbListNode1.append('c')
newdbListNode1.append('d')

newdbListNode1.insert(0,'abc')
// console.log(newdbListNode1.get(1))
// console.log(newdbListNode1.indexOf('a'))
console.log(newdbListNode1.remove1(1))
// abc b c d
console.log(newdbListNode1.update2(2,'ttt'))
//abc b ttt d
console.log(newdbListNode1.remove2('abc'))
//b ttt d
console.log(newdbListNode1)