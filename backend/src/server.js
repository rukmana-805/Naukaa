import dotenv from "dotenv";
import { connectRabbitMQ } from "./src/queues/rabbitmq.connection.js";

dotenv.config();

await connectRabbitMQ();

import connectDB from "./config/db.js";

import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
};

startServer();