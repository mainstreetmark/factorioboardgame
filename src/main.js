import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import VueMarkdown from "vue-markdown";
// import VueSimpleMarkdown from 'vue-simple-markdown';
// import 'vue-simple-markdown/dist/vue-simple-markdown.css';

// import Icon from 'vue-awesome/components/Icon';
import App from "./App.vue";
import Home from "./Home.vue";
import About from "./About.vue";
import Instructions from "./Instructions.vue";
import Assets from "./Assets.vue";
import Contact from "./Contact.vue";
import Launch from "./Launch.vue";
import Reference from "./Reference.vue";
import Tokens from "./Tokens.vue";
import Factories from "./Factories.vue";
import Deck from "./Deck.vue";
import AssetHome from "./asset_home.vue";
import VueAnalytics from "vue-analytics";

Vue.use(VueRouter);
Vue.use(VueMarkdown);

// Vue.use(VueSimpleMarkdown);
// Vue.use(VueMarkdown);
// Vue.component('icon', Icon);

const routes = [
	{ path: "/home", component: Home, alias: "/" },
	{ path: "/instructions", component: Instructions },
	{ path: "/about", component: About },
	{ path: "/contact", component: Contact },
	{
		path: "/assets",
		component: Assets,
		children: [
			{ path: "/", component: AssetHome },
			{ path: ":game/", component: AssetHome },
			{ path: ":game/launch", component: Launch },
			{ path: ":game/ref", component: Reference },
			{ path: ":game/tokens", component: Tokens },
			{ path: ":game/factories", component: Factories },
			{ path: ":game/deck", component: Deck },
		],
	},
];

const router = new VueRouter({
	mode: "hash",
	routes,
	linkActiveClass: "active",
});
window.router = router;

Vue.use(VueAnalytics, {
	id: "UA-3623770-29",
	router,
});

// new Vue({
// 	el    : '#app',
// 	render: h => h(App),
// });

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App, VueMarkdown },
});
