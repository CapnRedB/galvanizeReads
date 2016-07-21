exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'authors', function( table ) {
		table.increments();
		table.string( 'Fname' );
		table.string( 'Lname' );
		table.varchar( 'bio', 5000 );
		table.string( 'imgurl' );
	} )
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'authors' );
};
