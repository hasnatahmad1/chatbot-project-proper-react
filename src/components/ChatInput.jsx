import { useState } from "react";
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'
import './styles/ChatInput.css'



export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (inputText === '') {
            return
        }

        if (isLoading === true) {
            alert('First Response already in progress')
            return;
        }

        setIsLoading(true);

        const newChatMessages = [
            ...chatMessages, {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]
        setChatMessages(newChatMessages);

        setInputText('');

        setChatMessages(
            [
                ...newChatMessages, {
                    message: (<img
                        className="loading-spinner-image"
                        src={LoadingSpinnerImage}
                    />),
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
            ]
        );

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages(
            [
                ...newChatMessages, {
                    message: response,
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
            ]
        );

        setIsLoading(false)

    }

    function eventControlling(event) {
        //console.log(event.key)
        if (event.key === 'Enter') {
            sendMessage();
        }
        if (event.key === 'Escape') {
            setInputText('');
        }
    }


    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                onKeyDown={eventControlling}
                value={inputText}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
        </div>
    );
}