import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


let str = `⟣─══⟪ *𝐑𝐮𝐥𝐞𝐬 𝐖𝐚𝐧𝐧𝐁𝐨𝐭𝐳-𝐌𝐃* ⟫══─⟢
            
➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot. 
➤ Dilarang Untuk Menggunakan Command 18+ Berlebihan (Ketahuan = Banned)
➤ Jangan Call/VC Bot Kalau Tidak Aktif.
➤ Call/VC Bot Auto Block.


*Hormat Kami:*\n\n*©「 𝐖𝐚𝐧𝐧𝐳𝐱-𝐌𝐝 」*
`

conn.sendButtonDoc(m.chat, str, botdate,' ⫷ ᴏᴡɴᴇʀ ⫸ ','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: '≪ ᴄʟɪᴄᴋ ʜᴇʀᴇ ⋟',
    body: botdate,
    thumbnail: await(await fetch("https://telegra.ph/file/7d08ae6675cce5dc71734.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['rules']

handler.tags = ['info']

handler.command = /^rules|peraturan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 3

export default handler