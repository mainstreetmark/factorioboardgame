<!-- @format -->

<template>
  <div id="home">
    <div v-html="renderedContent"></div>
  </div>
</template>

<script>
import instructionsContent from "./assets/instructions.md";
import MarkdownIt from "markdown-it";

export default {
	name: "inst",
	data() {
		return {
			renderedContent: "",
		};
	},
	created() {
		const md = new MarkdownIt();
		this.renderedContent = md.render(instructionsContent);
	},
};
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
