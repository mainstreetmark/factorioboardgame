

<template>
<div id="assets">
	<div class='noprint'>
		<h1 class='center blink'> &uarr; &uarr; Print All These  &uarr; &uarr;</h1> These are the asset pages.
		<ul>
			<li>Print on some nice paper, like 110lb.</li>
			<li>If there's interest, one day these will be generated PDFs. Right now, it's hacky CSS, with printer tricks.</li>
			<li>Approximate Print Counts:
				<ul>
					<li>Launch Sheet: 1 per player</li>
					<li>Reference Sheet: 1 per game</li>
					<li>Token Sheets: 1 set of pages at least</li>
					<li>Factory Sheets: 1 set of pages at least</li>
					<li>Deck Sheets: 2 or 3</li>
				</ul>
			</li>
		</ul>

		<div id='stats'>
			<h1>Stats</h1>
			<p>This is a list of tokens and factories that might be required, PER PLAYER, based on some configuration crap in the <i>{{ config }}</i> game.
				<h2>Resources</h2>
				<p>This list is generated recursively, combining similar resources as it moves up the tree.</p>
				<table>
					<tr v-for="(tokens,rsrc) in CalcTechTokens()">
						<th>
							<img :src="'src/assets/graphics/' + asset.rsrc[rsrc].icon">&times;{{ rsrc_list[rsrc] }}
							<!-- {{ asset.rsrc[rsrc].name }} -->
						</th>
						<td>
							<span v-for="(count,token) in tokens">
						 <img :src="'src/assets/graphics/' + asset.rsrc[token].icon">&times;{{ count }}
						</span>
						</td>
					</tr>
					<tr>
						<th>Sum</th>
						<td>
							<span v-for="(count,token) in SumTokens()">
								<img :src="'src/assets/graphics/' + asset.rsrc[token].icon">&times;{{ count }}
							</span>
						</td>
					</tr>
				</table>

				<h2>Factories</h2>
				<p>So, these numbers do not reflect productivity bonuses when advancing through the tech tree. Who knows if this is accurate.</p>
				<table>
					<tr v-for="(tokens,rsrc) in CalcFactories()">
						<th>
							<img :src="'src/assets/graphics/' + asset.rsrc[rsrc].icon"> &times;{{ rsrc_list[rsrc] }}
							<!-- {{ asset.rsrc[rsrc].name }} -->
						</th>
						<td>
							<span v-for="(count,token) in tokens">
						 <img :src="'src/assets/graphics/' + asset.rsrc[token].icon">&times;{{ count }}
						</span>
						</td>
					</tr>
					<tr>
						<th>Sum</th>
						<td>
							<span v-for="(count,token) in SumFactories()">
								<img :src="'src/assets/graphics/' + asset.rsrc[token].icon">&times;{{ count }}
							</span>
						</td>
					</tr>
				</table>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		// Use the json file to figure out what it takes to win
		rsrc_list() {
			console.log("rsrclist");
			var out = {},
				rsrc = "";
			for (var tech in this.game.tech) {
				for (var i in this.game.tech[tech].science) {
					var rsrc = this.game.tech[tech].science[i];
					if (out[rsrc])
						out[rsrc]++;
					else {
						out[rsrc] = 1;
					}
				}
			}

			for (var part in this.game.launch) {
				for (var i in this.game.launch[part]) {
					var rsrc = this.game.launch[part][i];
					if (out[rsrc])
						out[rsrc]++;
					else {
						out[rsrc] = 1;
					}
				}
			}

			return out;
		},

	},
	methods: {
		CalcTokens(rsrc, list) {
			const out = list || {};

			const recipe = this.game.rsrc[rsrc].recipe;
			if (recipe) {
				for (const i in recipe) {
					const r = recipe[i];
					const rsrc2 = this.CalcTokens(r);
					for (const r2 in rsrc2) {
						if (out[r2])
							out[r2] += rsrc2[r2];
						else {
							out[r2] = rsrc2[r2];
						}
					}
				}

			}

			if (out[rsrc])
				out[rsrc] += 1;
			else
				out[rsrc] = 1;
			return out;

		},
		// Using the list of winning tokens, what are the resources.
		CalcTechTokens() {
			var out = {};
			var req = this.rsrc_list;
			for (var rsrc in req) {
				var list = {};
				var tokens = this.CalcTokens(rsrc, list);
				out[rsrc] = tokens;
			}

			for (var o in out) {
				for (rsrc in out[o])
					out[o][rsrc] *= req[o]
			}
			return out;
		},
		CalcFactories() {
			var tokens = this.CalcTechTokens();
			var out = {};
			for (var rsrc in tokens) {
				var counts = {};
				var token = tokens[rsrc];
				for (var t in token) {
					var factory = this.asset.rsrc[t].factory;
					if (counts[factory])
						counts[factory] += token[t];
					else {
						counts[factory] = token[t];
					}
				}
				out[rsrc] = counts;
			}

			return out;
		},
		SumTokens() {
			var tokens = this.CalcTechTokens();
			var out = {};
			for (var rsrc in tokens) {
				for (var rsrc2 in tokens[rsrc]) {
					//console.log(rsrc, rsrc2, tokens[rsrc][rsrc2]);
					if (out[rsrc2])
						out[rsrc2] += tokens[rsrc][rsrc2];
					else
						out[rsrc2] = tokens[rsrc][rsrc2];
				}
			}
			return out;
		},
		SumFactories() {
			var tokens = this.CalcFactories();
			//console.log(tokens);
			var out = {};
			for (var rsrc in tokens) {
				for (var rsrc2 in tokens[rsrc]) {
					//console.log(rsrc, rsrc2, tokens[rsrc][rsrc2]);
					if (out[rsrc2])
						out[rsrc2] += tokens[rsrc][rsrc2];
					else
						out[rsrc2] = tokens[rsrc][rsrc2];
				}
			}
			//console.log(out);
			return out;
		}
	},
	data() {
		return {
			config: "alpha",
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game
		}
	},
	created: function () {
		document.title = 'Assets'
	}
}
</script>

<style lang="scss">
h1.center {
    text-align: center;
}
#stats {
    tr:last-child {
        td,
        th {
            border-top: 2px solid black;
        }
    }
    td,
    th {
        padding: 5px;
    }
    th {
        text-align: left;
        background-color: #ddd;
        padding-right: 20px;
        vertical-align: text-top;
        white-space: nowrap;
    }
    img {
        vertical-align: middle;
    }
}
.blink {
    -webkit-animation: 1s linear infinite condemned_blink_effect; // for android
    animation: 1s linear infinite condemned_blink_effect;
}
@-webkit-keyframes condemned_blink_effect {
    // for android
    0% {
        visibility: hidden;
    }
    40% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
}
@keyframes condemned_blink_effect {
    0% {
        visibility: hidden;
    }
    40% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
}
</style>
