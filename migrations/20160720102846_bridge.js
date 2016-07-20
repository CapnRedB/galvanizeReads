exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'bridge', function( table ) {
		table.increments();
		table.integer( 'author_id' ).unsigned().index().references( 'authors.id' ).onDelete( 'CASCADE' );
		table.integer( 'book_id' ).unsigned().index().references( 'books.id' ).onDelete( 'CASCADE' );
	} )
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'bridge' );
};
