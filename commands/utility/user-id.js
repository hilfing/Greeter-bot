module.exports = {
	name: 'user-id',
	description: 'Get the ID of the tagged user(s), or your own ID.',
	aliases: ['id'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your ID: <${message.author.id}>`);
		}

		const idList = message.mentions.users.map(user => {
			return `${user.username}'s ID: <${user.id}>`;
		});

		message.channel.send(idList);
	},
};
