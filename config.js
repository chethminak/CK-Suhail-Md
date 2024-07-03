const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chethminakavishan024@gmail.com"
global.location="Kandy,Sri Lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://menasha:mena@cluster0.0bbirha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://ck_suhail_md_user:SUTuIn9AQwcABS505JOSHgEHZQRPsEoV@dpg-cpm683uehbks73d9ab30-a/ck_suhail_md"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/chethminak/CK-Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/K66xs4MvJFG6Ix8SZMulPj";
global.website=process.env.GURL || "https://chat.whatsapp.com/K66xs4MvJFG6Ix8SZMulPj" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "> ⚡ᴘᴏᴡᴇʀᴇᴅ ʙʏ *_CK BOTS ZONE_*" 


global.devs = "94722770762" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94722770762";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94722770762";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_23_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICA3OCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwNXI4VUpkNzVSajNtQnY2VW91YVZ1MEw1bTd4WTBvd2JnL2d3VWc1TmVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqMTRhSmpXZlRjaVd4S0lCbmtQOU5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkzODY1ZDE2LWE4ZDktNGM1Yy1iNDg1LTg3MWNiYTQ0MWRiMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDU3LFxuICAgICAgMzgsXG4gICAgICAyMDksXG4gICAgICAxOCxcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgMTIzLFxuICAgICAgMjIyLFxuICAgICAgMTM1LFxuICAgICAgNzYsXG4gICAgICA4MSxcbiAgICAgIDIzNixcbiAgICAgIDE3MixcbiAgICAgIDQ1LFxuICAgICAgMjEwLFxuICAgICAgMTQwLFxuICAgICAgNjAsXG4gICAgICAxMzYsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDEyMixcbiAgICAgIDc1LFxuICAgICAgMTc2LFxuICAgICAgMTgyLFxuICAgICAgMTk0LFxuICAgICAgOTMsXG4gICAgICAxODgsXG4gICAgICAxNjksXG4gICAgICAxMDksXG4gICAgICAxODgsXG4gICAgICAxMzMsXG4gICAgICA1LFxuICAgICAgNDgsXG4gICAgICA4NixcbiAgICAgIDIyMyxcbiAgICAgIDgxLFxuICAgICAgNDUsXG4gICAgICAxMDksXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQk5IVlFXVEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc5NTEwMDEzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTg3NzY2NTMwNDU4MTc6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pMejlZR0VQNzFsYlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwOWJxckZJQzhlVEtJc0pGWmtSaytWNUFsR2xRVnNvOWFFZDhMZWdGVHdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJCYlRBNjNBMnN4Y2RIaFZmS0lRcDdvNVVpRmI2RFdZc1d6Ry8zOE5tWE43QVhuN1d2aWpuRERVNFA3TzhCNTB6dXVjN1ZsbjNzOTF1QzhzckQxZ0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJuZmpJY1YvTVhRYkYwK0lOUkRrS3RXRjEvMWJ1SEpiQTB4RXcyanlMd3k5cC9tblNKSzlabkE2eC90d1JEVXEvUERMWmZiZzVFVGxXYzVrSy9pTWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc5NTEwMDEzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDIzODEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmoyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOajIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXL2svcGJCT2hyUEVwYWo4SnNsU3gySzVDb3IrWjRYT2pNQm0raUJUWWNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTIyNzE4NDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwMDA1OTk0ODM4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "> ⚡ᴘᴏᴡᴇʀᴇᴅ ʙʏ *_CK BOTS ZONE_*"
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CK SUHAIL MD",
  ownername:process.env.OWNER_NAME|| "Chethmina Kavishan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
