import Vue from "vue";
import VueRouter from "vue-router";

// import App from "../App.vue";
import Home from "../Home.vue";
import About from "../About.vue";
import Instructions from "../Instructions.vue";
import Assets from "../Assets.vue";
import Contact from "../Contact.vue";
import Launch from "../Launch.vue";
import Reference from "../Reference.vue";
import Tokens from "../Tokens.vue";
import Factories from "../Factories.vue";
import Deck from "../Deck.vue";
import AssetHome from "../AssetHome.vue";

Vue.use(VueRouter);
Vue.use(VueRouter);

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
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
