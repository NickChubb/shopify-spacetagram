import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const ReadMore = ({ children }) => {

    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="text">

        {isReadMore ? text.slice(0, 175) : text}

        <span onClick={toggleReadMore} className={styles.read_or_hide}>
          {isReadMore ? "... read more" : " show less"}
        </span>

      </p>
    );
  };

export default ReadMore
