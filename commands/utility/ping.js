module.exports = {
	name: 'ping',
	description: 'Display ping status',
	execute(message) {
		message.channel.send("Pinging...")
		.then(m =>{
            	var ping = m.createdTimestamp - message.createdTimestamp;
		m.edit(`:ping_pong: Pong! Your Ping Is:- \n  ${ping}ms`);
		});
        }
}
