import React, { useState } from "react";

interface FeedbackModalProps {
  showModal: boolean;
  closeModal: () => void;
  submitFeedback: (name: string, feedback: string) => void;
}

const FeedbackModal = ({
  showModal,
  closeModal,
  submitFeedback,
}: FeedbackModalProps) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    submitFeedback(name, feedback);
    setName("");
    setFeedback("");
    closeModal();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Submit Feedback</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full mb-2 p-2 border"
        />
        <textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="block w-full mb-2 p-2 border"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
          onClick={closeModal}
          className="ml-2 bg-gray-400 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
