// trigger.gs
function createHourlyTrigger() {
  // Hapus trigger yang ada
  const allTriggers = ScriptApp.getProjectTriggers();
  allTriggers.forEach(trigger => {
    if (trigger.getHandlerFunction() === "fetchTikTokLiveData") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  
  // Buat trigger baru
  ScriptApp.newTrigger("fetchTikTokLiveData")
    .timeBased()
    .everyHours(CONFIG.tiktok.checkInterval)
    .create();
    
  Logger.log(`Trigger dibuat: check setiap ${CONFIG.tiktok.checkInterval} jam`);
}
