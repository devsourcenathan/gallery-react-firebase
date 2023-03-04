import { Gallery } from "./components/Gallery";
import { Upload } from "./components/Upload";

import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3-6XBTg-jGQGgsvznIriMh0NAqdoBISs",
  authDomain: "gallery-d2fda.firebaseapp.com",
  projectId: "gallery-d2fda",
  storageBucket: "gallery-d2fda.appspot.com",
  messagingSenderId: "1010563377535",
  appId: "1:1010563377535:web:17b9e74326a2a4196b524a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Create a storage reference from our storage service
const storageRef = ref(storage);

function App() {
  // const [file, setFile] = useState(null);
  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log("Uploaded a blob or file!");
  // });

  const items = [
    {
      name: "Nathan Gislain",
      src: "https://i.pravatar.cc/500",
    },
    {
      name: "Kadje Kevine",
      src: "https://i.pravatar.cc/500",
    },
    {
      name: "Jonathan",
      src: "https://i.pravatar.cc/500",
    },
  ];
  return (
    <>
      <Upload />
      <Gallery items={items} />
    </>
  );
}

export default App;
