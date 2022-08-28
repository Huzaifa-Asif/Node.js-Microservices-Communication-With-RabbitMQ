// Message Listener
module.exports.MessageReceiver = (channel, queue) => {
    channel.consume(queue, (msg) => {
        if (msg !== null) {
            console.log('Recieved:', msg.content.toString());
            // .ack() means you have consumed the message so removed it from the queue 
            ch1.ack(msg);
        } else {
            console.log('Consumer cancelled by server');
        }
    });
}

module.exports.MessageSender = (channel, queue, message) => {
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
}