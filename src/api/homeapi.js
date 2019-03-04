import axios from './index'
export let getbanner=()=>{
	return axios.get('/sliders')
}
