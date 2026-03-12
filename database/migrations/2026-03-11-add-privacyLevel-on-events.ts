import type { Knex } from "knex";

export async function up(knex: Knex) {
  await knex.table("events").update({ privacy_level: 1 });
}
