## README.md
# 📱 TikTok Live Alert - Google Apps Script Automation

![TikTok Live Alert](https://placehold.co/1200x630/png)

Automation tool untuk memantau status live streaming TikTok dan mendapatkan notifikasi real-time melalui Telegram dan WhatsApp menggunakan Google Apps Script. Perfect untuk creator, moderator, dan penggemar yang tidak ingin melewatkan live streaming favorit mereka.

## ✨ Fitur Utama
- 🔄 Monitoring otomatis status TikTok Live
- 📱 Dukungan notifikasi multi-platform (Telegram & WhatsApp)
- ⚡ Update real-time saat streamer mulai live
- 🎯 Konfigurasi mudah dan fleksibel
- 📊 Logging aktivitas lengkap
- 🔒 Aman dengan penyimpanan kredensial terpisah

## 🚀 Cara Penggunaan

### Prerequisites
1. Akun Google (untuk Google Apps Script)
2. Bot Telegram & Token API (jika menggunakan notifikasi Telegram)
3. Akun WhatsApp Business API (jika menggunakan notifikasi WhatsApp)

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

### Konfigurasi
1. Update konfigurasi di `config.gs`:
```javascript
const CONFIG = {
  tiktok: {
    username: "@username_tiktok",  // Username TikTok yang ingin dimonitor
    checkInterval: 1,              // Interval pengecekan (jam)
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
