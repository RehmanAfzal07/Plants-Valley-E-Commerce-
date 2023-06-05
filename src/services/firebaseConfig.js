import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH8IwGxzoeqn1XpI_-wqU24MqFwyGBNLs",
  authDomain: "plantsvalley-595d9.firebaseapp.com",
  databaseURL: "https://plantsvalley-595d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "plantsvalley-595d9",
  storageBucket: "plantsvalley-595d9.appspot.com",
  messagingSenderId: "355748155099",
  appId: "1:355748155099:web:1f65a6bbdcb1293d93c6fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };










// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCH8IwGxzoeqn1XpI_-wqU24MqFwyGBNLs",
//   authDomain: "plantsvalley-595d9.firebaseapp.com",
//   projectId: "plantsvalley-595d9",
//   storageBucket: "plantsvalley-595d9.appspot.com",
//   messagingSenderId: "355748155099",
//   appId: "1:355748155099:web:1f65a6bbdcb1293d93c6fe"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// const db = getFirestore(app);


// export { auth, db };






// const firebaseConfig = {
//   apiKey: "AIzaSyC_EIFawEtVVIOFp9iYtLoMB3q2JxGp6t8",
//   authDomain: "plants-valley.firebaseapp.com",
//   projectId: "plants-valley",
//   storageBucket: "plants-valley.appspot.com",
//   messagingSenderId: "67766018646",
//   appId: "1:67766018646:web:c314e1476a4ad96244d1f7"
// };










