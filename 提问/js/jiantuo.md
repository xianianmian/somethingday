### （）=> {}

1. 箭头函数在定义时，this就绑定好了，静态的不可改变，bind那三个可以用但改不了，它的this指向它的父级this。

> ```js
> const sum = (a, b) => a + b;
> //直接在外面，this是window
> 
> ```
>
> ```js
> // 在对象字面量中定义一个方法
> const obj = {
>   name: 'Alice',
>   sayName: function() {
>     console.log(this.name);
>   },
>   sayNameArrow: () => {
>     console.log(this.name);
>   }
> };
> 
> obj.sayName(); // 输出'Alice',this很明显是window
> obj.sayNameArrow(); // 虽然在window调用，但它定义时this就定了，指向它父级obj
> 
> ```

2. 箭头函数没有arguments对象，但可以使用剩余参数和默认参数语法来传递参数。

>1剩余参数法（..arg）=>{}
>
>2直接指定默认参数。(q=1)=>{}