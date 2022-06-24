import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", function (table) {
    table.increments("id", { primaryKey: true });
    table.string("login", 255).notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}

