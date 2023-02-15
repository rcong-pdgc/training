const { PubSub } = require('@google-cloud/pubsub');

const projectId = "lively-marking-376003";
const topicName = "training";
const subscriptionName = "training-subscription";
const pubsubClient = new PubSub({projectId});

async function publishMessage(message) {
    const data = JSON.stringify({
        message: message
    });

    const dataBuffer = Buffer.from(data, "utf8");
    try {
      const messageId = await pubsubClient.topic(topicName).publishMessage({data: dataBuffer});
      console.log(`Message ${messageId} published`);
    } catch(error) {
      console.error(`Received error while publishing: ${error.message}`);
      process.exitCode = 1;
    }
}

module.exports = publishMessage;