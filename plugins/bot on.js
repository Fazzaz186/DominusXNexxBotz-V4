let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap bro Fazz tadi ketiduran🗿* ')
}

handler.tags = ['main']
handler.command = /^(kannaon)$/i

handler.admin = true

export default handler