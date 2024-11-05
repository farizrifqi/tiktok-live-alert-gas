// helper.gs
function getRoomIdFromTikTokLive(liveUrl) {
  try {
    const response = UrlFetchApp.fetch(liveUrl, {
      muteHttpExceptions: true,
      validateHttpsCertificates: true,
      followRedirects: true
    });
    
    const content = response.getContentText();
    const match = content.match(/"roomId":"(\d+)"/);
    
    if (match && match[1]) {
      return match[1];
    }
    
    Logger.log("Tidak dapat menemukan roomId dalam response");
    return null;
  } catch (error) {
    Logger.log("Error mengambil roomId:", error);
    return null;
  }
}
