
<template>
	<div
		id="deck"
		class='page'
	>
		<div class='noprint'>
			<div id='print'>
				<a href="javascript:window.print()">Print</a>
				<div class='note'>2 or 3 sheets</div>
			</div>
			<h1>Deck Sheet - <i>{{ game.name }}</i> - Version {{ game.version }}</h1>

			<div>
				<ol>
					<li>Print these cards on cardstock!</li>
					<li><a
							href="javascript:void(0);"
							v-on:click="$forceUpdate()"
						>Refresh</a></li>
					<li>goto(1)</li>
				</ol>
				<h3>Todo</h3>
				<ul>
					<li>Should deck cards have backs?</li>
					<li>Maybe some text?</li>
				</ul>

			</div>
		</div>
		<div class='deck'>
			<div
				class='card'
				v-for="c in 35"
				:key="c"
			>
				<div
					:data-id='c'
					v-for="rsrc in GetCard()"
					:key="rsrc"
					v-html="GetCardGfx(rsrc)"
				>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: 'app',
	data () {

		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game,
			cards: this.GetCards()
		}
	},
	methods: {
		// TODO what is this shit!  should all these asset icons just be Vue components?!
		GetCardGfx (rsrc) {
			var html = "";
			switch (rsrc) {
				case 'bug':
				case 'cru':
					html += "<img class='rsrc' ";
					html += "style='left:" + (10 + Math.floor(Math.random() * 4) * 30) + "px; ";
					html += "top: " + (5 + Math.floor(Math.random() * 4) * 30) + "px' ";
					html += "src='src/assets/graphics/" + this.asset.rsrc[rsrc].icon + "'>";
					break;
				case 'cpo':
				case 'iro':
					var map = {
						'cpo': 'copo',
						'iro': 'irno'
					}
					console.log(rsrc, map[rsrc]);
					var entity = this.asset.entities[map[rsrc]];
					html += "<div class='rsrc' ";
					html += "style='"
					html += "transform:scale(0.5);transform-origin: 0 0;";
					html += "left:" + (10 + Math.floor(Math.random() * 4) * 30) + "px; ";
					html += "top: " + (5 + Math.floor(Math.random() * 4) * 30) + "px; ";
					html += "width:" + entity.w + "px; height: " + entity.h + "px; ";
					html += "background: url(\"src/assets/graphics/" + entity.icon + "\"); ";
					html += "background-position: -" + (entity.w * (Math.floor(Math.random() * entity.cols))) + "px -" + (entity.h * (Math.floor(Math.random() * entity.rows / 3))) + "px";
					html += "'></div>";
					console.log(html);
				default:
			}
			return html;
		},
		GetRsrcCount (chances) {
			var rsrc = [];
			for (var count in chances) {
				for (var i = 0; i < chances[count]; i += 0.01) {
					rsrc.push(count - 2 + 3)
				}
			}
			var out = rsrc[Math.floor(Math.random() * rsrc.length)];
			//console.log(out, rsrc, chances);
			return out;
		},
		/**
		 * TODO: This is the dummest way to generate cards.  Populate a huge array?  Surely
		 * there's some nice math trick you can do.
		 */
		GetCards () {
			var card = [];
			var cards = [];
			var deck = this.$parent.$data.game.deck;
			for (var rsrc in deck) {
				for (var i = 0; i < deck[rsrc].deck_chance; i += 0.01) {
					var count = this.GetRsrcCount(deck[rsrc].card_chance);
					card = [];
					for (var j = 0; j < count; j++)
						card.push(rsrc);
					cards.push(card);
				}
			}
			console.log(cards);
			return cards;
		},
		GetCard () {
			return this.cards[Math.floor(Math.random() * this.cards.length)]
		}
	},
	created: function () {
		document.title = 'Tokens - ' + this.game.name + " - v" + this.game.version
	}
}
</script>

<style lang="scss">
#deck {
	.deck {
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
		.card {
			// width: 500px;
			position: relative;
			height: 110px;
			padding: 10px;
			border: 1px dashed #999 !important;
			flex: 1 1 15%;
			border: 1px solid black;
			//text-align: center;
			display: table-cell;
			vertical-align: middle;
			.rsrc {
				position: absolute;
				-webkit-print-color-adjust: exact;
			}
		}
	}
}
</style>
