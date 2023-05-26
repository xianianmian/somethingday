## 关于ajax

> 一种用于创建快速动态网页的技术。
> 可以在不刷新整个网页的情况下，与后台进行数据交换，刷新局部页面。

### 原生js实现Ajax

```js
function ajax(options) {
  const xhr = new XMLHttpRequest();
  // 处理 AJAX 响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success(xhr.responseText, xhr.status, xhr);
      } else {
        options.error(xhr.statusText, xhr.status, xhr);
      }
    }
  };
  // 组装请求参数
  let params = '';
  for (let key in options.data) {
    if (params !== '') {
      params += '&';
    }
    params += `${encodeURIComponent(key)}=${encodeURIComponent(options.data[key])}`;
  }
  const url = options.url + (options.type === 'GET' ? (`?${params}`) : '');
  // 配置请求
  xhr.open(options.type, url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // 发送请求
  xhr.send(options.type === 'POST' ? params : null);
}
// 使用示例
ajax({
  type: 'GET',
  url: 'http://example.com/api/data',
  data: {
    id: 123,
    name: 'John Smith'
  },
  success: function (responseText, status, xhr) {
    console.log(responseText);
  },
  error: function (textStatus, status, xhr) {
    console.error(textStatus);
  }
});



```

### ajax跨域

> 前后端都可以处理

1. 后端——以sprintboot为例，参考青戈。

2. 前端—— 参考[1][1]

   > 五个方法（没实操过，好像）
   >
   > 1. 添加响应头
   > 2. 用jsonp 处理 get请求，post不行
   > 3. httpClient内部转发（不懂）
   > 4. 使用nginx搭建企业级接口网关方式
   > 5. 使用Spring Cloud zuul接口网关

[1]:https://blog.csdn.net/itcats_cn/article/details/82318092