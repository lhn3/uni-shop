<template>
	<view>
		id为{{id}}的详情页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0
			}
		},
		onLoad(s){
			this.id=s.id
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
