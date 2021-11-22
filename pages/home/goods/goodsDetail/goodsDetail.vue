<template>
	<view class="goods-detail">
		<!-- 轮播图 -->
		<uniswiper :banner="banner"></uniswiper>
		
		<!--  详情-->
		<view class="top">
			<text class="new-price">￥{{goodsDetail.sell_price}}</text>
			<text class="old-price">￥{{goodsDetail.market_price}}</text>
			<view class="title">
				{{goodsDetail.title}}
			</view>
		</view>
		
		<view class="middle">
			<text>货号：{{goodsDetail.goods_no}}</text>
			<text>库存：{{goodsDetail.stock_quantity}}</text>
		</view>
		
		<view class="bottom">
			<view class="title">
				详情介绍
			</view>
			<view class="content" v-html="goodsDesc.content"></view>
		</view>
	</view>
</template>

<script>
	import uniswiper from '../../../../components/uni-swiper/uni-swiper.vue'
	export default {
		data() {
			return {
				id:'',
				banner:[
					{id:1,img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F101520094J6%2F201015094J6-2-1200.jpg"},
					{id:2,img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F12%2F1f%2Fa0%2F121fa0f4730a034237c13b7595db3a16.jpg"}
				],
				goodsDetail:{},
				goodsDesc:{}
			}
		},
		components:{
			"uniswiper":uniswiper
		},
		
		onLoad(value){
			this.id=value.id
			this.getBanners()
			this.getGoodsDetail()
			this.getGoodsDesc()
		},
		
		methods: {
			// 获取轮播图信息
			async getBanners(){
				let banners=await this.$myRequest({
					url:'/api/getthumimages/'+this.id
				})
				// this.banner=banners.data.message
			},
			
			// 获取详情
			async getGoodsDetail(){
				let goodsDetail=await this.$myRequest({
					url:'/api/goods/getinfo/'+this.id
				})
				this.goodsDetail=goodsDetail.data.message[0]
			},
			
			// 获取详情介绍
			async getGoodsDesc(){
				let goodsDesc=await this.$myRequest({
					url:'/api/goods/getdesc/'+this.id
				})
				this.goodsDesc=goodsDesc.data.message[0]
			}
		}
	}
</script>

<style lang="scss">
.top{
	padding: 15rpx;
	border-bottom:5px solid #eee;
	.new-price{
		margin-right: 20rpx;
		font-size: 40rpx;
		color: $font-color;
	}
	.old-price{
		font-size: 32rpx;
		color: #ccc;
		text-decoration: line-through;
	}
	.title{
		font-size: 36rpx;
		margin: 10rpx 0;
		line-height: 50rpx;
	}
}
.middle{
	line-height: 50rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom:5px solid #eee;
	padding: 15rpx;
	font-size: 32rpx;
}
.bottom{
	padding: 15rpx;
	.title{
		font-size: 36rpx;
		text-align: center;
		line-height: 60rpx;
		border-bottom:1px solid #eee;
	}
	.content{
		font-size: 28rpx;
	}
}
</style>
