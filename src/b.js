function all(promises){
  return new Promise((resolve,reject)=>{
     let arr = [];//用来存放每一次成功的promise 
     let index = 0
     let processdata=(i,key)=>{
		 index++;
	     arr[i]=key; 
		// arr[1] = key; 因为promist是异步 可能出现上述结果  所有定义一个变量index 
		 if(promises.length===index){
            resolve(arr)
		}
	}
      for(let i=0;i<promises.length;i++){
      promises[i].then(y=>{
		// processdata  定义了一个出来成功的proimise的函数
		  processdata(i,y) //i是索引 y是每次成功的值 
	  },reject)
	}
  })
}
Promise.race([]).then(y=>{},r=>{})
function race(promises){  
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
	   promises[i].then(resolve,reject)
     }
  })
}