import express from "express"; // Imports Express.js
import reminderRoutes from "./routes/reminderRoutes.js";
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/reminders", reminderRoutes);

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
}); // Starts the server on port 3000 and logs a confirmation message.
