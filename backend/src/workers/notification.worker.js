import amqp from "amqplib";
import Notification from "../models/Notification.model.js";
import { QUEUES } from "../constants/queue.constant.js"
import { sendNotification } from "../services/notification.service.js";

import dotenv from "dotenv";

import connectDB from "../config/db.js";

dotenv.config();
await connectDB();

const startWorker = async () => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = QUEUES.NOTIFICATION;
  // console.log(process.env.RABBITMQ_URL);

  await channel.assertQueue(queue, { durable: true });

  console.log("Notification Worker Started");

  channel.consume(queue, async (msg) => {
    try {
      const data = JSON.parse(msg.content.toString());

      console.log("Received notification data:", data);

      await sendNotification(data);

      await Notification.create({
        user: data.userId,
        title: data.title,
        message: data.message,
        type: data.type,
        data: data.data
      });

      channel.ack(msg);

    } catch (error) {
      console.error("Notification error:", error);
      channel.ack(msg);
    }
  });
};

startWorker();