registerPlugin({
    name: 'sbondPokem',
    version: '0.1',
    description: 'Pokem bro',
    author: 'sbond',
    vars: [],
    autorun: true
}, function(sinusbot, config){
    var event = require('event');

	event.on('chat', function(ev){
		var backend = require('backend');
		var engine = require('engine');
		var client = backend.getClientByName(ev.client.name());

		engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
		
		if(ev.text.indexOf("!poke") > -1 && client.databaseID() == "7"){
			client.chat(ev.text);
			
			var removeCommand = ev.text.replace('!poke ','');
			var user = backend.getClientByName(removeCommand);
			
			for ( var i = 0; i < 10; i++ ) {
				user.poke('Hello, ' + user.name());
			}
		}
	})
});
