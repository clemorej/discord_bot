const {MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const MenuItems = require('../utils/menuItems')

module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        if (!interaction.isSelectMenu()) return;
        console.log("Interaction created!");

        // if (interaction.customId === 'select1') {
            const id = interaction.values[0];
            const menu = new MenuItems(id);
            const options = menu.items;
            const content = menu.label;

            const response = id.split('::')
            if (response.length == 1){
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId(id)
                            .setPlaceholder('Select something')
                            .addOptions(options),
                    );
                interaction.update({ content: content, components: [row] });
            } else {
                console.log(interaction)
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setDescription(response[2])
                interaction.update({ content: response[1], ephemeral: true, embeds:[embed], components: [] });
            }

        }
};
