<template>
	<view class="swiper">
		<swiper indicator-dots autoplay="true" circular>
			<swiper-item v-for="item in banner" :key="item.id">
				<image :src="item.img" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			banner:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style lang="scss">
.swiper{
	swiper{
		width: 750rpx;
		height: 420rpx;
	}
	image{
		width: 100%;
		height: 100%;
	}
}
</style>
