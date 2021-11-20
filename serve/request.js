
let BASE_URL="http://localhost:8000"
export const myRequest=(data)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+data.url,
			method:data.method || "GET",
			success:res=>{
				if(res.data.status!==0){
					return uni.showToast({
						title:'数据获取失败',
						icon:'error'
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
				return uni.showToast({
					title:'数据请求失败',
					icon:'error'
				})
			}
		})
	})
}

