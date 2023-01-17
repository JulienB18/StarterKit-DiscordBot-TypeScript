import { Client } from "discord.js";
import { interactionCreate } from "./Listeners/interactionCreate";
import { ready } from "./Listeners/ready";
import * as dotenv from "dotenv";
dotenv.config();

const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(token);

console.log(client);
