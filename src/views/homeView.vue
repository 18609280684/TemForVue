<template>
	<div>
		<Header></Header>
		<img class="logo" src="../assets/logo.png"></img>
	</div>	
</template>

<script>
import Header from "../components/header";
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			Header
		}
	}
</script>
 
<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
