import { Request, Response } from "express";
import feedbackModel from "../models/feedback.model";

export const getAllFeedback = (req: Request, res: Response) => {
  try {
    const feedbackEntries = feedbackModel.getAllFeedback();
    return res.status(200).json(feedbackEntries);
  } catch (err: any) {
    return res.status(500).send(err.message);
  }
};

export const submitFeedbackEntries = (req: Request, res: Response) => {
  try {
    const { name, feedback } = req.body;
    if (req.body.name === undefined || req.body.feedback === undefined) {
      return res.status(400).send("Name and feedback are required");
    }
    const newFeedbackEntry = feedbackModel.submitFeedback(name, feedback);
    return res.status(200).json(newFeedbackEntry);
  } catch (err: any) {
    return res.status(500).send(err.message);
  }
};
