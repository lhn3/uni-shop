<template>
	<view class="contact">
		<image class="img" src="../../../static/image/mj.jpg"></image>
		<view class="info">
			<text @click="call">联系电话：13559476203(点击拨打)</text>
			<text>地址：福建省福州市闽侯县上街镇闽江学院</text>
		</view>
		<!-- 119.175088,26.072 -->
		<map class="map" :longitude="longitude" :latitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:119.175088,
				latitude:26.072,
				markers:[
					{
						longitude:119.175088,
						latitude:26.072,
						iconPath:'../../static/image/wz.png'
					}
				]
			}
		},
		methods: {
			call(){
				uni.makePhoneCall({
					phoneNumber:"13559476203"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		width: 100%;
		.img{
			width: 750rpx;
			height: 350rpx;
		}
		.info{
			margin: 15rpx;	
			font-size: 36rpx;
			text{
				color: #4F4F4F;
				display: block;
				margin-bottom: 15rpx;
				line-height: 60rpx;
			}
		}
		map{
			width: 750rpx;
			height: 750rpx;
		}
	}

</style>
