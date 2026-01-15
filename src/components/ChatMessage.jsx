import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './styles/ChatMessage.css'


//ye wo component h jb user koi message kre ga or jo us ko receive ho ga.
export function ChatMessage({ message, sender }) {
    //console.log(props);
    //console.log(props.message);

    //const message = props.message;
    //const sender = props.sender;

    // shortcut for doing this upar wali cheez yr:
    //const { message, sender } = props;

    /*
    if (sender === 'user') {
        return (
            <div>
                {message}
                <img src="../user.png" width="50" />
            </div>
        );
    } else if (sender === 'robot') {
        return (
            <div>
                <img src="../robot.png" width="50" />
                {message}
            </div>
        );
    }
    */

    return (
        <div className={sender === 'user'
            ? "chat-message-user"
            : "chat-message-robot"
        }>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile" />
            )}
        </div>
    );
}