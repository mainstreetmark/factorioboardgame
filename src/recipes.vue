
<template>
	<div id="recipesbox">
		<h2>Recipes</h2>
		<table id='recipes'>
			<tr>
				<th>Knowing this&hellip;
				<th>&hellip;Put this&hellip;</th>
				<th>&hellip;on this&hellip;</th>
				<th>&hellip;to get this</th>
			</tr>
			<tr
				v-for="(count, item) in game.tokens"
				:key="item"
			>
				<td class='tech'>
					<div v-if="game.rsrc[item].req">
						<img
							class='tech'
							:src="'src/assets/graphics/' + asset.tech[game.rsrc[item].req].icon"
						>
						<!-- {{ asset.tech[game.rsrc[item].req].name }} -->
					</div>
				</td>
				<td class='recipe'>
					<span
						v-for="icn in game.rsrc[item].recipe"
						:key="icn"
					>
						<img :src="'src/assets/graphics/' + asset.rsrc[icn].icon">
					</span>
				</td>
				<td class='factory'>
					<img :src="'src/assets/graphics/' + asset.rsrc[asset.rsrc[item].factory].icon">
				</td>
				<td class='resource'>
					<img :src="'src/assets/graphics/' + asset.rsrc[item].icon"> {{ asset.rsrc[item].name }}
				</td>
			</tr>
		</table>

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
@media print {
	table#recipes {
		-moz-column-width: 100px;
		-webkit-column-width: 100px;
		column-width: 100px;
	}
}

table#recipes {
	width: 50%;
	th {
		white-space: nowrap;
	}
	tr:nth-child(even) {
		background-color: #ddd;
	}
	td {
		white-space: nowrap;
		border: none;
		//border-bottom: 1px solid #eee;
		padding: 0 10px;
		img {
			vertical-align: middle;
		}
	}
	td.factory {
		text-align: center;
	}
	td.resource {
		vertical-align: middle;
	}
	#tech {
	}
	img.tech {
		height: 40px;
	}
}
</style>
