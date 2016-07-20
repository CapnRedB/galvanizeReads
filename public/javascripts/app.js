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
		.when( '/books', {
			templateUrl: '/views/templates/books.html',
			controller: 'BookController',
			controllerAs: 'books'
		} )
	$locationProvider.html5Mode( {
		enabled: true,
		requireBase: false
	} )
} )
app.controller( 'IndexController', function( $scope ) {
	$scope.view = {};
	$scope.view.bookHover = false;
	$scope.view.authorHover = false;
} );

app.controller( 'AuthorController', function( $scope ) {
	$scope.view = {};
	$scope.view.greeting = "AUTHORS ARE BORING";
	$scope.blah = function() {}

} )
app.controller( 'BookController', function( $scope ) {
	$scope.view = {};
	$scope.view.greeting = "BOOKS ARE BORING";
} )
