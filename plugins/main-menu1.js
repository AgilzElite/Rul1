let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.send2ButtonDoc(m.chat, 'ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ ArullBotz,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ Sahrull,ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ʙᴇʀʙᴀɢᴀɪ ʜᴀʟ ʏᴀɴɢ ᴀᴅᴀ ᴅɪᴅᴜɴɪᴀ ʙᴏᴛ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ʙᴏᴛ,ꜱɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ\n\nɴᴏᴛᴇ: ʜᴀʀᴀᴘ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ꜱᴇᴄᴀʀᴀ ʙɪᴊᴀᴋ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴅɪꜱᴘᴀᴍ', data.namabot, 'ʟɪꜱᴛᴍᴇɴᴜ', '.m', 'ᴏᴡɴᴇʀ', '.owner', fake)
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler

