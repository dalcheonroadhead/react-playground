import { useState } from "react";
import {
  NotificationButton,
  NotificationInput,
  NotificationMessage,
} from "./Notification";
import { requestPermission } from "@/notificationService";
import { Button } from "./ui/button";

function FCMTest() {
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleSendNotification = async () => {
    if (inputMessage.trim() === "") return;
    setMessage(`FCM Notification Sent: ${inputMessage}`);
  };

  const handleSaveFcmToken = async () => {
    await requestPermission("test_user"); // 🔥 백엔드로 FCM 토큰 저장
    setMessage("✅ FCM 토큰이 백엔드에 저장되었습니다.");
  };

  return (
    <div className="p-4">
      <Button onClick={handleSaveFcmToken}>알림 허용 & 토큰 저장</Button>
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
