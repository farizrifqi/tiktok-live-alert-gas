// config.gs
const CONFIG = {
  tiktok: {
    username: ["@kohcun"],
    checkInterval: 1, // in hours
  },
  notification: {
    telegram: {
      enabled: false,
      token: "YOUR_TELEGRAM_TOKEN",
      chatId: "YOUR_CHAT_ID"
    },
    whatsapp: {
      enabled: false,
      apiKey: "YOUR_WHATSAPP_API_KEY",
      sender: "YOUR_WHATSAPP_NUMBER",
      recipient: "YOUR_WHATSAPP_NUMBER"
    },
    discord:{
      enabled: false,
      webhooks: [
        {
          url: "https://discord.com/api/webhooks/1335452249648009266/ctBV-POatxzBPf6UAt1ajFgu701qJRDOdPSDCJfVUFzdmPThGrD4ykebpXPuWN2VhLGq",
          name: "Tiktok Live",
          photo: "https://blob.cloudcomputing.id/images/d4e9c208-77de-4a07-84ca-fb950b7b21cc/logo-tiktok-l-min.jpg",
          pingEveryone: false,
        }
      ]
    },
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
