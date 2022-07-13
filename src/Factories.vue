
<template>
	<div
		id="factories"
		class='page'
	>
		<div class='noprint'>
			<div id='print'>
				<a href="javascript:window.print()">Print</a>
				<div class='note'>At least 1</div>
			</div>
			<h1>Factory Sheet - <i>{{ game.name }}</i> - Version {{ game.version }}</h1>
			<div>
				<ol>
					<li>Fold these sheets in half vertically, along the center black line. It helps to score it first. (Since printers aren't perfect, the corners of the sheet may not line up perfectly).</li>
					<li>Glue each half together and set it under a book or something.</li>
					<li> Once dry, begin cutting them all out along the dotted lines, horizontally, <i>leaving a margin at the end, so each strip is still connected</i>.</li>
					<li>Cut them vertically. Being still attached to the sheet makes this easier</li>
				</ol>

				* note the CSS print trick used on this page requires Safari or Chrome (or webkit)
			</div>
		</div>
		<div
			class='looper'
			v-for="(count, factory) in game.factories"
			:key="`f${factory}`"
		>
			<div
				class='tokenrow'
				v-for="c in count"
				:style="GetRowStyle(factory)"
				:key="`r${c}`"
			>
				<div
					class='factory '
					v-for="d in GetPerrow(factory)"
					:key="`d${d}`"
				>
					<div
						class='box'
						:style="GetStyle(factory, true)"
					></div>
				</div>
				<div
					class='factory'
					v-for="d in GetPerrow(factory)"
					:key="`a${d}`"
				>
					<div
						class='box'
						:style="GetStyle(factory, false)"
					>
						{{ asset.entities[factory].name }}
						<br />
						<span
							class='token'
							v-for="(token,index) in game.entities[factory].recipe"
							:key="index"
						>
							<img :src="require('@/assets/graphics/' + asset.rsrc[token].icon)">
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: 'app',
	methods: {
		GetRowStyle (factory) {
			var css = "";
			//css = "transform: scale(" + this.asset.entities[factory].scale + ");transform-origin: 0 0;"
			//css += "border: 1px solid red;"
			css += "width: " + (2 + (this.asset.entities[factory].w * this.asset.entities[factory].scale)) * this.GetPerrow(factory) * 2 + "px;"
			return css;

		},
		GetPerrow (factory) {
			const pagewidth = 700; //700;
			var count = Math.floor(pagewidth / (this.asset.entities[factory].w * this.asset.entities[factory].scale))
			return Math.floor(count / 2);
		},
		GetFactory (factory) {
			var icon = require('@/assets/graphics/' + this.asset.entities[factory].icon);
			return icon;
		},
		GetStyle (factory, front) {
			var entity = this.asset.entities[factory];
			var scale = entity.scale;
			//scale = 1;
			var W = entity.w;
			var H = entity.h;
			var w = W * scale;
			var h = H * scale;
			var l = Math.floor(Math.random() * entity.cols) * W
			var t = Math.floor(Math.random() * entity.rows) * H
			var r = l + entity.w
			var b = t + entity.h
			var url = this.GetFactory(factory);

			var css = "";
			// css += "width: " + entity.w + "px; height:" + entity.h + "px; clip: rect(" + t + "px " + r + "px " + b + "px " + l + "px);";
			// css += "position: relative; left:-" + l + "px; top:-" + t + "px; width:" + entity.w + "px; height: " + entity.h + "px";
			if (front) {
				css += "width: " + W + "px; height: " + H + "px; "
				//css += "border: 1px solid blue;";
				css += "background: url('" + url + "');";

				css += "zoom: " + entity.scale + ";";
				//css += "transform: scale(" + this.asset.entities[factory].scale + ");transform-origin: 0 0;"
				//css += "background-size: 20% 20%";
				css += "background-position: -" + l + "px -" + t + "px";
			} else {
				css = "width: " + w + "px; height: " + h + "px; "
				css += "";
			}
			return css;
		}
	},
	data () {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game
		}
	},
	created: function () {
		document.title = 'Factories - ' + this.game.name + " - v" + this.game.version
	}
}
</script>

<style lang="scss">
#factories {
	img {
		//border: 1px dashed blue;
	}
	.looper {
		// background-color: #eff;
		//  border: 1px solid blue;
	}
	.tokenrow {
		background-color: white;
		display: flex;
		page-break-inside: avoid;
		text-align: center;
		margin: 0 auto;
		.factory {
			border: 1px dashed #bbb;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			display: table;

			&:nth-child(2):nth-last-child(2),
			&:nth-child(2):nth-last-child(3),
			&:nth-child(3):nth-last-child(3),
			&:nth-child(3):nth-last-child(4),
			&:nth-child(4):nth-last-child(4),
			&:nth-child(4):nth-last-child(5),
			&:nth-child(5):nth-last-child(5) {
				border-right: 1px solid black;
			}
			.box {
				display: table-cell;
				vertical-align: middle;
				-webkit-print-color-adjust: exact;
				//  display: inline-block;
				overflow: hidden;
				// img {
				//     position: relative;
				//     display: block;
				//     margin: auto;
				// }
			}
		}
	}
}
</style>
