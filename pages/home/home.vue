<template>
	<view>
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bunch:[]
			}
		},
	
		async onLoad(){
			// 获取轮播图数据
			let res=await this.$myRequest({
				url:"/api/getlunbo"
			}) 
			this.bunch=res.data.message
		},
		methods: {
			// 获取轮播图数据
			
		}
	}
</script>

<style>

</style>
