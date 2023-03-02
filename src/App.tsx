import { Gallery } from "./components/Gallery";
import { Upload } from "./components/Upload";

import { initializeApp } from "firebase/app";

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

function App() {
  const items = [
    {
      name: "Jonathan",
      work: "Software Engineer",
      src: "https://i.pravatar.cc/500",
      socials: ["test", "test", "test"],
    },
    {
      name: "Jonathan",
      work: "Software Engineer",
      src: "https://i.pravatar.cc/500",
      socials: ["test", "test", "test"],
    },
    {
      name: "Jonathan",
      work: "Software Engineer",
      src: "https://i.pravatar.cc/500",
      socials: ["test", "test", "test"],
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
