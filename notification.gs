// notification.gs
function sendToTelegram(message, imageUrl) {
  try {
    const telegramUrl = `https://api.telegram.org/bot${CONFIG.notification.telegram.token}/sendPhoto`;
    
    const payload = {
      chat_id: CONFIG.notification.telegram.chatId,
      photo: imageUrl,
      caption: message,
      parse_mode: "HTML"
    };
    
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload)
    };
    
    UrlFetchApp.fetch(telegramUrl, options);
    Logger.log("Berhasil mengirim notifikasi ke Telegram");
  } catch (error) {
    Logger.log("Error mengirim ke Telegram:", error);
  }
}

function sendToWhatsApp(message, imageUrl) {
  try {
    const whatsappUrl = "https://mpedia/send-media";
    
    const payload = {
      api_key: CONFIG.notification.whatsapp.apiKey,
      sender: CONFIG.notification.whatsapp.sender,
      number: CONFIG.notification.whatsapp.recipient,
      media_type: "image",
      caption: message,
      url: imageUrl
    };
    
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload)
    };
    
    UrlFetchApp.fetch(whatsappUrl, options);
    Logger.log("Berhasil mengirim notifikasi ke WhatsApp");
  } catch (error) {
    Logger.log("Error mengirim ke WhatsApp:", error);
  }
}
