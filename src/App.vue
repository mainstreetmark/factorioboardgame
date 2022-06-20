<template>
<div id="app">
	<div id='header' class='noprint'>
		<div>Factorio - The Board Game</div>
		<router-link to='/'>Home</router-link> |
		<router-link to='/about'>About</router-link> |
		<router-link to='/instructions'>Instructions</router-link> |
		<router-link :to="{path: '/assets/'+config}">Assets</router-link> |
		<router-link to="/contact">Contact</router-link>

	</div>
	<div class=" container " id='content'>
		<router-view></router-view>
	</div>

</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			config: "alpha",
		}
	}
}
</script>

<style lang="scss">
body {
    margin: 0;
    background-color: #eee;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 15px;
}

#header {
    font-weight: bold;
    font-size: 20px;
    background-color: black;
    color: white;
    padding: 10px;
}
h1 {
    font-size: 1.5em;
    border-bottom: 1px solid black;

}
h2 {
    font-size: 1.3em;
}
a {
    color: #42b983;
    text-decoration: none;
    font-weight: bold;
    &.router-link-exact-active {
        text-decoration: underline;
    }
}
@media print {
    .noprint {
        display: none;
    }
}
</style>
