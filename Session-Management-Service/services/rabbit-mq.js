// Message Listener
module.exports.MessageReceiver = (channel, queue) => {
    channel.consume(queue, (msg) => {
        if (msg !== null) {
            let data = JSON.parse(msg.content);
            console.log('Recieved:', data);
            
            if(data) {
                // add your logic here if you receive data from queue
            }

            // .ack() means you have consumed the message so removed it from the queue 
            channel.ack(msg);
        } else {
            console.log('Consumer cancelled by server');
        }
    });
}

module.exports.MessageSender = (channel, queue, message) => {
    channel.sendToQueue(queue, Buffer.from(message));
}