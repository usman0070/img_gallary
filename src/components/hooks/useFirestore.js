import { useState, useEffect } from "react";
import firebase from "../../firebase/config";
const useFirestore = (collection) => {
  const [doc, setDoc] = useState([]);
  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDoc(documents);
      });
    return () => unsub();
  }, [collection]);
  return { doc };
};
export default useFirestore;
