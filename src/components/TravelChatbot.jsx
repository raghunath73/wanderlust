import { useState, useRef, useEffect } from "react";
import {
MessageCircle,
X,
Send,
Bot,
User,
LoaderCircle,
} from "lucide-react";

import { askTravelAssistant } from "../services/geminiService";

import "./TravelChatbot.css";

function TravelChatbot() {
const [isOpen, setIsOpen] = useState(false);

const [messages, setMessages] = useState([
{
role: "assistant",
text:
"Hi! 👋 I'm your Wanderlust AI travel assistant. Ask me anything about your next adventure!",
},
]);

const [input, setInput] = useState("");

const [loading, setLoading] = useState(false);

const messagesEndRef = useRef(null);

useEffect(() => {
messagesEndRef.current?.scrollIntoView({
behavior: "smooth",
});
}, [messages, loading]);

async function handleSend() {
if (!input.trim() || loading) return;


const userMessage = input.trim();

const newMessage = {
  role: "user",
  text: userMessage,
};

setMessages((previous) => [
  ...previous,
  newMessage,
]);

setInput("");

setLoading(true);

try {
  const answer =
    await askTravelAssistant(userMessage);

  setMessages((previous) => [
    ...previous,
    {
      role: "assistant",
      text: answer,
    },
  ]);
} catch (error) {
  setMessages((previous) => [
    ...previous,
    {
      role: "assistant",
      text:
        "Sorry, something went wrong. Please check your API key and try again.",
    },
  ]);
} finally {
  setLoading(false);
}


}

function handleKeyDown(event) {
if (event.key === "Enter" && !event.shiftKey) {
event.preventDefault();


  handleSend();
}


}

return (
<>
{/* CHAT BUTTON */}


  <button
    className="chatbot-toggle"
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Open AI travel assistant"
  >
    {isOpen ? (
      <X size={25} />
    ) : (
      <MessageCircle size={25} />
    )}
  </button>


  {/* CHAT WINDOW */}

  {isOpen && (
    <div className="chatbot-window">

      {/* HEADER */}

      <div className="chatbot-header">

        <div className="chatbot-title">

          <div className="bot-icon">
            <Bot size={20} />
          </div>

          <div>
            <h3>Wanderlust AI</h3>

            <span>
              Your travel assistant
            </span>
          </div>

        </div>

        <button
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>

      </div>


      {/* MESSAGES */}

      <div className="chatbot-messages">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`chat-message ${message.role}`}
          >

            <div className="message-icon">

              {message.role === "assistant" ? (
                <Bot size={16} />
              ) : (
                <User size={16} />
              )}

            </div>

            <div className="message-text">
              {message.text}
            </div>

          </div>

        ))}


        {/* LOADING */}

        {loading && (

          <div className="chat-message assistant">

            <div className="message-icon">
              <Bot size={16} />
            </div>

            <div className="typing-indicator">

              <LoaderCircle
                size={18}
                className="spinner"
              />

              Thinking...

            </div>

          </div>

        )}

        <div ref={messagesEndRef}></div>

      </div>


      {/* INPUT */}

      <div className="chatbot-input">

        <textarea
          placeholder="Ask about your next trip..."
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          onKeyDown={handleKeyDown}
          rows="1"
        />

        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          aria-label="Send message"
        >
          <Send size={19} />
        </button>

      </div>

    </div>
  )}
</>


);
}

export default TravelChatbot;
