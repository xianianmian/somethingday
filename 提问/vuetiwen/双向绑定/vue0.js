class Vue {
  // 参数为对象实例 这个对象用于告知vue需要挂载到哪个元素并挂载数据
  constructor(obj_instance) {
    // 给实例赋值对象的data属性
    this.$data = obj_instance.data;
    // 进行数据劫持 监听对象里属性的变化
    Observer(this.$data);
    Complie(obj_instance.el, this);
  }
}

//数据劫持 —— 监听实例里的数据
function Observer(data_instance) {
  // 递归出口
  if (!data_instance || typeof data_instance !== "object") return;//没有子属性或者不是对象时退出
  Object.keys(data_instance).forEach((key) => {
    // 使用defineProperty后属性里的值会被修改 需要提前保存属性的值
    let value = data_instance[key];
    // 递归劫持data里的子属性
    Observer(value);
    Object.defineProperty(data_instance, key, {
      enumerable: true,
      configurable: true,
      // 收集数据依赖
      get() {
        // console.log(`获取了属性值 ${value}`);
        return value;
      },
      // 触发视图更新
      set(newVal) {
        console.log(`修改了属性值`);
        value = newVal;
        // 处理赋值是对象时的情况 如果给name设置成{minzi:'xia'}时，就和上面一样了
        Observer(newVal);
      },
    });
  });
}

//模板解析 —— 替换DOM内容 把vue实例上的数据解析到页面上
// 接收两个参数 1.vue实例挂载的元素<div id="app"> 2.vue实例
function Complie(element, vm) {
  vm.$el = document.querySelector(element);
  // 使用文档碎片来临时存放DOM元素 减少DOM更新
  const fragment = document.createDocumentFragment();
  let child;
  // 将页面里的子节点循环放入文档碎片
  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child);
  }
  fragment_compile(fragment);
  // 替换fragment里文本节点的内容
  function fragment_compile(node) {
    // 使用正则表达式去匹配并替换节点里的{{}}
    const pattern = /\{\{\s*(\S+)\s*\}\}/;
    if (node.nodeType === 3) {
      // 提前保存文本内容 否则文本在被替换一次后 后续的操作都会不生效
      // 打工人: {{name}}  => 打工人：西维 如果不保存后续修改name会匹配不到{{name}} 因为已经被替换
      const texts = node.nodeValue;
      // 获取正则表达式匹配文本字符串获得的所有结果
      const result_regex = pattern.exec(node.nodeValue);
      if (result_regex) {
        const arr = result_regex[1].split("."); // more.salary => ['more', 'salary']
        // 使用reduce归并获取属性对应的值 = vm.$data['more'] => vm.$data['more']['salary']
        const value = arr.reduce((total, current) => total[current], vm.$data);

        node.nodeValue = texts.replace(pattern, value);
      }
    }
    // 对子节点的所有子节点也进行替换内容操作
    node.childNodes.forEach((child) => fragment_compile(child));
  }
  // 操作完成后将文档碎片添加到页面
  // 此时已经能将vm的数据渲染到页面上 但还未实现数据变动的及时更新
  vm.$el.appendChild(fragment);
}
