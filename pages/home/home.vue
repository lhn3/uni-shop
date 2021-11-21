<template>
	<view class="home">
		<!-- 轮播图 -->
		<uniswiper :banner="banner"></uniswiper>
		
		<!-- 导航 -->
		<uninav :navs="navs"></uninav>
		
		<!-- 推荐商品 -->
		<unihotGoods title="推荐商品" :hotGoods="hotGoods"></unihotGoods>
		
	</view>
</template>

<script>
	import uniswiper from '../../components/uni-swiper/uni-swiper.vue'
	import uninav from '../../components/uni-nav/uni-nav.vue'
	import unihotGoods from '../../components/uni-hotGoods/uni-hotGoods.vue'
	export default {
		data() {
			return {
				banner:[],
				hotGoods:[],
				navs:[
					{
						title:"超市",
						icon:"iconfont icon-ziyuan",
						path:"/pages/home/goods/goods"
					},
					{
						title:"联系我们",
						icon:"iconfont icon-guanyuwomen",
						path:"/pages/home/goods/goods"
					},
					{
						title:"社区图片",
						icon:"iconfont icon-tupian",
						path:"/pages/home/goods/goods"
					},
					{
						title:"学习视频",
						icon:"iconfont icon-shipin",
						path:"/pages/home/goods/goods"
					},
				],
				pageindex:1,
				
			}
		},
		components:{
			"uniswiper":uniswiper,
			"uninav":uninav,
			"unihotGoods":unihotGoods
		},
		
		async onLoad(){
			// 获取轮播图数据
			let banners=await this.$myRequest({
				url:"/api/getlunbo"
			}) 
			this.banner=banners.data.message
			
			//获取热门商品的数据
			let hotGoods=await this.$myRequest({
				url:"/api/getgoods?pageindex=1",
			})
			this.hotGoods=hotGoods.data.message
		},
		
		// 下拉请求数据
		async onReachBottom(){
			this.pageindex+=1
			let hotGoods=await this.$myRequest({
				url:"/api/getgoods?pageindex="+this.pageindex,
			})
			hotGoods.data.message.forEach(item=>{
				this.hotGoods.push(item)
			})
		},
		methods: {
	
		} 
	}
</script>

<style lang="scss">

</style>
