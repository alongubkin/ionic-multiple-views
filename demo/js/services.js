angular.module('ionicMultipleViewsDemo')
	/**
	 * A simple example service that returns some data.
	 */
	.factory('MessageService', function () {
		// Some fake testing data
		
		var messages = [
			{ id: 0, senderName: 'Joe', subject: 'Hi there!', content: 'Let\'s meet for dinner today! Please?', avatar: 'http://ionicframework.com/img/docs/venkman.jpg'},
			{ id: 1, senderName: 'Twitch.tv', subject: 'Live stream today', content: 'We\'re gonna go full stream at 20:00. Make sure to be there!', avatar: 'http://ionicframework.com/img/docs/stantz.jpg'},
			{ id: 2, senderName: 'eBay', subject: 'Free shipping on branded cameras', content: 'Good news! Starting December 20th, we will start shipping branded cameras!', avatar: 'http://ionicframework.com/img/docs/spengler.jpg'},
			{ id: 3, senderName: 'PayPal', subject: 'Payment received from joe@gmail.com', content: 'To see all transaction details, please log into your account.', avatar: 'http://ionicframework.com/img/docs/winston.jpg'},
			{ id: 4, senderName: 'Tully', subject: 'Dogs!', content: 'Who brought the dog?!', avatar: 'http://ionicframework.com/img/docs/tully.jpg'},
			{ id: 5, senderName: 'Dana', subject: 'I am The Gatekeeper!', content: 'yes, yes I am!', avatar: 'http://ionicframework.com/img/docs/barrett.jpg'},
			{ id: 6, senderName: 'Slimer', subject: 'Need help!', content: 'Can you please help me with this thing?', avatar: 'http://ionicframework.com/img/docs/slimer.jpg'},
			{ id: 7, senderName: 'Jordan', subject: 'What\'s up?', content: 'We haven\'t met for years!', avatar: 'http://ionicframework.com/img/docs/venkman.jpg'},
			{ id: 8, senderName: 'Joe', subject: 'I like trains', content: 'Trains are awesome. I like trains.', avatar: 'http://ionicframework.com/img/docs/spengler.jpg'},
			{ id: 9, senderName: 'PayPal', subject: 'Payment received from joe@gmail.com', content: 'To see all transaction details, please log into your account.', avatar: 'http://ionicframework.com/img/docs/winston.jpg'},		
			{ id: 10, senderName: 'eBay', subject: 'Free shipping on branded cameras', content: 'Good news! Starting December 20th, we will start shipping branded cameras!', avatar: 'http://ionicframework.com/img/docs/spengler.jpg'},			
		];

		return {
			all: function() {
				return messages;
			},
			get: function (messageId) {
				// Simple index lookup
				return messages[messageId];
			}
		}
	});
