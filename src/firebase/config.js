import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXBTGq7_iv3doO8BpukUMuh-Jz61FS_qg",
  authDomain: "photos-gallery-e7c1c.firebaseapp.com",
  projectId: "photos-gallery-e7c1c",
  storageBucket: "photos-gallery-e7c1c.appspot.com",
  messagingSenderId: "319081861599",
  appId: "1:319081861599:web:57fbac08b347e206bbf46a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
