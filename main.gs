// main.gs
function formatMessage(data) {
  const {statusText, nowFormatted, liveRoomInfo, ownerInfo} = data;
  
  return `${CONFIG.messageFormat.title}

📺 Status: ${statusText}
⏰ Waktu: ${nowFormatted}
👤 Streamer: ${ownerInfo.nickname} (${ownerInfo.uniqueId})
💭 Bio: ${ownerInfo.signature || '-'}
🆔 Room ID: ${liveRoomInfo.roomID}

🔴 Link Live:
${liveRoomInfo.liveUrl}

#TikTokLive #${ownerInfo.uniqueId.replace('@', '')}`;
}

function fetchTikTokLiveData() {
  try {
    const liveUrl = `https://www.tiktok.com/${CONFIG.tiktok.username}/live`;
    const roomId = getRoomIdFromTikTokLive(liveUrl);
    
    if (!roomId) {
      Logger.log("Error: Tidak dapat mengambil roomId dari link TikTok live.");
      return;
    }

    const apiUrl = `https://www.tiktok.com/api/live/detail/?aid=1988&roomID=${roomId}`;
    
    const response = fetchWithRetry(apiUrl);
    const jsonData = JSON.parse(response.getContentText());

    if (!validateResponseData(jsonData)) {
      Logger.log("Error: Data response tidak valid");
      return;
    }

    const {LiveRoomInfo: liveRoomInfo, extra: extraInfo} = jsonData;
    const {ownerInfo} = liveRoomInfo;

    // Format waktu
    const nowDate = new Date(extraInfo.now);
    const nowFormatted = nowDate.toLocaleDateString(
      CONFIG.messageFormat.dateFormat.locale, 
      CONFIG.messageFormat.dateFormat.options
    );

    // Status live
    const statusText = liveRoomInfo.status === 2 ? "🟢 LIVE" : 
                      (liveRoomInfo.status === 4 ? "⭕ OFFLINE" : "❓ UNKNOWN");

    // Check perubahan status
    const lastStatus = PropertyManager.get('lastStatus');
    const lastRoomId = PropertyManager.get('lastRoomId');
    const lastDate = PropertyManager.get('lastDate');
    const todayDate = new Date().toDateString();

    Logger.log(`Status: ${statusText} | RoomId: ${roomId} | Last RoomId: ${lastRoomId}`);

    if (liveRoomInfo.status === 2) {
      if (roomId !== lastRoomId || todayDate !== lastDate) {
        const messageData = {
          statusText,
          nowFormatted,
          liveRoomInfo,
          ownerInfo
        };

        const formattedMessage = formatMessage(messageData);

        // Kirim notifikasi berdasarkan konfigurasi
        if (CONFIG.notification.telegram.enabled) {
          sendToTelegram(formattedMessage, liveRoomInfo.coverUrl);
        }

        if (CONFIG.notification.whatsapp.enabled) {
          sendToWhatsApp(formattedMessage, liveRoomInfo.coverUrl);
        }

        // Update properties
        PropertyManager.setMultiple({
          'lastRoomId': roomId,
          'lastStatus': liveRoomInfo.status.toString(),
          'lastDate': todayDate
        });
      }
    }
  } catch (error) {
    Logger.log("Error dalam fetchTikTokLiveData:", error);
  }
}

function validateResponseData(jsonData) {
  try {
    return (
      jsonData &&
      jsonData.LiveRoomInfo &&
      jsonData.extra &&
      jsonData.LiveRoomInfo.ownerInfo &&
      jsonData.LiveRoomInfo.status !== undefined
    );
  } catch (error) {
    Logger.log("Error validating response data:", error);
    return false;
  }
}

function fetchWithRetry(url, maxRetries = 3) {
  const options = {
    muteHttpExceptions: true,
    validateHttpsCertificates: true,
    followRedirects: true,
    timeout: 30000
  };

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = UrlFetchApp.fetch(url, options);
      if (response.getResponseCode() === 200) {
        return response;
      }
    } catch (error) {
      Logger.log(`Attempt ${i + 1} failed:`, error);
      if (i === maxRetries - 1) throw error;
      Utilities.sleep(1000 * Math.pow(2, i));
    }
  }
  throw new Error(`Failed after ${maxRetries} attempts`);
}
