import { deleteToken, getToken } from "firebase/messaging";
import { messaging } from "./firebase-config";

const BACKEND_API_URL = "http://localhost:8080/api/fcm/save-token";

export const requestPermission = async () => {
  try {
    // await deleteToken(messaging);
    const token = await getToken(messaging, {
      vapidKey:
        "BKCEmN3NLjbC9RCaK3E9m3kbDtFhz1RVgz8U7Al9AuGti9LHTeNDQbfHCd0wzsWdvBio_Rxms-xiwgPbVi3YKZQ",
    });
    console.log("✅ FCM 토큰:", token);
    alert("FCM 토큰" + token);
    // 백엔드로 FCM 토큰 전송
    const response = await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fcmToken: token }),
    });
    if (!response.ok) {
      throw new Error(`서버 응답 오류: ${response.statusText}`);
    }
    console.log("✅ FCM 토큰이 백엔드에 저장되었습니다.");
  } catch (error) {
    console.error("❌ FCM 토큰 요청 실패:", error);
  }
};
