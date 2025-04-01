module.exports = {
    autoLikeStatus: process.env.AUTO_LIKE_STATUS === 'true',
    downloadMediaStatus: process.env.DOWNLOAD_MEDIA_STATUS === 'true',
    sensorNumber: process.env.SENSOR_NUMBER === 'false',
    sendWelcomeMessage: process.env.SEND_WELCOME_MESSAGE === 'true',

    blackList: process.env.BLACK_LIST ? process.env.BLACK_LIST.split(',') : [],
    whiteList: process.env.WHITE_LIST ? process.env.WHITE_LIST.split(',') : [],

    fenixaboutype: process.env.FENIX_ABOUT_TYPE || 'Programming',
    ownerNumber: process.env.OWNER_NUMBER || '94760457315',
    userTimezone: process.env.USER_TIMEZONE || 'Asia/Colombo',
    FenixName: process.env.FENIX_NAME || 'Unknown Friend',

    // Group contact push
    fenixwel1: process.env.FENIX_WEL_1 || 'ඔයාගේ නම්බර් එක AUTO SAVE වෙනවා 🫠',
    fenixwel2: process.env.FENIX_WEL_2 || 'save නම් "SV" කියල MSG එකක් දාන්න 🌹',
    fenixwel3: process.env.FENIX_WEL_3 || 'Save and Alert me✅',

    // Status motion push
    autodetect1: process.env.AUTO_DETECT_1 || 'heyyy 😸',
    autodetect2: process.env.AUTO_DETECT_2 || 'ඔයගෙ නම්බරෙ ගත්තෙ ස්ටෙටස් එකකින් 🫠',
    privateautodetect1: process.env.PRIVATE_AUTO_DETECT_1 || 'heyyy 😸',
    privateautodetect2: process.env.PRIVATE_AUTO_DETECT_2 || 'ඔයගෙ නම්බරෙ ගත්තෙ කෙනෙක් ශෙයා කරනකොට 😫',

    // Bot details
    botDetails: {
        botName: process.env.BOT_NAME || 'VIXEN ID OWNER',
        botAge: process.env.BOT_AGE || '22',
        botLocation: process.env.BOT_LOCATION || 'SRILANKA',
        botEmail: process.env.BOT_EMAIL || 'vrjchanuka24@gmail.com',
    },

    relaxWishes: process.env.RELAX_WISHES || 'Take a deep breath... 🌿',

    // MongoDB settings
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://vihanga24:oDmu8B3olGCRsnEV@cluster0.ljxkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    dbName: process.env.DB_NAME || 'vihanga24',

    // Collections
    collections: {
        contacts: process.env.COLLECTION_CONTACTS || 'contacts',
        googleAuth: process.env.COLLECTION_GOOGLE_AUTH || 'google_auth',
    },

    // Status
    sendTranslations: process.env.SEND_TRANSLATIONS
        ? process.env.SEND_TRANSLATIONS.split(',')
        : [
            "send", "envoyer", "enviar", "invia", "senden", "ส่ง", "gửi", "отправить", "إرسال", "发送",
            "wysłać", "Sent", "Send", "one", "danna", "ewnna", "ewpm", "ewn", "එවන්න", "ඔනෙ", "ඔන",
            "දාන්න", "දම්", "එවපං", "දහම්", "එවපන්", "දපන්", "දාපන්", "දාපම්", "ඔනා", "ඔනේ", "එවහන්",
            "One", "දෙන්නකො", "ewan", "dapanko", "dapan"
        ],

    // Emojis
    emojis: process.env.EMOJIS
        ? process.env.EMOJIS.split(',')
        : [
            "🌼", "😂", "🔥", "🤍", "🥰", "😎", "🪻", "🎉", "👑", "🛒", "🚀", "💎", "🌟", "🧘‍♀️", "🌈"
        ]
};
