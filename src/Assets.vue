<template>
	<div id="assets">
		<div class="noprint">
			<div id="config">
				<b>Game Config File:
					<select v-model="config">
						<option
							v-for="config in configs"
							v-bind:value="config.value"
							v-bind:key="config.value"
						>
							{{ config.text }}
						</option>
					</select>
				</b>
				<table id="details">
					<tr>
						<th>Name:</th>
						<td>{{ game.name }}</td>
					</tr>
					<tr>
						<th>Author:</th>
						<td>{{ game.author }}</td>
					</tr>
					<tr>
						<th>Game Version:</th>
						<td>
							{{ game.version }} |
							<a :href="'src/assets/json/game/' + config + '.json'">json</a>
						</td>
					</tr>
					<tr>
						<th>Asset Pack Version:</th>
						<td>
							{{ asset.version }} |
							<a href="src/assets/json/assets/asset.0.16.json">json</a>
						</td>
					</tr>
					<tr>
						<th>Factorio Base Version:</th>
						<td>{{ asset.factorio_version }}</td>
					</tr>
					<tr>
						<th>Description:</th>
						<td>{{ game.description }}</td>
					</tr>
				</table>
			</div>

			<div id="note">
				Please Note, these graphics, artwork and the intellectual property are
				wholly owned by
				<a href="http://www.factorio.com">the Factorio dev team</a>. These
				graphics have been used with their permission.
			</div>
			<div id="assetlinks">
				<br />
				<router-link :to="{ path: '/assets/' + config + '/launch' }">Launch</router-link>
				&bull;
				<router-link :to="{ path: '/assets/' + config + '/ref' }">
					Reference</router-link>
				&bull;
				<router-link :to="{ path: '/assets/' + config + '/tokens' }">Tokens</router-link>
				&bull;
				<router-link :to="{ path: '/assets/' + config + '/factories' }">Factories</router-link>
				&bull;
				<router-link :to="{ path: '/assets/' + config + '/deck' }">Deck</router-link>
			</div>
		</div>
		<router-view> sss </router-view>
	</div>
</template>

<script>
import Asset from "./assets/json/assets/asset.0.16.json";
import Game from "./assets/json/game/alpha.json";

export default {
	name: "app",
	data () {
		return {
			config: "alpha",
			configs: [
				{
					text: "alpha",
					value: "alpha",
				},
			],
			asset: Asset,
			game: Game,
		};
	},
	created: function () {
		document.title = "Assets";
	},
};
</script>

<style lang="scss">
#note {
	width: 703px;
	margin: 20px auto;
	text-align: justify;
	border: 3px dashed #555;
	padding: 10px;
}
#config {
	text-align: center;
	select {
		font-size: 20px;
	}
	table {
		margin-left: auto;
		margin-right: auto;
		width: 700px;
		padding: 10px;
		background-color: #ddd;
		td,
		th {
			text-align: left;
			vertical-align: top;
		}
	}
}
#assetlinks {
	font-size: 20pt;
	text-align: center;

	a {
		padding: 0 13px;
	}
	a.active {
		background-color: white;
	}
}
#print {
	text-align: center;
	float: right;

	a {
		border: 5px outset #42b983;
		border-radius: 10px;
		padding: 5px 10px;
		background-color: #42b983;
		color: white;
		text-decoration: none;
		font-weight: bold;
		font-size: 16pt;
	}
	.note {
		margin-top: 10px;
		color: #999;
	}
}
.page {
	width: 703px;
	margin: 0 auto;
	background-color: white;
	border: 10px solid white;
}
img.lighten {
	-webkit-filter: brightness(120%);
}

h1 {
	border-bottom: none;
}
</style>
