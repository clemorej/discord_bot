const {MessageActionRow, MessageSelectMenu } = require('discord.js');
const fs = require('fs');
const parser = require('xml2json');

var xmldata = '';

fs.readFile('./items.xml', (err, data) => {
    if(!err){
        xmldata = parser.toJson(data, {object:true});
    }
})

module.exports = {
    name: 'messageCreate',
    execute(message) {

        console.log("Message received!");
        console.log(xmldata);

        if (message.content === 'ping') {
            const options = [];
            if(xmldata.items.category.length > 0){
                xmldata.items.category.forEach(val => {
                    options.push({label: val.name, value: val.id})
                });
            }
            // xmldata.items.forEach( val => {
            //     console.log(val)
            // });
            // console.log(xmldata.items.)
            console.log("type: " + typeof xmldata.items.category)

            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('select')
                        .setPlaceholder('Nothing selected')
                        .addOptions(options),
                );

            message.reply({ content: 'What are you looking for?', components: [row] });
        }
    },
};
