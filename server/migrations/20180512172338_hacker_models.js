// Values stored for hacker object:
// name : text
// school : text
// major : text
// age : int
// attendedPreviously : bool
// previousHackathons : int
// email : text
// id : int
// receivedHack : bool

exports.up = function(knex, Promise) {
  return knex.schema.createTable('hacker_models', (table) => {
      table.increments('id');
      table.text('name').notNullable();
      table.text('school');
      table.text('major');
      table.integer('age').notNullable();
      table.boolean('attendedPreviously').notNullable();
      table.integer('previousHackathons').notNullable();
      table.text('email').notNullable();
      table.bool('receivedHack').defaultTo(false).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hacker_models');
};
