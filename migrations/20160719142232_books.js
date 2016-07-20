exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'books', function( table ) {
		table.increments();
		table.string( 'title' );
		table.string( 'genre' );
		table.string( 'desc' );
		table.string( 'coverurl' );
		table.string( 'author' ).unsigned().index().references( 'bridge.author_id' ).onDelete( 'CASCADE' );
	} )
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'books' );
};
