registerPlugin({
    name: 'sbondPokem',
    version: '0.1',
    description: 'Pokem bro',
    author: 'sbond',
    vars: [],
    autorun: true
}, function(sinusbot, config){
    var event = require('event');
	var backend = require('backend');
	var engine = require('engine');

	event.on('chat', function(ev){
		var client = backend.getClientByName(ev.client.name());

		engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
		
		if(ev.text.indexOf("!poke") > -1 && client.databaseID() == "7"){
			alertEm("poke", ev.text);
		}
		
		if(ev.text.indexOf("!chat") > -1){
			alertEm("chat", ev.text);
		}
		
		function alertEm(which, command){
			if(which == "poke"){
				var removeCommand = ev.text.replace('!poke ','');
				var user = backend.getClientByName(removeCommand);
				
				for(var i = 0; i < 10; i++){
					user.poke('Hello, ' + user.name());
				}
			}
			else if(which == "chat"){
				var removeCommand = ev.text.replace('!chat ','');
				var user = backend.getClientByName(removeCommand);
				
				for(var i = 0; i < 10; i++){
					user.chat('Hello, ' + user.name());
				}
			}
			else{
				
			}
		}
	})
		
});
