<template>
	<view>
		<view class="news-item" v-for="item in newsList" :key="item.id" @click="toDetail(item.id)">
			<!-- <image :src="item.img_url"></image> -->
			<image src="../../static/image/zx.jpg"></image>
			<view class="message">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>发表时间：{{item.add_time | timeFilter }}</text>
					<text>浏览：{{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			newsList:{
				type:Array,
				default:()=>[]
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			toDetail(id){
				this.$emit('toDetail',id)
			}
		},
		filters:{
			timeFilter(time){
				let date=new Date(time)
				let year=date.getFullYear()
				// 不足两位，前面用0补齐
				let month=(date.getMonth()+1).toString().padStart(2,0)
				let day=date.getDate().toString().padStart(2,0)
				let hours=date.getHours().toString().padStart(2,0)
				let min=date.getMinutes().toString().padStart(2,0)
				let sencond=date.getSeconds().toString().padStart(2,0)
				return `${year}-${month}-${day} ${hours}:${min}:${sencond}`
			}
		}
	}
</script>

<style lang="scss">
.news-item{
		display: flex;
		border-bottom: 2rpx solid #F0AD4E;
		height: 170rpx;
		margin-bottom: 10rpx;
		image{
			width: 200rpx;
			height: 150rpx;
			margin: 10rpx;
		}
		.message{
			width: 510rpx;
			margin: 10rpx 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
				overflow: hidden;
			}
			.info{
				font-size: 20rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
