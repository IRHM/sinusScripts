registerPlugin({
    name: 'sbondPokem',
    version: '2',
    description: 'Pokem bro',
    author: 'sbond',
    vars: [
		{
			name: 'admins',
			title: 'Who can use commands (User Unique/Global ID)',
			placeholder: '9x19LIsbondoLHTQ0m3G4LpQ4wE=',
			type: 'string'
		}
	],
    autorun: false
}, function(sinusbot, config){
    var event = require('event');
	var backend = require('backend');
	var engine = require('engine');

	event.on('chat', function(ev){
		// Get client
		var client = backend.getClientByName(ev.client.name());
		
		// Exit if user is not admin
		if(client.uid() != config.admins){
			exit();
		}

		engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
		
		// Check if message includes !poke
		if(ev.text.indexOf("!poke") > -1){
			alertEm("poke", ev.text);
		}
		
		// Check if message includes !chat
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
