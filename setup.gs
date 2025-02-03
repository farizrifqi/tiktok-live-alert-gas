// setup.gs
function setup() {
  try {
    Logger.log("Memulai setup TikTok Live Monitor...");

    // 1. Verifikasi konfigurasi
    if (!CONFIG.tiktok.username) {
      throw new Error("Username TikTok belum dikonfigurasi");
    }

    // 2. Setup trigger
    Logger.log("Membuat trigger otomatis...");
    createHourlyTrigger();

    // 3. Test notifikasi
    Logger.log("Menjalankan test pertama...");
    run();

    Logger.log("Setup selesai! Monitor TikTok Live sudah berjalan.");
    Logger.log(`Monitoring untuk user: ${CONFIG.tiktok.username.join(", ")}`);
    Logger.log(`Interval check: ${CONFIG.tiktok.checkInterval} jam`);
    Logger.log(`Telegram notification: ${CONFIG.notification.telegram.enabled ? "Aktif" : "Nonaktif"}`);
    Logger.log(`WhatsApp notification: ${CONFIG.notification.whatsapp.enabled ? "Aktif" : "Nonaktif"}`);

  } catch (error) {
    Logger.log("Error dalam setup:", error);
    throw error;
  }
}

// Fungsi untuk test notifikasi
function testNotification() {
  try {
    Logger.log("Menjalankan test notifikasi...");
    
    const testMessage = `🧪 TEST NOTIFICATION
    
📱 TikTok Live Monitor Test
⏰ Waktu: ${new Date().toLocaleString('id-ID')}
👤 Monitoring: ${CONFIG.tiktok.username}

✅ Jika Anda menerima pesan ini, berarti konfigurasi notification berhasil!`;

    // Test Telegram jika diaktifkan
    if (CONFIG.notification.telegram.enabled) {
      sendToTelegram(testMessage, "https://placehold.co/400x300/png");
    }

    // Test WhatsApp jika diaktifkan
    if (CONFIG.notification.whatsapp.enabled) {
      sendToWhatsApp(testMessage, "https://placehold.co/400x300/png");
    }

    if (CONFIG.notification.discord.enabled) {
      let testEmbed = {
        title: "test",
        description: "test",
      }
      sendToDiscord(testEmbed);
    }

    Logger.log("Test notifikasi selesai!");
  } catch (error) {
    Logger.log("Error dalam test notifikasi:", error);
    throw error;
  }
}
