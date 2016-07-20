var app = angular.module( 'galvanizeReads', [ 'ngRoute', 'ngAnimate' ] );

app.config( function( $routeProvider, $locationProvider, $httpProvider ) {
	$routeProvider
		.when( '/', {
			templateUrl: '/views/templates/home.html',
			controller: 'IndexController',
			controllerAs: 'index'
		} );
} )
app.controller( 'IndexController', function( $scope ) {
	$scope.view = {};
	$scope.view.greeting = "Test";
} );
