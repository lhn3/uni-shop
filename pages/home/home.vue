<template>
	<view class="home">
		<!-- 轮播图 -->
		<uniswiper :banner="banner"></uniswiper>
		
		<!-- 导航 -->
		<uninav :navs="navs"></uninav>
		
		<!-- 推荐商品 -->
		<unigoodsList title="推荐商品" :goodsList="goodsList" :nextPage="nextPage"></unigoodsList>
		
	</view>
</template>

<script>
	import uniswiper from '../../components/uni-swiper/uni-swiper.vue'
	import uninav from '../../components/uni-nav/uni-nav.vue'
	import unigoodsList from '../../components/uni-goodsList/uni-goodsList.vue'
	export default {
		data() {
			return {
				banner:[],
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
				goodsList:[],
				nextPage:true
				
			}
		},
		components:{
			"uniswiper":uniswiper,
			"uninav":uninav,
			"unigoodsList":unigoodsList
		},
		
		async onLoad(){
			// 获取轮播图数据
			let banners=await this.$myRequest({
				url:"/api/getlunbo"
			}) 
			this.banner=banners.data.message
			
		// 获取商品列表
			this.getGoodsList()
		},
		
		// 底部加载更多
		onReachBottom(){
			if(this.nextPage){
				this.pageindex+=1
				this.getGoodsList()
			}
		},
		// 下拉刷新
		onPullDownRefresh(){
			this.pageindex=1
			this.goodsList=[]
			this.nextPage=true
			// 请求数据函数
			setTimeout(()=>{
				this.getGoodsList()
				// 停止刷新动画
				uni.stopPullDownRefresh()
			},500)
		},
		methods:{
			async getGoodsList(){
				let goodsList=await this.$myRequest({
					url:"/api/getgoods?pageindex="+this.pageindex
				})
				// 如果当前页数据已经为空了就没有下一页了
				if (goodsList.data.message.length<=0) {
					 this.nextPage=false
				}
				this.goodsList=[...this.goodsList,...goodsList.data.message]
			}
		}
	}
</script>

<style lang="scss">

</style>
