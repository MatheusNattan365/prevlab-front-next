import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  projectId: "prevlab2-762db",
  storageBucket: "prevlab2-762db.appspot.com",
};

!firebase.app.length ? firebase.initializeApp(firebaseConfig) : null;
firebase.firestore();
export { firebase };
