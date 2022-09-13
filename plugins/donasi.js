let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Pulsa [082171432358]
│ • Gopay  [08xxxxxxxxxxxx]
│ • Dana  [082171432358]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6282171432358
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'OKEH', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
