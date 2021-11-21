<template>
	<view class="nav">
		<view class="nav-item" v-for="item in navs" :key="item.title" @click="routeTo(item.path)">
			<view :class="item.icon"></view>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"uni-nav",
		props:['navs'],
		methods:{
			// 点击页面跳转
			routeTo(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss">
.nav{
	display: flex;
	.nav-item{
		flex: 1;
		text-align: center;
		view{
			width: 120rpx;
			height: 120rpx;
			background-color: $font-color;
			margin: auto;
			line-height: 120rpx;
			font-size: 50rpx;
			border-radius: 50%;
			margin-top: 15rpx;
			margin-bottom: 15rpx;
			color: #fff;
		}
		text{
			font-size: 30rpx;
		}
	}
}
</style>
