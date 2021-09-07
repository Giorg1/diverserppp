const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  client.user.setPresence({
    status: "online",  // You can show online, idle, dnd or invisible
    activity: {
      name: "Diverse Roleplay",  // The message shown
      type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING,
    }
  })
});

client.on('ready', () => {
  console.log(`${client.user.username} is online`)
})

client.on("voiceStateUpdate", async function (s, ss) {
  const author = ss.member.id
  const settings = {
    type: "voice",
    permissionOverwrites: [
      {
        id: "875118884917755948",
        allow: ["SPEAK"],
        deny: ["VIEW_CHANNEL", "MOVE_MEMBERS", "DEAFEN_MEMBERS", "MUTE_MEMBERS", "CONNECT"]
      },
      {
        id: `${author}`,
        allow: ["SPEAK", "VIEW_CHANNEL"],
        deny: ["MOVE_MEMBERS", "DEAFEN_MEMBERS", "MUTE_MEMBERS", "CONNECT"]
      },
      {
        id: "875118885249089560",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885249089561",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866964",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885278453799",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866965",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866966",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866967",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866968",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866969",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866971",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866972",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866973",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885295226950",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      
    ]
  }

  if (ss.channel.id === "875118886549340295") {
    let support = await ss.guild.channels.create("📞Support Room", settings);
    await support.setParent('875118886549340293');
    await ss.member.voice.setChannel(support);

    setInterval(async () => {
      if (!support && support.members.size >= 1) {
        return
      } else if (support && support.members.size === 0) {
        await support.delete();
      }
    }, 1000);

    if (support.member.size >= 1) {
      for (let i = 0; i < support.members.size; i++) {
        let newSupport = await ss.guild.channels.create("📞Support Room", settings);
        await newSupport.setParent('875118886549340295');
        await ss.member.voice.setChannel(newSupport);

        if (!newSupport && newSupport.members.size >= 1) {
          return;
        } else {
          setInterval(async () => {
            if (!newSupport) return;
            if (newSupport && newSupport.member.size === 0) await newSupport.delete();
          }, 1000)
        }
      }
    }
  }
});

client.on("voiceStateUpdate", async function (s, ss) {
  const author = ss.member.id
  const settings = {
    type: "voice",
    permissionOverwrites: [
      {
        id: "875118884917755948",
        allow: ["SPEAK"],
        deny: ["VIEW_CHANNEL", "MOVE_MEMBERS", "DEAFEN_MEMBERS", "MUTE_MEMBERS", "CONNECT"]
      },
      {
        id: `${author}`,
        allow: ["SPEAK", "VIEW_CHANNEL"],
        deny: ["MOVE_MEMBERS", "DEAFEN_MEMBERS", "MUTE_MEMBERS", "CONNECT"]
      },
      {
        id: "875118885249089560",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885249089561",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866964",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885278453799",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866965",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866966",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866967",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866968",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866969",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866971",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866972",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885286866973",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      {
        id: "875118885295226950",
        allow: ["SPEAK", "VIEW_CHANNEL", "MOVE_MEMBERS", "CONNECT"],
        deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS"]
      },
      
    ]
  }

  if (ss.channel.id === "875118886549340298") {
    let support = await ss.guild.channels.create("💸Donate Room", settings);
    await support.setParent('875118886549340296');
    await ss.member.voice.setChannel(support);

    setInterval(async () => {
      if (!support && support.members.size >= 1) {
        return
      } else if (support && support.members.size === 0) {
        await support.delete();
      }
    }, 1000);

    if (support.member.size >= 1) {
      for (let i = 0; i < support.members.size; i++) {
        let newSupport = await ss.guild.channels.create("💸Donate Room", settings);
        await newSupport.setParent('875118886549340298');
        await ss.member.voice.setChannel(newSupport);

        if (!newSupport && newSupport.members.size >= 1) {
          return;
        } else {
          setInterval(async () => {
            if (!newSupport) return;
            if (newSupport && newSupport.member.size === 0) await newSupport.delete();
          }, 1000)
        }
      }
    }
  }
});

client.on('message', async message => {

  if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'clear') {
    client.commands.get('clear').execute(message, args);
  }

  if (command === 'covid') {
    client.commands.get('covid').execute(message, args);
  }

  if (command === 'test') {
    client.commands.get('test').execute(message, args);
  }

  if (command === 'd') {
    const exampleEmbed = new Discord.MessageEmbed()
      .setTitle('Server Boost')
      .setDescription(' > **1 Donate car**\n > (Σε περίπτωση που κάνετε transfer το server boost σας ή βγείτε από τον discord server το donate car θα κατασχεθεί)')
      .setColor('#ee00ff')
    message.channel.send(exampleEmbed);
  }

});

client.login('process.env.DJS_TOKEN')
