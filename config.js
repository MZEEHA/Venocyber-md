//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "254702700072";
global.sudo = process.env.SUDO || "254702700072";
global.owner = process.env.OWNER_NUMBER || "254702700072";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0orcVc5TUlZTUQybEY3U25WUTJiVW14eFN3V3VTWW5EaU55NEJrMUtVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2lYSmFlOENrTyszbzhreGNwajJnT2diM1BDMlhZT040MUViTGlSRzB6UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQzMxYnJTc3FQMUtRMEJzajdLdE54UFRDQ2lZVG4zWFJzK1JFSDRxcDFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBNUFiRFkwMmM4S0lzV1ZkYlFyU01mZEdZRzF0MjlURXg5Ung5OVMyTTMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOeWVLeUpxSjRCa20wekt4OW1YVTVnYzZqd3hjTDlXSEtZQlQvY0VrbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik52T0hpY1FqQUlBWERoUkV1TDZ3UTM4WjBxZ3dCcCtCcHNncWlzMnJQMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU82NWM0Y2xhVDJaNXJXZTF6T2NMK1FnSFNjako4UVJ0SFNaMVBuWitIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1Nvb2xxa3pMQ0wrbGNjdjVkYk5XTjJvM2UzOGFZS283am1rU0wyQU1nVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DVnNFY2JxcUNocDNwLysxT1FxQ0xWL3YyQWdOK1grZVZYUEwvdXIzOThobVpRblo3cTZKY2NMZ2tYUTNKVHB3SzlDc2E3VWR5bnIrQXZvL0NDYWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJUa2xVWldodFlONTRqcVhwV1Z6My8yVmFjZmJVTWt0WmlabjB1TlRpNTdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5RWVJYU1YT1RtMkk5RlBhb3F3TXlBIiwicGhvbmVJZCI6IjIwMDE1YWY1LWQwMzgtNDZkMC04NGRmLWRlYWM1MTFjNDczOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpT2RxbzUwZWlNMjhja0tZZkZmR0Q5ek9xSEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmF1UkdMWDIrRnFCR3BNSDFaQmgzeEhSd1FJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZESzhSOVc0IiwibWUiOnsiaWQiOiIyNTQ3MDI3MDAwNzI6MzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VufCdlobwnZaO8J2Wl/CdlpTwnZaH8J2WjvCdlobwnZaTIPCdlozwnZaU8J2WlPCdlpMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05XNjNLb0RFUENlazdNR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5XbDhQRyt3dVVtZGdaSExqQktOWGJTZE5hUnRmbXZ0SlFkTEE1anoyV1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBtNkQ4aGRwMExTSVZ0LzZURnJhNmxtM0lUaUE2bE40S0dMZ3NFSWZxbDM5NHFjbUtTcjhoOW9BOTlUd01INlY5em9LakZHeVFIUlBOYnlEVEhFVEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJSzRVVnJhK0M1UjVrZENVNGpjMW5oSktxNUhFVjN5U1FGRkc2Uk1DeGs5d1h3c1Y2NUlteHZBQlI0cUJ6Zmd5di9LaHlidDJKc1NMSXlWNUo1djBqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwMjcwMDA3MjozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVnBmRHh2c0xsSm5ZR1J5NHdTalYyMG5UV2tiWDVyN1NVSFN3T1k4OWxtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3ODgyNzQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNPYiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍 with supported by he.is.me checked by Wasi-ser | oyyy enjoy safe chuddy buddy any problem then https://rb.gy/izabex | don't worry we are not here to ban your accounts 😁 🦜🌝 ( https://rb.gy/izabex )",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "GOON-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "NAIROBIANGOON",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "GOON").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
