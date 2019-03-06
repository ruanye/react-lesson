let express = require('express')
let cors = require('cors')
let app= express()
app.use(cors())//跨域中间件
//npm install cors
let sliders = require('./sliders')
let lists = require('./list')
// 轮播图接口
app.get('/sliders',function(req,res){
   res.json({
		  code:200,
			msg:'请求成功',
			data:sliders
	 })
})
// 列表接口 page 表示页数，type 表示类型 我们规定一页5条数据 
//  http://localhost:5000/list/1/all
app.get('/list/:page/:type',function(req,res){
   let lessons = lists;
   let {type,page} = req.params;
   page = parseInt(page);
   if(type!='all'){
	   // 返回请求类型的数据 
 		lessons = lists.filter(item=>item.type==type)
    }
   // 根据页数返回数据  1页  0-5 2 页 5-10
   let maxLen = page*5;
   let resultlist = lessons.slice(maxLen-5,maxLen)
  //  是否有更多 hasMore  
   let hasMore=maxLen>lessons.length?false:true
   res.json({
	   code:200,
	   msg:'请求成功',
	   data:resultlist,
       hasMore
   })
})
// 详情页接口
app.get('/detail/:id',function(req,res){
   let {id}= req.params;
   let single = lists.find(item=>item.id==id)||{}
   res.json({
      code:200,
      data:single,
      msg:'请求成功'
   })
})
app.listen(5000)