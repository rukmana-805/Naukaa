import amqp from "amqplib";

let channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    channel = await connection.createChannel();

    console.log("✅ RabbitMQ Connected");
  } catch (error) {
    console.error("❌ RabbitMQ Error:", error);
  }
};

export const getChannel = () => channel;