require("dotenv").config();
const { ChatClient } = require("@kararty/dank-twitch-irc");
const client = new ChatClient({
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH,
  });
client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});
client.on("PRIVMSG", (message) => {
    if (message.channelName == "kattah") { // if felyp types in "kattah"
  if (message.senderUserID == 162760707 && message.messageText) { // if msg in kattah chat equals to felyp8's uid and is a msg
    client.say("kattah", `${message.messageText.replace(/[#|@|'|+|$|!|?|||*|^|%|>|=|-]/, '')} BatChest`); // then mock his msg with BatChest
  }
}
});


client.connect();
client.join("kattah"); // any chat you want to join