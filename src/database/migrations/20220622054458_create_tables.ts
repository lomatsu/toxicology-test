import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("samples", function (table) {
    table.increments("id", { primaryKey: true });
    table.string('sample_code', 8)
    table.float('cocaina')
    table.float('anfetamina')
    table.float('metanfetamina')
    table.float('mda')
    table.float('mdma')
    table.float('thc')
    table.float('morfina')
    table.float('codeina')
    table.float('heroina')
    table.float('benzoilecgonina')
    table.float('cocaetileno')
    table.float('norcocaina')
    table.string('result')
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("samples");
}

