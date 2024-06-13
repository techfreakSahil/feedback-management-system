import bodyParser from "body-parser";
import express from "express";
import {
  getAllFeedback,
  submitFeedbackEntries,
} from "./controllers/feedback.controller";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/all", getAllFeedback);
app.post("/api/submit", submitFeedbackEntries);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
