function all(promises){
   return new Promise((resolve,reject)=>{
	   let result= [];
	   let index= 0
	   let processdata=(key,y)=>{
		   index++;
		   result[key] = y;
		   if(promises.length===index){
			 resolve(result)
		   }
	  }
      for(let i=0;i<promises.length;i++){
	      promises[i].then(y=>{
		    processdata(i,y)
	       },reject)
      }
  })
}


   
