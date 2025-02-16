import { useState } from "react";
import { requestPermission } from "@/notificationService";
import { Button } from "./ui/button";
import FcmNotificationSender from "./FcmNotificationSender";

function FCMTest() {
  const [message, setMessage] = useState("");

  const handleSaveFcmToken = async () => {
    await requestPermission("test_user"); // 🔥 백엔드로 FCM 토큰 저장
    setMessage("✅ FCM 토큰이 백엔드에 저장되었습니다.");
  };

  return (
    <div className="p-4">
      <Button onClick={handleSaveFcmToken}>알림 허용 & 토큰 저장</Button>
      <h2 className="text-lg font-semibold">FCM Test Page</h2>
      <FcmNotificationSender />
    </div>
  );
}

export default FCMTest;
