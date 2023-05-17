"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema
        .createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email').unique();
        table.string('password');
        table.dateTime('createdAt').defaultTo(knex.fn.now());
    })
        .createTable('location', function (table) {
        table.increments('id').primary();
        table.dateTime('createdAt').defaultTo(knex.fn.now());
        table.dateTime('updatedAt').defaultTo(knex.fn.now());
        table.string('title');
        table.specificType('coordinates', 'geometry(Point, 4326)');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema
        .dropTable("users")
        .dropTable("location");
}
exports.down = down;
//# sourceMappingURL=20230509215956_initial.js.map