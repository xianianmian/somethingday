## js继承

1. 原型链继承

   >有缺点
   >
   >* 要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
   >* 无法有多个父亲，只能继承在一个
   >* 创建子类实例对象时无法向父类构造函数传参

2. 构造函数继承

   > 有缺点
   >
   > * 实例只是子类的实例
   > * 只能继承父类的实例属性，原型的不行

3. 组合继承

   > 解决了1，2的问题，但生成了两次实例。

4. 寄生组合继承

   > 没有缺点的

   ```js
   function Animal(name) {
     this.name = name;
   }
   
   Animal.prototype.sayName = function() {
     console.log(`My name is ${this.name}`);
   };
   
   function Dog(name, type) {
     Animal.call(this, name); // 继承父类的属性
     this.type = type;
   }
   
   // 辅助函数，将父类原型对象的副本赋值给子类原型对象
   function inheritPrototype(subType, superType) {
     subType.prototype = Object.create(superType.prototype);
     subType.prototype.constructor = subType; // 修正 constructor 属性
   }
   
   inheritPrototype(Dog, Animal); // 寄生组合继承
   
   let dog = new Dog('Tom', 'dog');
   dog.sayName(); // 输出：My name is Tom
   console.log(dog.type); // 输出：dog
   
   ```

### 多继承

采用混入的方法，使用`Object.assign()`可实现。但注意它只是浅拷贝[`Object.assign`][1]

```js
//在添加宠物
function Chongwu(){
  this.t = "宠物🐕";
}

Chongwu.prototype.sayHello = function(){
  console.log("nis")
}

function Dog(name, type) {
  Animal.call(this, name); // 继承父类的属性
  Chongwu.call(this)
  this.type = type;
}
Object.assign(Dog.prototype, Animal.prototype,Chongwu.prototype);//合并
```



[1]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign