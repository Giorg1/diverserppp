const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, 'embed', (message) =>
      const embed = new Discord.MessageEmbed()
    .setColor('#00ffa2')
    .setTitle('Team Ala')
    .setURL('https://discord.gg/aju4ftdw7m')
    .setDescription('Professional Gaming Organization')
    .setThumbnail('https://bit.ly/3qF1VvD')
    .addFields(
    )
    .setTimestamp()
    .setFooter('Always Look Ahead', 'https://bit.ly/3qF1VvD);

message.channel.send(embed)
    })
  })

  client.login(config.token)