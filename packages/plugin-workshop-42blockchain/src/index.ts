import { type Plugin } from "@elizaos/core";
import getBalance from "./actions/getBalance";

export const workshop42BlockchainPlugin: Plugin = {
	name: "@elizaos-plugins/plugin-workshop-42blockchain",
	description: "Plugin de démonstration pour le workshop 42 Blockchain",
	config: [],
	actions: [
		getBalance
	],
	providers: [],
	evaluators: [],
	services: [],
	clients: [],
	adapters: []
};

export { workshop42BlockchainPlugin as default };
