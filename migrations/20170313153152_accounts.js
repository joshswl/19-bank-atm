
exports.up = function(knex, Promise) {
  // make a new table called "accounts"
  return knex.schema.createTable('accounts', (table) => {
    // auto icrementing "id" integer field
    table.increments('id');

    table.string('first_name');
    table.string('last_name');
    table.string('balance');
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTable('accounts');
};
