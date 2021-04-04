import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FB_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
};

export default function initFirebase() {
  console.log(process.env.NEXT_PUBLIC_FB_API_KEYFB_API_KEY);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
