const Discord = require("discord.js");
const client = new Discord.Client();

const { token, prefix } = require("./auth.json");

client.login(token);

client.on("ready", () => {
  console.log("Under Construction");
  client.user.setActivity("over the Horizon", { type: "WATCHING" });
});

client.on("message", async message => {
  if (message.author.bot || !message.guild) return;

  if (message.content.indexOf(prefix) !== 0) {
    return;
  }
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("Pong!");
  }

  const counter = 0;

  var reached300 = false;

  if (reached300 === true && counter !== 0) {
    counter -= 1;
  } else {
    counter += 1;
  }

  if (counter === 300) {
    reached300 = true;
  } else if (counter === 0) {
    reached300 = false;
  }

  var counterName;

  if (counter <= 10) {
    counterName = `#000${counter}`;
  } else if (counter <= 100) {
    counterName = `#00${counter}`;
  } else if (counter <= 1000) {
    counterName = `#0${counter}`;
  } else {
    counterName = `#${counter}`;
  }

  message.guild
    .createChannel(`ticket-${counterName}`, "text")
    .then(channel => {});
});
