import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Google API Setup
const genAI = new GoogleGenerativeAI("AIzaSyDFdqhCQC5nfHON6hj8cKcEWSpW2ByHPFQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);

    try {
      const result = await model.generateContent(input);
      const botResponse = result.response.text();

      setResponses((prev) => [
        ...prev,
        { role: "user", text: input },
        { role: "bot", text: botResponse },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setResponses((prev) => [
        ...prev,
        { role: "bot", text: "Oops! Something went wrong. Try again later." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundColor: "#E9EED9", // Light cream background
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        className="w-full max-w-4xl p-6 rounded-lg border-4 shadow-2xl transform transition-transform hover:scale-105"
        style={{
          borderColor: "#A0937D", // Warm neutral border
          backgroundColor: "#54473F", // Dark container
          color: "#E9EED9",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Header */}
        <h2
          className="text-4xl font-bold text-center py-4"
          style={{
            color: "#A0937D",
            borderBottom: "2px solid #A0937D", // Underline header
          }}
        >
          🌿 Chat with Us 🌿
        </h2>

        {/* Chat Window */}
        <div
          className="flex flex-col p-4 space-y-4 overflow-y-auto mt-4"
          style={{
            backgroundColor: "white", // Chat area background
            color: "#54473F", // Text color
            border: "2px solid #A0937D",
            borderRadius: "10px",
            height: "500px",
          }}
        >
          {responses.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className="p-4 rounded-lg shadow-md"
                style={{
                  backgroundColor:
                    msg.role === "user" ? "#A0937D" : "#E9EED9",
                  color: msg.role === "user" ? "#E9EED9" : "#54473F",
                  border: "1px solid #A0937D",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex items-center space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg border focus:ring-2 focus:outline-none text-lg"
            style={{
              borderColor: "#54473F",
              backgroundColor: "##54473F",
              color: "#54473F",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
            style={{
              backgroundColor: "#A0937D",
              color: "#E9EED9",
              border: "1px solid #54473F",
            }}
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
