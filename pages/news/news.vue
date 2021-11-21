<template>
	<view>
		<!-- 资讯列表 -->
		<uninewsItem :newsList="newsList" @toDetail="toDetail"></uninewsItem>
	</view>
</template>

<script>
	import uninewsItem from '../../components/uni-newsItem/uni-newsItem.vue'
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		components:{
			"uninewsItem":uninewsItem
		},
		
		onLoad(){
			this.getNews()
		},
		
		methods: {
			async getNews(){
				let newsList=await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList=newsList.data.message
			},
			
			// 前往详情页并传递id
			toDetail(id){
				uni.navigateTo({
					url:"./detail/detail?id="+id
				})
			}
		},
	}
</script>

<style >
	

</style>
