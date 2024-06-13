import { useEffect, useState } from "react";
import FeedbackModal from "./components/feedback-modal";
import { Header } from "./components/header";
import axios from "axios";
interface Feedback {
  name: string;
  feedback: string;
}

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      name: "sjj",
      feedback: "dd",
    },
  ]);
  const [reload, setReload] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSubmitFeedback = async (name: string, feedback: string) => {
    await axios.post("/api/submit", {
      name,
      feedback,
    });
    setReload(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/all");
      setFeedbacks(response.data);
    };
    fetchData();
  }, [reload]);

  return (
    <div className="min-h-screen bg-gray-200 container mx-auto">
      <Header />
      <main className="p-4">
        <button
          onClick={handleOpenModal}
          className="bg-gray-700 text-3xl text-white py-2 px-4 rounded"
        >
          Give Feedback
        </button>
        <FeedbackModal
          showModal={showModal}
          closeModal={handleCloseModal}
          submitFeedback={handleSubmitFeedback}
        />
        <div className="mt-4 space-y-4 flex gap-2 flex-wrap">
          {feedbacks.length !== 0 &&
            feedbacks.map((fb, index) => (
              <div
                key={index}
                className="bg-white border-[1px] border-gray-200 p-4 rounded-md shadow"
              >
                <h3 className="text-lg font-bold">{fb.name}</h3>
                <p>{fb.feedback}</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
export default App;
