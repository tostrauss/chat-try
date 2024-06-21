importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAgEdcHYb9UstsxJJer_F7m7gcuknOT6Xg",
  authDomain: "chat-try2.firebaseapp.com",
  projectId: "chat-try2",
  storageBucket: "chat-try2.appspot.com",
  messagingSenderId: "420004947622",
  appId: "1:420004947622:web:b27fe0efe4e1787a63f667",
  measurementId: "G-0FD2S7CKJX"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
