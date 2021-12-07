const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('View FAQ'),
    // execute(interaction) {
    //     return interaction.reply({ content: 'What are you looking for?', components: [row] });
    // },
};
