//controller to store user data and time stamp during a chirp
 
(function(){
	angular.module("chirpMessanger")
	
	.factory('Chirps', function($resource){
		return $resource('/api/posts/:id');
	})

	.controller('ChirpController', ['$scope','$rootScope','Chirps','$log', function($scope, $rootScope, Chirps,$log){
		$scope.posts = Chirps.query();
		$scope.newPost = {created_by:'', text:'', created_at:''};
		$scope.post = function() {
		 	$scope.newPost.created_by = $rootScope.current_user;
		  	$scope.newPost.created_at = Date.now();
		  	$log.log("NEW POST",$scope.newPost);
		  	Chirps.save($scope.newPost, function(){
			    $scope.posts = Chirps.query();
			    $scope.newPost = {created_by: '', text: '', created_at: ''};
		  });
		};
	}]);
})();