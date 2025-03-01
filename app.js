import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

// Initialize Discord Client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Event: When bot is ready
client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

// Event: Handle slash commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'test') {
    await interaction.reply('Hello world! 🌍');
  }
  if (commandName === 'givelink') {
    await interaction.reply('[LINK](https://www.youtube.com/watch?v=xvFZjo5PgG0)');
}

});



// Login bot
client.login(process.env.DISCORD_TOKEN);

