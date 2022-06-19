import React from "react";
import { Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval height="100" width="100" color="tomato" arialLabel="Loading..." />
    </div>
  );
};

export default Loader;
