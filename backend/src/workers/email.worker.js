import amqp from "amqplib";
import { sendEmail } from "../services/email.service.js";
import { QUEUES } from "../constants/queue.constant.js";

const startWorker = async () => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = QUEUES.EMAIL;

  await channel.assertQueue(queue, { durable: true });

  console.log("Email Worker Started");

  channel.consume(queue, async (msg) => {
    const data = JSON.parse(msg.content.toString());

    try {
      await sendEmail(data.email);

      channel.ack(msg);
    } catch (error) {
      console.error("❌ Email failed:", error);
    }
  });
};

startWorker();