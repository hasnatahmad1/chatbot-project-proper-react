import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'




function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      'Addition': '2+5=7',
    });
  }, []);


  //const [chatMessages, setChatMessages] = array;

  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
