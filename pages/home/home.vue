<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- <swiper :banner="banner"></swiper> -->
		<view>
			<swiper indicator-dots autoplay="true" circular>
				<swiper-item v-for="item in banner" :key="item.id">
					<image :src="item.img" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 导航 -->
		<view class="nav">
			<view class="nav-item">
				<view class="iconfont icon-ziyuan"></view>
				<text>超市</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
	</view>
</template>

<script>
	import swiper from 'components/home/swiper.vue'
	export default {
		data() {
			return {
				banner:[]
			}
		},
		components:{
			swiper
		},
		async onLoad(){
			// 获取轮播图数据
			let res=await this.$myRequest({
				url:"/api/getlunbo"
			}) 
			this.banner=res.data.message
		},
		methods: {
			
		} 
	}
</script>

<style lang="scss">
.home{
	swiper{
		width: 750rpx;
		height: 380rpx;
	}
	image{
		width: 100%;
		height: 100%;
	}
}
.nav{
	display: flex;
	.nav-item{
		flex: 1;
		text-align: center;
		view{
			width: 120rpx;
			height: 120rpx;
			background-color: #b50103;
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
