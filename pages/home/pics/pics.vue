<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="item in title" class="title" :key="item.id" @click="getInfo(item.id)" 
			:class="{active:select==item.id}">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view v-for="item in info" :key="item.id">
				<image src="../../../static/image/photo.jpg"></image>
				<!-- <image :src="item.img_url"></image> -->
				<text>{{item.title}}</text>
			</view>
			<text class="message" v-if="showMessage">------暂无数据------</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:[],
				select:0,
				info:[],
				showMessage:false
			}
		},
		onLoad(){
			this.getTitle()
			this.getInfo(14)
		},
		methods: {
			// 获取标题
			async getTitle(){
				let title=await this.$myRequest({
					url:"/api/getimgcategory"
				})
				this.title=title.data.message
			},
			// 获取信息
			async getInfo(id){
				this.select=id
				let info=await this.$myRequest({
					url:"/api/getimages/"+id
				})
				this.info=info.data.message
				// 判断有无数据
				if(this.info.length<=0){
					this.showMessage=true
				}else{
					this.showMessage=false
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			height: 100%;
			width: 220rpx;
			border-right: 1rpx solid #eee;
			.title{
				height: 120rpx;
				font-size: 30rpx;
				text-align: center;
				line-height:120rpx;
				color: #333;
				border-bottom: 1rpx solid #eee;
			}
		}
		.right{
			height: 100%;
			width: 530rpx;
			margin: 0 10rpx;
			image{
				margin: 10rpx 0;
				width: 530rpx;
				border-radius: 10rpx;
			}
			text{
				display: block;
				font-size: 30rpx;
				color: #333;
				line-height: 60rpx;
			}
			.message{
				font-size: 40rpx;
				text-align: center;
				line-height: 100rpx;
				color: #999999;
			}
		}
	}
	.active{
		background-color: $font-color;
		color: #fff!important;
	}


</style>
