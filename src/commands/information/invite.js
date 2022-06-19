const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
module.exports = {
    name: "invite",
    aliases: ["inv"],
    description: "Send's invite link",

    excute: async (client, message, args, prefix) => {

        return message.reply({
            components: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setLabel(`Source Code`)
                            .setStyle('LINK')
                            .setURL(`https://github.com/programmer-offbeat/interserver-chat`),
                        new MessageButton()
                        .setLabel('Invite')
                        .setStyle('LINK')
                        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`),
                    )
            ],
            embeds: [
                new MessageEmbed()
                .setTitle(`Invitation`)
                .setDescription(`:heart: Thanks for using me , you can use the button to invite me as well as you can get my source code via other button!`)
            ]
        })
    }
}
