// formatter.gs
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

function formatEmbedDiscord(data) {
  const {statusText, nowFormatted, liveRoomInfo, ownerInfo, extraInfo} = data;

  return {
        title: statusText,
        url: liveRoomInfo.liveUrl, 
        description: `
        ⏰ Waktu: ${nowFormatted} - <t:${extraInfo.now / 1000}:R>
        👤 Streamer: \`${ownerInfo.nickname} (${ownerInfo.uniqueId})\`
        💭 Bio: \`${ownerInfo.signature || '-'}\`
        🆔 Room ID: ${liveRoomInfo.roomID}

        #TikTokLive #${ownerInfo.uniqueId.replace('@', '')}
        `,
        thumbnail: {
          url: liveRoomInfo.coverUrl
        },
        color: 12058624,
  }
}