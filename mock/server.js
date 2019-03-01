let express = require('express')
let cors = require('cors')
let app= express()
app.use(cors())//跨域中间件
//npm install axios cors
let axios = require('axios')
app.get('/',function(req,res){
    axios.get('http://dx.xddtech.com/Shop/index/banner').then(data=>{
		console.log(data.data)
	})
})
app.listen(5000)