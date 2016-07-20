exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'authors', function( table ) {
		table.increments();
		table.string( 'Fname' );
		table.string( 'Lname' );
		table.string( 'bio' );
		table.string( 'imgurl' );
		table.integer( 'book_id' ).unsigned().index().references( 'bridge.books_id' ).onDelete( 'CASCADE' );
	} )
};

exports.down = function( knex, Promise ) {

};
