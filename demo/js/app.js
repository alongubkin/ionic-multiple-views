angular.module('ionicMultipleViewsDemo', ['ionic', 'ionicMultipleViews'])

	.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('messages', {
				url: '/messages',
				templateUrl: 'templates/messages.html',
				controller: 'MessageListCtrl'
			})
			
			.state('viewMessage', {
				url: '/messages/:messageId',
				templateUrl: 'templates/view-message.html',
				controller: 'ViewMessageCtrl'
			})
			
			.state('masterDetail', {
				url: '/masterDetail',
				templateUrl: 'templates/master-detail-layout.html',
				abstract: true
			})
			
			.state('masterDetail.messages', { 
				url: '/messages',
				views: {
					'message-list': {
						templateUrl: 'templates/messages.html',
						controller: 'MessageListCtrl'
					},
					
					'view-message': {
						templateUrl: 'templates/view-message.html',
						controller: 'ViewMessageCtrl'
					}
				}
			});

		$urlRouterProvider.otherwise('/masterDetail/messages');
	});

