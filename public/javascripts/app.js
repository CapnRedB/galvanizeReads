var app = angular.module( 'galvanizeReads', [ 'ngRoute', 'ngAnimate' ] );

app.config( function( $routeProvider, $locationProvider, $httpProvider ) {
	$routeProvider
		.when( '/', {
			templateUrl: '/views/templates/home.html',
			controller: 'IndexController',
			controllerAs: 'index'
		} )
		.when( '/authors', {
			templateUrl: '/views/templates/authors.html',
			controller: 'AuthorController',
			controllerAs: 'authors'
		} )
	$locationProvider.html5Mode( {
		enabled: true,
		requireBase: false
	} )
} )
app.controller( 'IndexController', function( $scope ) {
	$scope.view = {};
	$scope.view.greeting = "Test";
} );

app.controller( 'AuthorController', function( $scope ) {
	$scope.view = {};
	$scope.view.greeting = "AUTHORS ARE BORING";
} )
