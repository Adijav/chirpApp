(function(){
	angular.module("chirpMessanger",['ngRoute','ngResource']).run(function($http, $rootScope){
		$rootScope.authenticated = false;
		$rootScope.current_user = '';

		$rootScope.signout = function(){
			$http.get('/auth/signout');
			window.location.reload(true);
			$rootScope.authenticated = false;
			$rootScope.current_user = '';
		};
	})

	.config(function($routeProvider){
		$routeProvider
			//the timeline display
		.when('/', {
			templateUrl: 'chirp.html',
			controller: 'ChirpController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'AuthController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'AuthController'
		});
	});
})();