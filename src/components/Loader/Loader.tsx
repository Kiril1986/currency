import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from "./Loader.module.sass"

const Loader = () => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon className={`fa-2x`} icon={faSpinner} spin/>
    <p className={styles.loading}>Loading...</p>
  </div>
);

export default Loader;
