## react项目流程
1. 创建react项目 npx create-react-app rcdemo
2. cd rcdmeo 进入并下载路由 npm install react-router-dom  路由官方文档：https://reacttraining.com/react-router/web/guides/philosophy 
3. npm start 启动  
4. 删除无用文件
--------------------------------
5. 规划文件目录
  - mock 模拟数据 
  - src 
   - api       请求数据
   - component 公用组件
   - container 页面组件
   - redux      放redux
   - index.js 
6. 配置路由 
 - exact={true}  严格匹配
   Router 路由容器
   Route  路由 
7. 配置导航  
8. 拆分导航  -this.props.children 就是路由集合 
* 写组件的时候保证组件功能的单一性 
* 组件名 class 首字母大写  component={Home} 属性小写 
- npm run eject  暴露webpack 配置 



  




 



