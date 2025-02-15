import { useState } from "react";
import {
  NotificationButton,
  NotificationInput,
  NotificationMessage,
} from "./Notification";

function FCMTest() {
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleSendNotification = () => {
    if (inputMessage.trim() === "") return;
    setMessage(`FCM Notification Sent: ${inputMessage}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">FCM Test Page</h2>
      <NotificationInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
      />
      <NotificationButton onClick={handleSendNotification} />
      <NotificationMessage message={message} />
    </div>
  );
}

export default FCMTest;
