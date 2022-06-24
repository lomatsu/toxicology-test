import { Knex } from "knex";
import { encrypt } from '../../common/crypto'
export async function seed(knex: Knex): Promise<void> {
  try {
    const data = await knex("users").select("*").first();
    if (data) {
      console.log("Skipping seed table users");
      return;
    }

    const passwordHash = await encrypt(process.env.USER_PASSWORD);

    await knex("users").insert([
      {
        login: "admin",
        password: passwordHash,
      },
    ]);
  } catch (error) {
    console.log("Error on seed 01_users -> ", error);
  }
};
