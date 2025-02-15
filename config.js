const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923247116683" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  "SUHAIL_03_02_02_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NixcbiAgICAgICAgODksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDkxLFxuICAgICAgICAzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNnZlZuY3VzKzJVamljeWl5SXQvQ29DQm1DSUZuRytNV0tPSGdncG5BaTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9aYU9keHhLUy1pOXZaT1Q0MVdjV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGQ0NTYyOTItMzJmZS00MTMzLTlkZWQtMzE3YTIwZjM4YzYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgNzEsXG4gICAgICAxMjcsXG4gICAgICAyMzAsXG4gICAgICAxMixcbiAgICAgIDE0NyxcbiAgICAgIDU5LFxuICAgICAgMjIxLFxuICAgICAgMTMwLFxuICAgICAgMzQsXG4gICAgICAxNTAsXG4gICAgICA0MCxcbiAgICAgIDEwNyxcbiAgICAgIDIyOCxcbiAgICAgIDI0OSxcbiAgICAgIDEyMSxcbiAgICAgIDIzMixcbiAgICAgIDE1NyxcbiAgICAgIDIxNixcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNzUsXG4gICAgICA1NSxcbiAgICAgIDkyLFxuICAgICAgMSxcbiAgICAgIDE3MyxcbiAgICAgIDQ0LFxuICAgICAgNDcsXG4gICAgICA5OCxcbiAgICAgIDkwLFxuICAgICAgMzUsXG4gICAgICA5NyxcbiAgICAgIDcyLFxuICAgICAgMTY5LFxuICAgICAgNDcsXG4gICAgICAxNDEsXG4gICAgICA4MixcbiAgICAgIDgyLFxuICAgICAgMjE5LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldSUUNDUUFIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNuk2YDZgOCjttmA2YDYr9uMINmF2YDZgNmE2YDZgNqpIFxcbuKBuVxcbsKyXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcbvCdkIvwnZCE8J2QhvCdkITwnZCN8J2QgyDwnZCI8J2QjfCdkJLwnZCI8J2Qg/CdkITigbDCucKyXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6NStkVUNFSzJId0wwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBbytvOEIwMnJTYU03cWVxVE5wb2FlQzZ5UGViN3p1RE43ZERRSURJNTR5Y2xHZTY0ZDJMdjBzWVZUb0NrYkJBR1pKdjFlazJaYkRnaUVFb2JjS25CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvRGlEQkdsRlVmcXdGZkdqV0NjL2w0UUZ6MlUyVjJNWVMyNFZMM2N6Qm5za3pQTkNhWnF4cGJiYndwYWxNejJxS3BhVnptUXhPbHN6S013OTN3WVhBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5NTg4NTMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
