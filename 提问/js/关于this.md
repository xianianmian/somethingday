## 关于this

### this指向

> 谁调用了，this就指向谁。

#### 这里有些特殊情况

1. 当在 DOM 元素上注册事件回调函数时，如果该回调函数是在全局作用域下调用的，那么其中的 `this` 也会指向全局对象。也就是`btn.addEventListener('click',function(){})`与` btn.onclick = handleClick;`的差别。  、

2. 回调函数作为参数传递时。当将一个函数作为参数传递给其他函数，并且该函数被异步执行时，由于回调函数不是在本身的拥有者对象的作用域内执行的，因此其中的 `this` 也会指向全局对象。例如：`setTimeout`

### this改变

1. call

   >### fn.call([obj],[param]...)里面是多个参数
   >
   >非严格模式 this为空，则指向window
   >
   >严格模式 第一个参数就是this

   

2. apply：和call基本上一致，唯一区别在于传参方式

   > ### fn.apply(obj, [1, 2]);//后面一定只有一个数组

   

3. bind：语法和call一模一样，区别在于立即执行还是等待执行 ，bind不立即

```js
//用js实现原生的bind
Function.prototype.bind = function() {
  // 获取需要绑定的函数
  var fn = this;
  // 获取需要绑定的对象
  var obj = arguments[0];
  // 获取绑定参数数组（不包括绑定对象）
  var args = Array.prototype.slice.call(arguments, 1);

  // 返回一个新的函数
  return function() {
    // 将绑定对象设为 this
    fn.apply(obj, args.concat(Array.prototype.slice.call(arguments)));
  };
};

var obj = { name: "world" };
function hello(greeting) {
  console.log(greeting + ", " + this.name + "!");
}
var bound = hello.bind(obj, "Hello");
bound(); // 输出"Hello, world!"

```

<<<<<<< HEAD
=======
3. bind：语法和call一模一样，区别在于立即执行还是等待执行 bind不立即调用函数

ad03adb1e1d9f8f5ec11593263eb951ea6f4