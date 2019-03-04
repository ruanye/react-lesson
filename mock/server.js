let express = require('express')
let cors = require('cors')
let app= express()
app.use(cors())//跨域中间件
//npm install cors
let sliders = require('./sliders')
app.get('/sliders',function(req,res){
   res.json({
		  code:200,
			msg:'请求成功',
			data:sliders
	 })
})


app.listen(5000)