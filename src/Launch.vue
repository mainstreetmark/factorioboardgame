
<template>
<div id="launchbox" class='page'>
	<div class='noprint'>
		<div id='print'>
			<a href="javascript:window.print()">Print</a>
			<div class='note'>1 per player</div>
		</div>

		<h1>Launch Sheet - <i>{{ game.name }}</i> - Version {{ game.version }}</h1>
		<p>To win:</p>
		<ol>
			<li>Build factories to create science packs and rocket parts</li>
			<li>Place science packs on the Technology Tree to unlock resource tokens</li>
			<li>Place all the rocket parts on the silo to launch (and win)</li>
			<li>Place gun resources to help protect against bugs. (Spend resources on defence, or race to the rocket?)</li>
		</ol>

		<h3>Todo</h3>
		<ul>
			<li>Figure out how to display assembly machine production bonuses. AM icons don't convey it properly.</li>
		</ul>

	</div>

	<!-- <div id='sheet' class='flexbox'>
		<div class='panel flexcell'>
			<recipe-box></recipe-box>
		</div>

		<div class=' flexcell'>
			<div class='panel' id='launch'>
				<rocket-box></rocket-box>
			</div>
			<div class='panel' id='techtree'>
				<tech-tree-box></tech-tree-box>
			</div>
		</div>

	</div> -->

	<div id='sheet' class='flexbox'>
		<div class='panel flexcell flex1'>
			<tech-tree-box></tech-tree-box>
		</div>

		<div class='panel flexcell flex1'>
			<rocket-box></rocket-box>
		</div>

	</div>
	<div class='panel flexcell flex2'>
		<inventory-box></inventory-box>
	</div>

</div>
</template>

<script>
import RecipeBox from './recipes.vue'
import RocketBox from './rocket.vue'
import TechTreeBox from './techtree.vue'
import InventoryBox from './inventory.vue'

export default {
	name: 'app',
	components: {
		"recipe-box": RecipeBox,
		"rocket-box": RocketBox,
		"tech-tree-box": TechTreeBox,
		"inventory-box": InventoryBox
	},
	data() {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game
		}
	},
	created: function () {
		document.title = 'Launch - ' + this.game.name + " - v" + this.game.version
	}
}
</script>

<style lang="scss">
// @media print {
// #launchbox {
//     max-width: 11in;
//     height: 8.5in;
// }
//}
.flexbox {
    display: flex;
    .flexcell {
        // padding: 10px;
        //
        &.flex1 {
            flex-basis: 50%;
        }
        &.flex2 {
            flex-basis: 100%;
        }
    }
}
.panel {
    -webkit-print-color-adjust: exact;
    margin: 5px;
    background-color: #eee;
    padding: 10px;
}

.tokenhole {
    border: 4px solid #555;
    padding: 5px;
    margin: 5px;
    opacity: 0.4;
    border-radius: 5px;
    background-color: white;
    //  box-shadow: 2px 2px 5px #999;
    // filter: grayscale(100%);
}
.center {
    text-align: center;
}
</style>
