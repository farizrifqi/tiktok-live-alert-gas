## README.md
# 📱 TikTok Live Alert - Google Apps Script Automation

![TikTok Live Alert]([[https://placehold.co/1200x630/png](https://blog.classy.id/upload/gambar_berita/e780f1181a8b4f28a3f370977ace83d3_20241105220512.jpeg)])

Automation tool untuk memantau status live streaming TikTok dan mendapatkan notifikasi real-time melalui Telegram dan WhatsApp menggunakan Google Apps Script. Perfect untuk creator, moderator, dan penggemar yang tidak ingin melewatkan live streaming favorit mereka.

## ✨ Fitur Utama
- 🔄 Monitoring otomatis status TikTok Live
- 📱 Dukungan notifikasi multi-platform (Telegram & WhatsApp)
- ⚡ Update real-time saat streamer mulai live
- 🎯 Konfigurasi mudah dan fleksibel
- 📊 Logging aktivitas lengkap
- 🔒 Aman dengan penyimpanan kredensial terpisah
- 👥 Multiple username

## 🚀 Cara Penggunaan

### Prerequisites
1. Akun Google (untuk Google Apps Script)
2. Bot Telegram & Token API (jika menggunakan notifikasi Telegram)
3. Akun WhatsApp Business API (jika menggunakan notifikasi WhatsApp)
4. Webhook Discord

### Langkah Instalasi
1. Buka [Google Apps Script](https://script.google.com/)
2. Buat project baru
3. Copy dan paste file-file berikut:
   - config.gs
   - main.gs
   - notification.gs
   - trigger.gs
   - helper.gs
   - utils.gs
   - setup.gs
   - formatter.gs

### Konfigurasi
1. Update konfigurasi di `config.gs`:
```javascript
const CONFIG = {
  tiktok: {
    username: ["@username_tiktok", "@username_tiktok2"],  // Username TikTok yang ingin dimonitor
    checkInterval: 1,              // Interval pengecekan (jam)
  },
  notification: {
    telegram: {
      enabled: false,
      token: "YOUR_TELEGRAM_TOKEN",
      chatId: "YOUR_CHAT_ID"
    },
    whatsapp: {
      enabled: true,
      apiKey: "YOUR_WHATSAPP_API_KEY",
      sender: "YOUR_WHATSAPP_NUMBER",
      recipient: "YOUR_WHATSAPP_NUMBER"
    },
     discord:{
      enabled: false,
      webhooks: [ // Bisa lebih dari 1 Webhooks
        {
          url: "https://discord.com/api/webhooks/1335452249648009266/ctBV-POatxzBPf6UAt1ajFgu701qJRDOdPSDCJfVUFzdmPThGrD4ykebpXPuWN2VhLGq",
          name: "Tiktok Live",
          photo: "https://blob.cloudcomputing.id/images/d4e9c208-77de-4a07-84ca-fb950b7b21cc/logo-tiktok-l-min.jpg",
          pingEveryone: false,
        }
      ]
    },
  }
};
```

2. Jalankan fungsi `setup()`
3. Verifikasi instalasi dengan fungsi `testNotification()`

## 📋 Fitur Detail

### Monitoring Otomatis
- Pengecekan status live streaming berkala
- Deteksi perubahan status secara real-time
- Pencegahan notifikasi duplikat

### Notifikasi
- Format pesan informatif dengan emoji
- Preview thumbnail live streaming
- Link langsung ke stream
- Info streamer lengkap

### Keamanan
- Penyimpanan kredensial aman
- Validasi data response
- Error handling komprehensif

## 🛠️ Pengembangan
Project ini open source dan terbuka untuk kontribusi. Beberapa ide pengembangan:
- Dukungan platform notifikasi tambahan
- Dashboard monitoring
- Statistik streaming
- Multi-streamer support

## 📝 Lisensi
MIT License
