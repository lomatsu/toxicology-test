import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("samples", function (table) {
    table.increments("id", { primaryKey: true });
    table.string('codigo_amostra', 8)
    table.float('Cocaína')
    table.float('Anfetamina')
    table.float('Metanfetamina')
    table.float('MDA')
    table.float('MDMA')
    table.float('THC')
    table.float('Morfina')
    table.float('Codeína')
    table.float('Heroína')
    table.float('Benzoilecgonina')
    table.float('Cocaetileno')
    table.float('Norcocaína')
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("samples");
}

