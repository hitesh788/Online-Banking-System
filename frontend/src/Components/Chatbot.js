import React, { useState } from "react";
import OpenAI from "openai";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your banking assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize OpenAI client
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Note: For production, use a backend to secure the API key
  });

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a banking assistant for a financial institution. Provide accurate, professional, and concise answers about banking services, such as savings accounts, loans, cards, interest rates, and customer support. Avoid speculative or unrelated topics." },
          ...newMessages
        ],
        max_tokens: 150,
        temperature: 0.7,
      });

      // Add assistant response to chat
      const assistantMessage = completion.choices[0].message.content;
      setMessages([...newMessages, { role: "assistant", content: assistantMessage }]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Banking Assistant</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.role === "user" ? "user-message" : "assistant-message"}`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type your question..."
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;