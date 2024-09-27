/*
 * OwO Bot for Discord
 * Copyright (C) 2023 Christopher Thai
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
 */

const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({
	alias: ['broadcasteval'],

	owner: true,

	execute: async function () {
		const js = this.context.replace(/^```\w*/gi, '').replace(/```$/gi, '');
		this.pubsub.publish('broadcastEval', { js, channel: this.msg.channel.id });
	},
});
