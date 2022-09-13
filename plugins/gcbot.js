let fetch = require('node-fetch') 
 let handler = async(m, { conn }) => { 
     try { 
         let pp = await(await fetch(image)).buffer 
         let gc1 = '34649537982-1370248067@g.us' 
         let gc2 = '628112958665-1628163967@g.us' 
         let gc3 = '628112958665-1571053173@g.us' 
         let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1) 
         let _gc2 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc2) 
         let _gc3 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc3) 
         let caption = ` 
 *Join juga group official Cute Bot!* 
 Sekedar meramaikan, atau juga kalian bisa main bot di grupnya. 
  
 *Group 1* 
 ${_gc1} 
  
 *Group 2* 
 ${_gc2} 
  
 *Group 3* 
 ${_gc3} 
  
 `.trim() 
         await conn.reply(m.chat, caption, m, { contextInfo: { 
             externalAdReply: { 
               sourceUrl: 'https://youtu.be/RlhkqeUDZrA', 
               title: 'Group Minecraft', 
               body: 'MEGA BOTZ', 
               thumbnail: pp 
             } 
         }}) 
     } catch (e) { 
         let tulisan = ` 
 *MEGA BOTZ!* 
Sekedar meramaikan, atau juga kalian bisa main bot di group nya. 
  
 *Group 1* 
https://chat.whatsapp.com/E1TElUfSJY63Cs9WqNjEEC
 
*Group 2*
https://chat.whatsapp.com/IElDw6nuyJg8o0G9my1wmW
 `.trim() 
     await conn.sendButtonDoc(m.chat, tulisan.trim(), 'Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.', 'Rules', '.rules', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://instagram.com/al_pakel/',
            title: 'Gruop WhatsApp Official',
            body: '© MGBotz By Alex',
          thumbnail: await (await fetch('https://telegra.ph/file/f05029f17de62fb420459.jpg')).buffer()
        }
     }
    })
 } 
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 module.exports = handler
