import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBW6e2aH1YnbOtvSVxUbeIlUDqkHHDGvcg",
  authDomain: "open-app-70928.firebaseapp.com",
  projectId: "open-app-70928",
  storageBucket: "open-app-70928.appspot.com",
  messagingSenderId: "311497496512",
  appId: "1:311497496512:web:1cd1148644155812f79a25",
  measurementId: "G-JPHMNNVYYV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
