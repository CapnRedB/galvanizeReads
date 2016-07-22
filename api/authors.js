var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var knex = require( '../db/knex' );
var bookshelf = require( 'bookshelf' )( knex );

require( 'locus' );
// === Routes === //
router.get( '/', ( req, res ) => {
	knex( 'authors' ).then( function( result, err ) {
		console.log( result );
		res.json( result );
	} )
} )

// router.post( '/', ( req, res ) => {
// 	knex( 'authors' ).insert( {
// 		Fname: req.body.Fname,
// 		Lname: req.body.Lname,
// 		bio: req.body.bio,
// 		imgurl: req.body.imgurl
// 	} ).then( funcion( result, err ) {
// 		res.redirect( '/' );
// 	} )
// } )
module.exports = router;
