
<template>
<div id="tokens" class='page'>
	<div class='noprint'>
		<div id='print'>
			<a href="javascript:window.print()">Print</a>
			<div class='note'>At least 1</div>
		</div>
		<h1>Token Sheet - <i>{{ game.name }}</i> - Version {{ game.version }}</h1>

		<div>
			<ol>
				<li>Fold these sheets in half vertically, along the center black line. It helps to score it first. (Since printers aren't perfect, the corners of the sheet may not line up perfectly).</li>
				<li>Glue each half together and set it under a book or something. Make sure the glue is evenly spread, as these tokens get cut up small. I've had success with wood glue which dries a bit more rigidly.</li>
				<li> Once dry, begin cutting them all out along the dotted lines, horizontally, <i>leaving a margin at the end, so each strip is still connected</i>.</li>
				<li>Cut them vertically. Being still attached to the sheet makes this easier</li>
				<li> If everything lines up, each token will be double-sided, which is far less frustrating, during gameplay. Trust me, no one wants to spend half an hour turning over all the upside down tokens.</li>
			</ol>
			<h3>Todo</h3>
			<ul>
				<li>Use "math" to work out the right ratios, so there's the appropriate amount of resources.</li>
				<li>Combine low-use resources on a single line. No need for 10 Satellites, since only 1 is required per person.</li>
			</ul>

		</div>
	</div>
	<div v-for="(count, token) in game.tokens">
		<div class='tokenrow' v-for="c in count">
			<div class='token' v-for="d in 20">
				<img :src="'src/assets/graphics/' + asset.rsrc[token].icon">
			</div>
		</div>
	</div>
</div>

</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			asset: this.$parent.$data.asset,
			game: this.$parent.$data.game
		}
	},
	created: function () {
		document.title = 'Tokens - ' + this.game.name + " - v" + this.game.version
	}
}
</script>

<style lang="scss">
#tokens {
    .tokenrow {
        display: flex;
        page-break-inside: avoid;
        /* or 'auto' */
        .token {
            width: 30px;
            height: 30px;
            border: 1px dashed #ddd;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1.5px;
            img {
                display: block;
            }
        }
        .token:nth-child(10) {
            border-right: 1px solid black;
        }
    }
}
</style>
