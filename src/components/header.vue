<template>
	<div class="header-content">
		<div class="top-content" >
			<p style="color: #FFFFFF;">...</p>
		</div>
		<div class="middle-content">
			<div>
				<img class="title-image" src="../assets/logo.png"/>
			</div>
			<div class=""></div>
		</div>
		<div class="bottom-content">
			
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.header-content{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		height: 150px;
		line-height: 50px;
		background-color: #EA5504;
		border-bottom: 3px solid #FF0000;
	}
	.top-content{
		
	}
	.middle-content{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
	}
	.bottom-content{
		
	}
	.title-image{
		height: 50px;
		width: 50px;
	}
/* 	.topheader{
		display: flex;
		background-color: #006600;
		height: 300px;
	} */
</style>
