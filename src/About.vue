<template>
	<div id="assets">
		<h1>What is this thing?</h1>
		<p>
			Have you played <a href="https://www.factorio.com/">Factorio</a>? It's a
			fairly complicated game of logistics which has tickled both my programmer
			brain, and my love of SimCity style games. The initial goal is to launch a
			rocket, which took perhaps 80 hours of gameplay to achieve. And that was
			just the first factory.
		</p>

		<p>However, I have a family, and stuff...</p>

		<p>
			Since we have decided to spend way less time in front of the screen this
			year, we instituted some board game nights. I've been playing lots of
			<i>Sorry!</i> and <i>Game of Life</i>, both of which I hate.
		</p>

		<p>
			So how do I combine the resolution of increasing board-game time, and
			decreasing screen time? Combine the two (by spending a crapload of
			additional screen time developing this thing).
		</p>

		<h1>Is it free?</h1>

		<p>
			Yeah, I guess so. This is just something I'm doing for fun, and giving
			away. Maybe it'll interest people, maybe it won't. All you have to do is
			print the gamepiece assets on your printer, and off you go.
		</p>
		<p>
			I have asked the Factorio team for permission to use the unaltered
			graphics for this project, and they granted permission, so long as I make
			it clear that the graphics are owned by them.
		</p>

		<h1>Is it customizable?</h1>

		<p>
			Sorta. The definition of everything is stored in a JSON file, with the
			idea being that one day, people can edit the balance, and this site will
			generate new assets, automatically. The first pass I did took 310 paper
			factories to win, which is ridiculous. So, there will be future
			iterations, and public gameplay will be required to figure those out.
		</p>

		<h1>Where did the graphics come from?</h1>
		<p>
			I copied the entire "graphics" directory out of the actual game folder. As
			such, it's possible to re-create the entire tech tree from
			<i>Factorio</i>, though I suspect playing the actual tech tree would
			consume your entire back yard.
		</p>
		<p>
			Doing a full Bob/Angel board game might very well have to be a community
			art project.
		</p>

		<h1>How is it different from <i>Factorio</i></h1>
		<p>It's made of paper?</p>
		<h2>Resources</h2>
		<p>
			Resources are treated differently. A resource token is meant to reporesent
			a continuous production of an item. A mine <i>is producing</i> iron ore,
			and when placed on a furnace, <i>is producing</i> iron plate. You can take
			that iron plate token and stick it on a factory and make gears.
		</p>

		<p>
			Perhaps a different way to think about it is, each turn, remove the iron
			token from the factory and return it to the pile (as it's consumed to make
			that gear). Then the furnace makes a new iron token, so take an iron token
			off the pile, and put it (back) on the factory. So, just pretend to do all
			that.
		</p>

		<h2>Belts</h2>
		<p>
			That was the plan. Factories had to be connected to paper belts, but then
			you have all these extra little belt tokens to deal with. Plus, should
			there be corner belt tokens? Splitters? Undergrounds? What about belt
			capacity?
		</p>

		<p>So, there are pretend bots bringing everything around.</p>

		<h2>Inserters</h2>
		<p>
			Again, too many tokens to deal with, for no real gameplay benefit other
			than making it look like factorio. For a time, I considered including
			inserters in the factory graphic itself, and once I did that, I just
			decided to get rid of inserters entirely. It is assumed resources are
			inserted.
		</p>

		<h1>Does your family like it?</h1>

		<p>Are you kidding? They're little kids. They like <i>Sorry!</i>.</p>

		<h1>Is it ready to play?</h1>
		<p>
			Remember your first Factorio game? All day just to get to a blue science
			pack? That's kind of where I'm at with this game. There are ten thousand
			variables that need tuned to get to a reasonably playable game.
		</p>
		<p>
			So yes, it's playable, though launching a rocket is still quite an effort.
		</p>
		<h1>I have some notes!</h1>
		<p>
			I'm on reddit.
			<a href="https://www.reddit.com/user/mainstreetmark">u/mainstreetmark</a>.
		</p>
	</div>
</template>

<script>
export default {
	name: "app",
	data () {
		return {};
	},
	created: function () {
		document.title = "About";
	},
};
</script>

<style lang="scss"></style>
