const responseMarkdown = (messageJSON) => {
    if (!messageJSON.ok) {
        return `Something went wrong (${messageJSON.err}). Try again?`;
    }
    const channels = messageJSON.channels;
    const phrase = messageJSON.phrase;
    if (channels.length === 0) {
        return `Sorry! I couldn't find any mentions of '${phrase}'.`;
    } else {
        let returnString = `*Channels that mention "${phrase}":*${(messageJSON.finished)? '' : ' (Not all channels were searched due to a timeout.)'}\n`;
        for (let i = 0; i < Math.min(channels.length, 4); i++) {
            const channel = channels[i];
            const count = channel.count;
            returnString += `*<#${channel.id}|${channel.name}>:* ${count} mention${(count === 1)? '' : 's'}\n`;
        }
        return returnString;
    }
}

module.exports = responseMarkdown;