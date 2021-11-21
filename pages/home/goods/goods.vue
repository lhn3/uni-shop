<template>
	<view>
		<unigoodsList title="商品列表" :goodsList="goodsList" :nextPage="nextPage"></unigoodsList>
	</view>
</template>

<script>
	import unigoodsList from '../../../components/uni-goodsList/uni-goodsList.vue'
	export default {
		data() {
			return {
				pageindex:1,
				goodsList:[],
				nextPage:true
			}
		},
		components:{
			"unigoodsList":unigoodsList
		},
		// 获取商品列表
		onLoad(){
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

<style>

</style>
