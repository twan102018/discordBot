import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('🚀 Fetching registered commands...');
    const commands = await rest.get(Routes.applicationCommands(process.env.APP_ID));

    console.log(`Found ${commands.length} commands. Deleting...`);

    for (const command of commands) {
      console.log(`Deleting command: ${command.name} (${command.id})`);
      await rest.delete(Routes.applicationCommand(process.env.APP_ID, command.id));
    }

    console.log('✅ All commands deleted.');
  } catch (error) {
    console.error('❌ Error deleting commands:', error);
  }
})();
