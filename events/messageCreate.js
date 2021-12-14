const {MessageActionRow, MessageSelectMenu } = require('discord.js');
const MenuItems = require('../utils/menuItems')

module.exports = {
    name: 'messageCreate',
    execute(message) {

        console.log("Message received!");
        // console.log(data.items);
        const menu = new MenuItems(null)
        // console.log()

        if (message.content === '!help') {
            const options = menu.items;
            const content = menu.label;

            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('select1')
                        .setPlaceholder('Select something')
                        .addOptions(options),
                );

            message.reply({ content: content, components: [row] });
        }
    },
};
