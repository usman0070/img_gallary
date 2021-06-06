import React, { useState } from "react";
import useFirestore from "../components/hooks/useFirestore";
import { motion } from "framer-motion";
function ImageGrid() {
  const [detail, setDetail] = useState(false);
  const [image, setImage] = useState([]);
  const { doc } = useFirestore("images");
  //   console.log(doc);
  console.log(image);
  return (
    <div className="img_grid">
      {doc &&
        doc.map((item) => (
          <motion.div
            className="img-wrap "
            key={item.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              setImage(item.url);
              setDetail(!detail);
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={item.url}
              alt="images"
            />
          </motion.div>
        ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${detail ? "active" : null}`}
        onClick={() => setDetail(!detail)}
      >
        <motion.img
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          src={image}
          alt="modal"
          className={`${detail ? "modal-image" : "modal-image active"}`}
        />
      </motion.div>
    </div>
  );
}

export default ImageGrid;
