import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('email').unique()
      table.string('password')
      table.dateTime('createdAt').defaultTo(knex.fn.now())
    })
    .createTable('location', function (table) {
      table.increments('id').primary()
      table.dateTime('createdAt').defaultTo(knex.fn.now())
      table.dateTime('updatedAt').defaultTo(knex.fn.now())
      table.string('title')
      table.specificType('coordinates', 'geometry(Point, 4326)')
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("users")
    .dropTable("location");
}

