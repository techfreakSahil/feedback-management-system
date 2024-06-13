export interface FeedbackEntry {
  name: string;
  feedback: string;
}
const feedbackModel = {
  feedbackEntries: [] as FeedbackEntry[],
  getAllFeedback(): FeedbackEntry[] {
    return this.feedbackEntries;
  },
  submitFeedback(name: string, feedback: string): FeedbackEntry {
    const newFeedbackEntry: FeedbackEntry = { name, feedback };
    this.feedbackEntries.push(newFeedbackEntry);
    return newFeedbackEntry;
  },
};

export default feedbackModel;
