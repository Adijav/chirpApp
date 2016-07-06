//controller to authenticate the login credentials

(function(){
	angular.module("chirpMessanger")
	.controller('AuthController', ['$scope','$rootScope','$http','$location','$log', function($scope,$rootScope,$http,$location,$log){
		$scope.user = {username: '', password: ''};
		$scope.errorMessage = '';

		$scope.login = function(){
		$http.post('/auth/login', $scope.user).success(function(data){
			if(data.state == 'success'){
				$rootScope.authenticated = true;
				$log.log("DATA",data);
				$rootScope.current_user = data.user.username;
				$log.log("ROOT",$rootScope.current_user);
				$location.path('/');
			}
			else{
				$scope.error_message = data.message;
			}
		});
	};

	$scope.register = function(){
		$http.post('/auth/signup', $scope.user).success(function(data){
			if(data.state == 'success'){
				$rootScope.authenticated = true;
				$log.log("DATA",data);
				$rootScope.current_user = data.user.username;
				$location.path('/');
			}
			else{
				$scope.error_message = data.message;
			}
		});
	};
	}]);
})();