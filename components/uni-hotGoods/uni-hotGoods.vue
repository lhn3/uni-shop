<template>
	<view class="hot">
		<view class="hot-title">
			{{title}}
		</view>
		<view class="hot-goods">
			<!-- 每一件商品 -->
			<view class="goods" v-for="item in hotGoods" :key="item.id">
				<image mode="aspectFill"
				src="https://mms2.baidu.com/it/u=928603844,279344116&fm=253&app=120&f=JPEG"></image>
				<view class="goods-price">
					<text class="new-price">￥{{item.sell_price}}</text>
					<text class="old-price">￥{{item.market_price}}</text>
				</view>
				<view class="goods-title">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["title","hotGoods"]
	}
</script>

<style lang="scss">
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
			background-color: #fff;
			margin: 10rpx 10rpx 0;
			image{
				display: block;
				margin: 0 auto;
				width: 95%;
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
