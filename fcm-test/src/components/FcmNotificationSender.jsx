import { useState } from "react";
import axios from "axios";
import {
  NotificationInput,
  NotificationButton,
  NotificationMessage,
} from "./Notification";

export default function FcmNotificationSender() {
  const [inputMessage, setInputMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendNotification = async () => {
    if (!inputMessage.trim()) {
      setResponseMessage("Message cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/fcm/test-sending",
        {
          receiver_id: 1,
          content: inputMessage,
        }
      );

      if (response.status === 200) {
        setResponseMessage("Notification sent successfully!");
      } else {
        setResponseMessage("Failed to send notification.");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      setResponseMessage("Error sending notification.");
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-96">
      <h2 className="text-lg font-semibold">Send FCM Notification</h2>
      <NotificationInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
      />
      <NotificationButton onClick={sendNotification} />
      <NotificationMessage message={responseMessage} />
    </div>
  );
}
