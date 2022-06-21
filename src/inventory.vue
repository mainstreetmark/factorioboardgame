
<template>
	<div id="inventory">
		<div id='startinginventory'>
			<b>Starting Inventory:</b>
			<div
				class='rsrc'
				v-for=" rsrc in game.inventory.starting "
				:key="rsrc"
			>
				<img :src=" 'src/assets/graphics/' + asset.rsrc[rsrc].icon ">
			</div>
		</div>
		<h2>Inventory</h2>
		<p><i>Factories</i> can be created if your inventory contains the necessary resources. Everything else requires a factory.</p>
		<div id='boxboxbox'>
			<div id='boxbox'>
				<div
					class='box'
					v-for="n in 33 "
					:key="n"
				>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'inventory',
	data () {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game

		}
	},
}
</script>

<style lang="scss">
#startinginventory {
	width: 80%;
	float: right;
	text-align: right;
	.rsrc {
		float: right;
		padding: 5px;
	}

	// &:before {
	//     content: "Read this: ";
	// }
}
#inventory {
	display: table-cell;
	#boxboxbox {
		text-align: center;
	}
	#boxbox {
		width: 660px;
		margin: 0 auto;
	}
	.box {
		width: 50px;
		height: 50px;
		border: 5px solid black;
		float: left;
		background-color: white;
	}
}
</style>
