### JSONP
- 原理  
    html中的script标签可以引入其他域下的js,比如引入线上的jQuery库。利用这个特性，可以实现跨域访问接口，不过需要后端的支持。
- 方法
    1. 定义一个数据处理函数：func
    2. 创建script标签，src的地址执行后端的接口，最后加个参数callback=func
    3. 后端在接受到请求后解析参数，计算返还数据，输出func(data)字符串
    4. func(data)会放到script标签作为js执行，此时会调用func函数，data为参数
    - [代码演示]()

### CORS
- 跨域资源共享，是一种ajax跨域请求资源的方式，支持现代浏览器和IE10以上
- 浏览器发现我们发送的XMLHttpRequest不符合同源策略，就给该请求加一个请求头：Origin；后端在返回结果中加一个响应头：Access-Control-Allow-Origin；浏览器判断该响应头中是否包含Origin的值，若包含，则处理响应我们就能拿到数据，反之直接驳回，我们拿不到数据。
- CORS的实现方式很简单，只要在后端加一条代码（处理比较简单，不贴demo）：
```
res.header('Access-Control-Allow-Origin','[允许的域名，*代表所有域名的请求都回应])
```

### 降域实现
- 降域的使用场景比较小众，需要主域名一样，二级域名不一样。
- 比如（处理比较简单，不贴demo）：
```
//这两个域名
a.xxx.com
b.xxx.com
//在这两个页面的代码中都加入一条ducument.domain即可实现降域
document.domain = 'xxx.com'
```

### postMessage
- 不同域下，互相不访问，只向对方发送数据，对方接受认可数据，则可以使用（用互相发送数据的方式达到跨域目的）
- [代码演示]()