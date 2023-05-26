## BOM对象

> 浏览器对象模型，提供一组用于访问和控制浏览器窗口的对象和方法。
> 常见 5个对象。

1. window对象（核心对象）

   >很多属性方法。例如 setTimeout、setInterval、alert、confirm、prompt 等用于弹出对话框的方法；location 对象、history 对象、navigator 对象等表示浏览器的各种状态。
   >
   >放在window对象上的所有属性都可以被访问
   >
   >使用var定义的变量会被添加到window对象上

2. location对象

   > 表示当前文档的 URL 地址，提供了很多属性和方法，例如 href、protocol(当前协议)、host、pathname 等，可以用于获取或修改 URL 地址，或者在当前窗口打开新页面。

3. history对象

   > 表示当前窗口的浏览历史，提供了很多属性和方法.。
   >
   > 两个属性：length 会话中记录的条数。state当前保存的状态值。
   >
   > 方法：例如 back、forward、go 等。

4. navigator 对象(少用)

   > 表示浏览器的信息提供了很多属性和方法，例如 userAgent、language、onLine 等，可以用于判断浏览器的类型、版本、语言和是否在线等状态。

5. screen 对象（少用）

   > 表示用户屏幕的信息，提供了很多属性和方法，例如 width、height、colorDepth、availWidth、availHeight 等，可以用于获取屏幕的大小、颜色深度和可用空间等信息。