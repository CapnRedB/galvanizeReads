exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'authors', function( table ) {
		table.increments();
		table.string( 'Fname' );
		table.string( 'Lname' );
		table.string( 'bio' );
		table.string( 'imgurl' );
	} )
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'authors' );
};
