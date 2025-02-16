export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log("Service Worker 등록 완료:", registration);
      })
      .catch((err) => console.log("Service Worker 등록 실패:", err));
  }
}
