

<template>
	<div id="home">
		<div id='welcome'>
			<h2>Welcome to the unofficial, unfinished Factorio Board Game.</h2>
			<p>This is a board game, derived from the popular computer game <a href='https://www.factorio.com/'>Factorio</a>. You print out all the assets, find a IRL friend and a pretty big table. Then you take turns either drawing resource cards, or building factories,
				all in a race to launch the first rocket. Oh, the biters are in this game as well.</p>
			<ul>
				<li>Read the <a href='#/instructions'>Instructions</a>.</li>
				<li>Print out the <a href='#/assets'>Assets</a>.</li>
			</ul>
		</div>

		<div id='blog'>
			<div
				class='entry'
				v-for="blog in blogs"
				:key="blog.title"
			>
				<div class='date'>{{ blog.date }}</div>
				<h3>{{ blog.title }}</h3>
				<div class='description'>{{ blog.description }}</div>
				<ul>
					<li
						v-for="li in blog.notes"
						:key="li"
					>
						<!-- <vue-markdown> -->
						{{ li }}
						<!-- </vue-markdown> -->
					</li>
				</ul>
				<div class='images'>
					<div
						class='imgbox'
						v-for="img in blog.img"
						:key="img"
					>
						<a :href="'src/assets/img/' + img.img">
							<img :src="'src/assets/img/' + img.img">
						</a>
						<div class='caption'>
							{{ img.caption }}
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
var VueMarkdown = require('vue-markdown');

export default {
	name: 'app',
	// components: {
	// 	'vue-markdown': VueMarkdown
	// },
	data () {
		return {
			blogs: [{
				"title": "Permission granted",
				"date": "Feb 7, 2018",
				"description": "The Factorio team responded to my request to use their graphics.  They granted permission, so long as I'm not making any money."
			},
			{
				"title": "Posted to reddit",
				"date": "Feb 2, 2018",
				"description": "I posted this to reddit",
				"notes": [
					"The Deck now uses patch graphics for ore, instead of mined grapohics (u/konstantinua00)"
				]
			},
			{
				"title": "Some automated calculations",
				"date": "Feb 2, 2018",
				"description": "Up until now, I was guessing on the token sheet as to how many tokens are required.  So I made a little recursive routine that looks through the tech tree and works out the maximum number of tokens required to fill out the Launch card.  As I write this, it claims I'll need 84 furnaces per player.  But, this algorithm doesn't (yet) know about production bonuses.",
				"notes": [
					"The Assets page now shows some calculated resource requirements",
				]
			},
			{
				"title": "A proper deck",
				"date": "Feb 1, 2018",
				"description": "The deck of cards was kind of neat, but keeping a reference sheet indicating what each card does is kind of dumb.  So, why not just print out some cards.  So, the JSON now supports resource cards, along with settings for chances.  There's even a bug card now.",
				"notes": [
					"Created the Deck",
					"Added some calculated stats to the Asset page, trying to predict how many assets are needed",
					"Added a selector for which game configuration file you wish to use (which only has 1)"
				]
			},
			{
				"title": "Bugs and Guns and Guns and Bugs.. Harooo!  harooo!",
				"date": "Jan 29, 2018",
				"description": "Playtests show that each player just does the same thing, one after another, which made it less of a game, and more of a task.  So, the face cards become bugs.  When you draw a bug, you get to remove another player's factory.  Or maybe one of your factories.  But, if you build a gun, it helps stop bugs.",
				"notes": [
					"Added spaces for guns to the Launch sheet",
					"Added guns to the assets list",
					"Created a toy papercarft factory for fun"
				],
				"img": [{
					"img": "playtest2.jpg",
					"caption": "The earliest playtest picture"
				},
				{
					"img": "am1.jpg",
					"caption": "A papercraft AM2"
				}
				]
			},
			{
				"title": "Re-configure",
				"date": "Jan 17, 2018",
				"description": "I thought the tech tree was already watered down from the real game, but i've reduced it all the way down to just 5 items.  15 was far too much.  It also became clear that there needed to be some sort of inherent 'productivity', so the tech tree has an option to indicate when all factories generate a second resource token.  Otherwise, tooooo many factories.",
				"notes": [
					"Split the JSON file into a static lists of assets, and a game file which holds the game configuration, so it can be tweaked easier",
					"Reduced the tech tree to like 5 items",
					"Added a bonus to the tech tree to generate an additional resource token from each factory",
					"Factories are now folded in half, so they can have a back, with requirements",
					"Ran out of cyan laser toner.  $90 bucks!"
				]
			},
			{
				"title": "Playtest!",
				"date": "Jan 16, 2018",
				"description": "I playtested this with my 6 year old.  We decided to use a deck of cards to simulate resources, but it didn't work super well.  Also, the tech tree is way to large.  It'll take a hundred factories to launch a rocket.  1 hour in, and haven't even gotten to green science.  Gotta tone this thing down.",
				"notes": [
					"Playing cards simulates finding resources.  Black cards are iron ore, etc.."
				]
			},
			{
				"title": "More factories",
				"date": "Jan 15, 2018",
				"description": "There are more factories than just the Assembling Machine.  However, there is no good graphic for the refinery, due to the hi-rez version being huge, and the low-rez version having an integrated shadow.  Some CSS trickery is required",
				"notes": [
					"Added refinery, furnace, pumpjack and drill",
					"Added lots of CSS to make things print better"
				]
			},
			{
				"title": "Un-hardcoded the configuration",
				"date": "Jan 14, 2018",
				"description": "Up to now, the list of resources and all that was hardcoded.  It now lives in it's own, separate JSON file.  This means that one day, other contributors might change or expand the game.  The system re-generates all the sheets based on this JSON file",
				"notes": [
					"created 'alpha.json', and include it at the top of the Assets page"
				]
			},
			{
				"title": "Reorganization",
				"date": "Jan 13, 2018",
				"notes": [
					"Moved the recipe sheet off of the Launch sheet into it's own thing",
					"Created a tech tree, and put it next to the launch box",
					"Added a 'inventory' spot into the extra Launch sheet space"

				]
			},
			{
				"title": "Resource Tokens",
				"date": "Jan 12, 2018",
				"description": "Rewrote all the sheets in HTML/CSS/Vue and applied a bunch of stupid print CSS rules to make them print out on my particular printer.  The graphics are linked in directly from the game, so no further editing was done on anything.",
				"notes": [
					"Recreated the launch sheet in HTML/CSS, for easier iteration",
					"Created the tokens and assembling machine sheets",
					"Gave up on belts and inserters, saving thousands of tedious hours of cutting out belts and arranging them on the board, just to have the cat mess them all up."
				]
			},

			{
				"title": "Version 0.1",
				"date": "Jan 5, 2018",
				"description": "A launch sheet, a tech tree and the assembling machine card.  At this point, it became clear that Pixelmator was not the tool to manage this development.  I did not want to make a pixelmator document filled with a thousand resource tokens, only to have to change the counts later on.",
				"notes": [
					"created a launch sheet",
					"copied the graphics dir out of v0.16, totally without permission."
				],
				"img": [{
					"img": "launch.0.1.png",
					"caption": "A Launch sheet created in Pixelmator"
				},
				{
					"img": "techtree.0.1.png",
					"caption": "The simplified Tech Tree sheet, also created in Pixelmator"
				},
				{
					"img": "assembly.0.1.png",
					"caption": "The assembling machine sheet, taken from the game's spritesheet, and edited a bit to make a back."
				}
				]
			},
			{
				"title": "Version 0.0.0.0.0.1",
				"date": "Jan 4, 2018",
				"description": "Hello world! Too many new years day bloody marys.  3 day hangover.",
				"notes": []
			}
			]
		}
	},
	created: function () {
		document.title = 'Factorio - The Board Game'
	}
}
</script>

<style lang="scss">
#welcome {
	background-color: #ccc;
	padding: 20px;
}
#todo {
	width: 250px;
	float: right;
	background-color: #ddd;
	margin: 10px 0 10px 10px;
	padding: 10px;
}
#blog {
	h3 {
		border-top: 2px solid #555;
	}
	.date {
		float: right;
		padding-top: 5px;
	}
	.images {
		display: grid;
		grid-template-columns: repeat(auto-fill, 150px);
		grid-gap: 5px;
		justify-content: space-between;
		.imgbox {
			text-align: center;
			background-color: #ddd;
			padding: 15px;
			margin: 5px;
			//border: 1px solid black;
			img {
				width: 100px;
			}
		}
	}
	.images:after {
		content: "";
		flex: auto;
	}
}
</style>
