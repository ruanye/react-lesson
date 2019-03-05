import axios from './index'
// 轮播图接口
export let getbanner=()=>{
	return axios.get('/sliders')
}
// /list/1/all  列表接口
export let getlist=(page,type)=>{
    return axios.get(`/list/${page}/${type}`)
}
