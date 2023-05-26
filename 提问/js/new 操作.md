## new 操作

1. 创建一个空对象，用于承载构造函数的实例。

2. 将这个空对象与构造函数的原型对象通过原型链连接起来，使得该对象可以访问构造函数所继承的属性和方法。

3. 将构造函数的 this 关键字绑定到这个对象上，以便在构造函数中使用 this 关键字时可以正确地指向该对象。

4. 返回这个新对象实例。

   ```js
   //以下newFunc 相当于 new
   
   function newFunc(Func,...args) {
     // 1.创建一个新对象
     let newObj = {}
     // 2.将新对象和构造函数通过原型链连接
     newObj.__proto__ = Func.prototype
     // 3.将构造函数的this绑定到新对象上
     const result = Func.apply(newObj,args)
     // 4.根据返回值类型判断,如果是值类型返回newObj,如果是引用类型返回正常引用类型
     return result instanceof Object ? result : newObj   
   }
   ```

   