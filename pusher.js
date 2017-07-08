module.exports = function(app) {
	var pusher = new Pusher({
	  appId: '364514',
	  key: '8fe47ff9e08c85874fce',
	  secret: 'e263dd3ee43403bae006',
	  cluster: 'us2',
	  encrypted: true
	});

	pusher.trigger('my-channel', 'my-event', {
	  "message": "goodbyeeeeeeeeeeee cruel hello world"
	});
}