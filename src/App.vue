<template>
	<div id="app">
		<router-view v-if='isRouterAlive'></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			isRouterAlive: true
		}
	},
	provide() {
		return {
			reload: this.reload
		}
	},
	methods: {
		reload() {
			this.isRouterAlive = false;
			this.$nextTick(()=> {
				this.isRouterAlive = true
			})
		}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}	
</style>
