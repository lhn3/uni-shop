<template>
	<view class="detail">
		<view class="title">
			{{detailInfo.title}}
		</view>
		<view class="message">
			<text class="time">发表时间：{{detailInfo.add_time | timeFilter }}</text>
			<text class="click">浏览：{{detailInfo.click}}</text>
		</view>
		<view class="info" v-html="detailInfo.content"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detailInfo:{}
			}
		},
		onLoad(value){
			this.id=value.id
			this.getDetail()
		},
		methods: {
			async getDetail(){
				let detailInfo=await this.$myRequest({
					url:'/api/getnew/'+this.id
				})
				this.detailInfo=detailInfo.data.message[0]
			}
		},
	}
</script>

<style lang="scss">
	.detail{
		margin: 15rpx;
		.title{
			width: 100%;
			font-size: 40rpx;
			text-align: center;
			line-height: 60rpx;
		}
		.message{
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			margin: 15rpx 0;
		}
		.info{
			font-size: 32rpx;
		}
	}

</style>
