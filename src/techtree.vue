<template>
	<div id="techtree">
		<table>
			<tr v-for="(tech, key) in game.tech">
				<td class="center">
					<img
						class="techicon"
						:src="'src/assets/graphics/' + asset.tech[key].icon"
					/>
				</td>
				<!-- <td>{{ asset.tech[key].name }}</td> -->
				<td>
					<span v-for="sp in game.tech[key].science">
						<img
							class="tokenhole"
							:src="'src/assets/graphics/' + asset.rsrc[sp].icon"
						/>
					</span>
				</td>
				<td>
					<img
						class="assy"
						v-for="count in game.tech[key].production"
						:src="'src/assets/graphics/' + asset.rsrc['asy'].icon"
					/>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "app",
	data () {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game,
		};
	},
};
</script>

<style lang="scss">
#techtree {
	height: 100%;
	table {
		width: 100%;
		height: 100%;
	}
	.assy {
		height: 16px;
		display: block;
	}
	.techicon {
		height: 50px;
	}
	td {
		white-space: nowrap;
	}
}
</style>
