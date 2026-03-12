import type { Knex } from "knex";

export async function up(knex: Knex) {
  await knex.table("up_users").update({ access_level: 1 });
}
