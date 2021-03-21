module.exports = {
	name: 'avatar',
	description: 'Get the ID of the tagged user(s), or your own ID.',
	aliases: ['id'],
	execute(message) {
		const idList = message.mentions.users.map(user => {
			return `${user.username}'s ID: <${user.id}>`;
		});

		message.channel.send(idList);
	},
};
