import 'dotenv/config';
import { REST, Routes } from 'discord.js';

// Define your commands
const commands = [
  {
    name: 'test',
    description: 'Basic command',
  },
  {
    name: 'givelink',
    description: 'Basic command',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('🚀 Registering slash commands...');
    await rest.put(
      Routes.applicationCommands(process.env.APP_ID),
      { body: commands }
    );
    console.log('✅ Slash commands registered successfully!');
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
})();
