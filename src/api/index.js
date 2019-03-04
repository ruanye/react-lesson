import axios from 'axios'
axios.defaults.baseURL ='http://localhost:5000'
// 响应拦截
axios.interceptors.response.use(res=>{
   return res.data
},err=>{
   return Promise.reject(err)
})
export default axios