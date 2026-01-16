import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'




function App() {
  function checkLocalStorage() {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages === null) {
      return [];
    }
    else {
      return JSON.parse(savedMessages);
    }
  }

  console.log(checkLocalStorage());

  const [chatMessages, setChatMessages] = useState(checkLocalStorage());

  //const [chatMessages, setChatMessages] = array;

  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

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
