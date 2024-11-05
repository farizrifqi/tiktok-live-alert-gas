// config.gs
const CONFIG = {
  tiktok: {
    username: "@kohcun",
    checkInterval: 1, // in hours
  },
  notification: {
    telegram: {
      enabled: true,
      token: "YOUR_TELEGRAM_TOKEN",
      chatId: "YOUR_CHAT_ID"
    },
    whatsapp: {
      enabled: true,
      apiKey: "YOUR_WHATSAPP_API_KEY",
      sender: "YOUR_WHATSAPP_NUMBER",
      recipient: "YOUR_WHATSAPP_NUMBER"
    }
  },
  // Konfigurasi format pesan
  messageFormat: {
    title: "🔴 TikTok Live Status Update",
    dateFormat: {
      locale: 'id-ID',
      options: { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
      }
    }
  }
};
