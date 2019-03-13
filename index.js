import { Channel } from 'discord.js'

const Discord = require('discord.js');
const bot = new Discord.client();
const cfg = require('./index.json');
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien. ').catch(console.error)
});

bot.on('guilmemberAdd', member  => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur test' + member.displayName)
        console.log(`${member.displayName} a rejoins le serveur test`)
    })catch(console.error)
})

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("heureux de te revoir parmi nous")
    }
    if (msg.content.match(/salut/i))
            msg.reply('Salut.')
    if (msg.content.match(/salut/i))
    msg.reply('Je suis d\'accord avec toi.')
    if (msg.content === prefixe + "site"){
        msg.channel.send("http://www.alexpgm.tk/accueil.html")
        console.log("Une personne veut aller sur ton site")
    }
})

bot.login(cfg.token);