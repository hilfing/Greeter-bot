module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			status: "online",  // You can show online, idle... Do not disturb is dnd
			game: {
				name: "gr!help",  // The message shown
				type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
			}
		});
	},
};
