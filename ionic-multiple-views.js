angular.module('ionicMultipleViews', [])
	.directive('multipleViewsSupport', function ($state) {
		function findView(name) {
			var views = angular.element(document.body).find('ion-nav-view');
			for (var i = 0; i < views.length; i++) {
				var view = angular.element(views[i]);
				if (view.attr('name') === name) {
					return view;
				}
			}
			return false;
		}
		
		return {
			restrict: 'E',
			scope: {
				width: '@'
			},
			link: function (scope, element, attrs) {
				var views = $state.current.views;
				
				if (views) {
					var names = Object.keys($state.current.views);
					if (names.length > 1) {
						var pane = element.parent();
						var myView = pane.parent();
						
            var currentViewIndex = names.indexOf(myView.attr('name'));

            if (currentViewIndex > 0) {
                var left = 0;
                
                for (var i = 0; i < currentViewIndex; i++) {
                  var view = findView(names[i]);
                  var directiveScope = angular.element(view[0].querySelector('multiple-views-support')).scope().$$childTail;
                  left += parseInt(directiveScope.width.replace('%', ''), 10);                 
                }
                
                pane.css('left', left + '%');     
            }
				
						pane.css('width', scope.width);
					}
				}
			}
		};
	})
	.factory('MultipleViewsManager', function ($rootScope, $state) {
		var viewCallbacks = {};
		var pendingCalls = [];
		return {
			updateView: function (viewName, params) {
				if (!this.isActive()) {
					throw 'Cannot use updateView in a single view layout. Please make sure that you are in a multiple views layout using ViewManager.isActive()';
				}
				
				var callback = viewCallbacks[viewName];
				if (callback) {
					callback(params);
				} else {
					pendingCalls.push({
						viewName: viewName,
						params: params
					});
				}
			},
			isActive: function () {
				return $state.current.views && Object.keys($state.current.views).length > 1;
			},
			updated: function (name, callback) {
				viewCallbacks[name] = callback;
				
				for (var i = 0; i < pendingCalls.length; i++) {
					var call = pendingCalls[i];
					if (call.viewName === name) {
						callback(call.params);
						pendingCalls.splice(i, 1);
						return;
					}
				}
			}
		};
	});