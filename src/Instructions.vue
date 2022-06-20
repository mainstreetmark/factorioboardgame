

<template>
<div id="home">
	<instructions></instructions>
</div>
</template>

<script>
import instr from './assets/instructions.md'

export default {
	name: 'inst',
	components: {
		instructions: instr
	},
	data() {
		return {}
	},
}
</script>

<style lang="scss">
#home {
    blockquote {
        border-left: 5px solid #999;
        padding-left: 5px;
    }
    h1 {
        border-bottom: 1px solid black;
    }
}
</style>
