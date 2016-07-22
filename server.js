var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var knex = require( './db/knex' );
var bookshelf = require( 'bookshelf' )( knex );
var api = require( './api/authors' )

require( 'locus' );

// === Middleware === //
app.use( bodyParser.json() )
	.use( bodyParser.urlencoded( {
		extended: false
	} ) )
	.use( methodOverride( '_method' ) )
	.use( express.static( 'public' ) );
app.use( '/api/authors', api )

// === Routes === //
// app.get( '/api/authors', ( req, res ) => {
// 	knex( 'authors' ).then( function( result, err ) {
// 		console.log( result );
// 		res.json( result );
// 	} )
// } )


app.post( '*', ( req, res ) => {
	res.sendFile( __dirname + '/public/views/index.html' );
} )

app.get( '*', ( req, res ) => {
	res.sendFile( __dirname + '/public/views/index.html' )
} );


// === Server === //

app.listen( 3000, ( req, res ) => {
	console.log( 'Server is listening.' );
} );
