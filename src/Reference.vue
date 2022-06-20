

<template>
<div id="recipes" class='page'>
	<div class='noprint'>
		<div id='print'>
			<a href="javascript:window.print()">Print</a>
			<div class='note'>1 per game</div>
		</div>
		<h1>Reference Sheet - <i>{{ game.name }}</i> - Version {{ game.version }}</h1>
		<p>Print this, on any old paper. You don't need to use the fancy cardstock.</p>

		<h3>Todo</h3>
		<ul>
			<li>Two column layout, at least.</li>
		</ul>

	</div>
	<recipes-box></recipes-box>

</div>
</template>

<script>
import Recipes from './recipes.vue'

export default {

	name: 'app',
	components: {
		"recipes-box": Recipes
	},
	data() {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game
		}
	},
	created: function () {
		document.title = 'Reference - ' + this.game.name + " - v" + this.game.version
	}
}
</script>

<style lang="scss">
</style>
