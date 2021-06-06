import React, { useEffect } from "react";
import useStorage from "../components/hooks/useStorage";
import { motion } from "framer-motion";
export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  // console.log(progress, url);
  return <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: progress + "%" }}></motion.div>;
}
