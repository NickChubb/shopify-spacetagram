import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

/**
 * Wrap children text in Read More button, which cuts off the 
 * text if it is too long. 
 * 
 * @param {String} children 
 * @returns 
 */
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
