<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- <swiper :banner="banner"></swiper> -->
		<view class="swiper">
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
		
		<!-- 推荐商品 -->
		<view class="hot">
			<view class="hot-title">
				推荐商品
			</view>
			<view class="hot-goods">
				<!-- 每一件商品 -->
				<view class="goods" v-for="item in hotGoods" :key=item.id>
					<image :src="item.img_url"></image>
					<view class="goods-price">
						<text class="new-price">￥{{item.sell_price}}</text>
						<text class="old-price">￥{{item.market_price}}</text>
					</view>
					<view class="goods-title">{{item.title}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import swiper from 'components/home/swiper.vue'
	export default {
		data() {
			return {
				banner:[],
				hotGoods:[],
				pageindex:1
			}
		},
		components:{
			swiper
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
.swiper{
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

.hot{
	width: 750rpx;
	background-color: #eee;
	margin-top: 10rpx;
	overflow: hidden;
	.hot-title{
		width: 100%;
		background-color: #fff;
		text-align: center;
		line-height: 100rpx;
		font-size: 44rpx;
		font-weight: bold;
		letter-spacing: 30rpx;
		color: $font-color;
		margin-top: 10rpx;
	}
	.hot-goods{
		display: flex;
		flex-wrap: wrap;
		.goods{
			width: 355rpx;
			// height: 600rpx;
			background-color: #fff;
			margin: 10rpx 10rpx 0;
			image{
				display: block;
				margin: 0 auto;
				width: 95%;
				// height: 400rpx;
			}
			.goods-price{
				padding: 15rpx;
				.new-price{
					font-size: 40rpx;
					color: $font-color;
					line-height: 50rpx;
					margin-right: 10rpx;
				}
				.old-price{
					color: #C0C0C0;
					font-size: 30rpx;
					text-decoration: line-through;
				}
			}
			.goods-title{
				padding: 0 15rpx;
				font-size: 30rpx;
				overflow: hidden;
				height: 120rpx;
				line-height: 50rpx;
			}
			
		}
	}
}

</style>
