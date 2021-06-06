import { useState, useEffect } from "react";
import firebase from "../../firebase/config";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const storageRef = firebase.storage().ref(file.name);
    const collectionRef = firebase.firestore().collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        collectionRef.add({ url, createdAt: createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};
export default useStorage;
