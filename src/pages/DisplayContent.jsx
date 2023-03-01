import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./DisplayContent.module.css";

export const DisplayContent = () => {
  const { state } = useLocation();

  return (
    <div className={styles.wrapper}>
      {state ? (
        <>
          <h3>
            First Name:{" "}
            <span className={styles.fontLight}>{state.firstName}</span>
          </h3>
          <h3>
            Last Name:{" "}
            <span className={styles.fontLight}>{state.lastName}</span>
          </h3>
          <h3>
            Gender: <span className={styles.fontLight}>{state.gender}</span>
          </h3>
          <h3>
            Birthdate:{" "}
            <span className={styles.fontLight}>{state.birthdate}</span>
          </h3>
          <h3>
            Mobile Number:{" "}
            <span className={styles.fontLight}>{state.mobileNumber}</span>
          </h3>
          <h3>
            Message: <span className={styles.fontLight}>{state.message}</span>
          </h3>
        </>
      ) : (
        <p>No record</p>
      )}
    </div>
  );
};
