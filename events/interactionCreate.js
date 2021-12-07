const {MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        if (!interaction.isSelectMenu()) return;

        console.log("Interaction created!");

        if (interaction.customId === 'select' && interaction.values[0] === 'option3') {
            // await interaction.update({ content: 'Something was selected!', components: [] });
            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('select')
                        .setPlaceholder('Nothing selected2')
                        .addOptions([
                            {
                                label: 'Select me',
                                value: 'option1',
                            },
                            {
                                label: 'You can select me too',
                                value: 'option2',
                            },
                            {
                                label: 'You can select me too',
                                value: 'option3',
                            },
                        ]),
                );
            interaction.reply({ content: 'Help', components: [row] });
        }
    },
};
