
<template>
	<div id="rocket">
		<div id='req'>
			<span
				v-for="icn in game.launch.gun"
				:key="icn"
			>
				<img
					class='tokenhole'
					:src="'src/assets/graphics/' + asset.rsrc[icn].icon"
				>
			</span>
			<br />
			<!-- <i>Place tokens here for increased defense</i> -->
		</div>
		<div id='launchbox'>
			<img
				class='lighten'
				id='door1'
				src='src/assets/graphics/entity/rocket-silo/04-05-doors/04-door-back.png'
			>
			<img
				class='lighten'
				id='door2'
				src='src/assets/graphics/entity/rocket-silo/04-05-doors/05-door-front.png'
			>
			<img
				class='lighten'
				id='base'
				src='src/assets/graphics/entity/rocket-silo/06-silo-base/06-silo-base-day.png'
			>
		</div>
		<div id='req'>
			<span
				v-for="icn in game.launch.rocket"
				:key="icn"
			>
				<img
					class='tokenhole'
					:src="'src/assets/graphics/' + asset.rsrc[icn].icon"
				>
			</span>
			<br />
			<!-- <i>Place tokens here first to win the game</i> -->
		</div>

	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game

		}
	},
}
</script>

<style lang="scss">
#rocket {
	text-align: center;
	//    background-image: url("./assets/graphics/terrain/concrete/hr-concrete.png");
	#launchbox {
		position: relative;
		height: 400px;
		width: 370px;
		display: inline-block;
		#door1 {
			position: absolute;
			left: 70px;
			top: 194px;
		}
		#door2 {
			position: absolute;
			top: 207px;
			left: 70px;
		}
		#base {
			position: absolute;
			left: 0;
		}
	}

	#req {
		text-align: center;

		img {
		}
	}
}
</style>
